import { ScreenNameEnum } from "@loto/shared";

export interface IMenuItems {
	title: string;
	name: ScreenNameEnum;
	url: string;
	icon?: string;
	enabled: boolean;
	active: boolean;
	appOption: boolean;
	subitems?: IMenuItems[];
}
