import PocketBase from 'pocketbase';

const pbUrl = process.env.NEXT_PUBLIC_PB_URL || 'https://pb.williamk19.com';
const pb = new PocketBase(pbUrl);

export default pb;
