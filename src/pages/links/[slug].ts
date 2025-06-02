import { GetServerSideProps } from "next";
import pb from "@/lib/pocketbase";
import { Link } from "@/types/link.type";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { slug } = ctx.params ?? {};

	if (!slug || Array.isArray(slug)) {
		return { notFound: true };
	}

	try {
		const link: Link = await pb
			.collection("redirect_urls")
			.getFirstListItem(`url_slug='${slug}'`);

		if (!link) {
			return { notFound: true };
		}

		return {
			redirect: {
				destination: link.destination,
				permanent: false,
			},
		};
	} catch (e) {
		console.error("redirect error:", e);
		return { notFound: true };
	}
};

export default function LinkPage() {
	return null;
}
