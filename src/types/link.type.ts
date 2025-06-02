import { RecordModel } from "pocketbase";

export type Link = RecordModel & {
    name: string;
	url_slug: string;
	destination: string;
	description: string;
};
