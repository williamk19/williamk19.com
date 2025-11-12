import PocketBase from "pocketbase";

const token = process.env.NEXT_PUBLIC_PB_TOKEN;

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);
pb.authStore.save(token!, null);

export default pb;
