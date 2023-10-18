import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export const TabsDemo = () => (
	<Tabs defaultValue="account" className="w-[400px] flex flex-col justify-center items-center">
		<TabsList>
			<TabsTrigger value="account">Account</TabsTrigger>
			<TabsTrigger value="password">Password</TabsTrigger>
		</TabsList>
		<TabsContent value="account">
			Make changes to your account here.
		</TabsContent>
		<TabsContent value="password">Change your password here.</TabsContent>
	</Tabs>
);
