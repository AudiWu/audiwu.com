import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export const SwitchDemo = () => (
	<div className="flex items-center space-x-2">
		<Switch id="airplane-mode" aria-label="Switch" />
		<Label htmlFor="airplane-mode">Airplane Mode</Label>
	</div>
);
