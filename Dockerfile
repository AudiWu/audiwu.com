FROM node:22-alpine AS base

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN corepack enable

WORKDIR /app

# By copying only the package.json and pnpm-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY package.json pnpm-lock.yaml ./

FROM base AS prod-deps
RUN pnpm install --production

FROM base AS build-deps
RUN pnpm install --production=false

FROM build-deps AS build

COPY . .
# 👇 Cloudinary ENV
ARG PUBLIC_CLOUDINARY_CLOUD_NAME
ARG PUBLIC_CLOUDINARY_API_KEY
ENV PUBLIC_CLOUDINARY_CLOUD_NAME=$PUBLIC_CLOUDINARY_CLOUD_NAME
ENV PUBLIC_CLOUDINARY_API_KEY=$PUBLIC_CLOUDINARY_API_KEY

# Secured way to expose secret to the build 
# https://docs.docker.com/build/building/secrets/
RUN --mount=type=secret,id=CLOUDINARY_API_SECRET \
  export CLOUDINARY_API_SECRET=$(cat /run/secrets/CLOUDINARY_API_SECRET) && \
  pnpm build


FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs
