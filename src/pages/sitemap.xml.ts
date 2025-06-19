import { GetServerSidePropsContext } from "next";
import pb from '@/lib/pocketbase';
import { Blog } from "@/types/blogs.type";

const URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://williamk19.com";

function generateSiteMap(blogs: Blog[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
		<url>
			<loc>${URL}</loc>
		</url>
		<url>
			<loc>${URL}/projects</loc>
		</url>
		<url>
			<loc>${URL}/blog</loc>
		</url>
		<url>
			<loc>${URL}/message</loc>
		</url>
		${blogs
			.map(({ slug }) => {
				return `
			<url>
				<loc>${`${URL}/blog/${slug}`}</loc>
			</url>
			`;
			})
			.join("")}
	</urlset>
	`;
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
	const blogs = await pb.collection<Blog>('blogs').getFullList({
		sort: '-created',
	});
    const sitemap = generateSiteMap(blogs);

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
	};
}

function SiteMap() {
	return null;
}

export default SiteMap;