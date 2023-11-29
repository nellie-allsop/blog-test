import { WEB_SITE } from "config";
import { CommentForm } from "./CommentForm";

export default async function Comments({ postSlug }: { postSlug: string }) {
	// `/blog/post-1`

	let comments = [];

	try {
		const commentsResult = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, {
			next: { revalidate: 0 },
		});
		console.log(WEB_SITE);
		const response = await commentsResult.json();
		console.log(response);
		comments = response.comments.rows;
	} catch (err) {
		console.log(err);
	}

	return (
		<div>
			<CommentForm postSlug={postSlug} />
			<h2>| Comments |</h2>
			<ul>
				{/* @ts-ignore */}
				{comments.map((comment) => {
					return (
						<li key={comment.id}>
							{comment.username} says...
							<br />
							{comment.content}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
