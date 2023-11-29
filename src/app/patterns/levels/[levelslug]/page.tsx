import { getLevel, getPostsByLevel, postType } from "@/lib/posts";

type blogParams = {
	params: {
		levelslug: string;
	};
};

export function generateStaticParams() {
	const posts = getLevel();
	return posts.map((post) => {
		return { level: post.levelslug };
	});
}

export default function PatternPage({ params }: blogParams) {
	const posts: postType[] = getPostsByLevel(params.levelslug);

	return (
		<>
			{posts.map((post) => {
				return (
					<div key={post.id}>
						<h1>{post.title}</h1>
						<p>{post.intro}</p>
						<p>{post.pattern}</p>
					</div>
				);
			})}
		</>
	);
}
