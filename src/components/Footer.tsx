export const Footer = () => {
  const year = new Date().getFullYear();

  return <div className="p-4">All rights reserved © {year} </div>;
};
