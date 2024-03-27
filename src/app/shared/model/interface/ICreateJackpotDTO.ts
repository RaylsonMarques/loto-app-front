export default interface ICreateJackpotDTO {
	name: string;
	gameId?: string;
	amountGames: number;
	amountDozens: number;
	contest: string;
	price: string;
	quotas: number;
	date: Date;
	isDraft: boolean;
}
