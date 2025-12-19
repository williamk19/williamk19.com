import PocketBase from "pocketbase";

const username = process.env.NEXT_PUBLIC_PB_USERNAME;
const password = process.env.NEXT_PUBLIC_PB_PASSWORD;

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);

pb.autoCancellation(false);

const authData = await pb
    .collection("users")
    .authWithPassword(username!, password!);

export default pb;
