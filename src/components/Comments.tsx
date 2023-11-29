import { WEB_SITE } from "config"

export default async function Comments({ postSlug }: { postSlug: string }) {
	// `/blog/post-1`

	let comments = [];

	try {
		const commentsResult = await fetch(
			`${WEB_SITE}/api/comments/${postSlug}`,
			{ next: { revalidate: 0 } }
		);
		console.log(WEB_SITE)
		const response = await commentsResult.json();
		console.log(response);
		comments = response.comments.rows;
	} catch (err) {
		console.log(err);
	}

	return (
		<div>
			<h2>| Comments |</h2>
			<h3>Leave a comment: </h3>

			<form action={`/api/comments/${postSlug}`} method="POST">
				<label htmlFor="username">Name:</label>
				<input type="text" name="username" />

				<label htmlFor="comment">Your comment:</label>
				<textarea name="comment" cols={30} rows={10} />

				<button type="submit">Send comment</button>
			</form>
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
