import { ScreenNameEnum } from "../../../shared/enums/ScreenNameEnum";

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
