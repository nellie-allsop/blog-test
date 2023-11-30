import { WEB_SITE } from "config";
import React from "react";
import FormStatusButton from "./FormStatusButton";
import { saveComment } from "@/lib/comments";
import { revalidatePath } from "next/cache";

export function CommentForm({ postSlug }: { postSlug: string }) {
	console.log("This is running on the browser");

	async function handleFormSubmit(formData: FormData) {
		"use server";
		console.log("submiting the form");

		const username = formData.get("username") as string;
		const comment = formData.get("comment") as string;
		await saveComment(username, comment, postSlug);
		revalidatePath(`/blog/${postSlug}`);
	}

	return (
		<form action={handleFormSubmit}>
			<label htmlFor="username">Name</label>
			<input className="shadow" type="text" name="username" />
			<label htmlFor="comment">Comment</label>
			<textarea className="shadow" name="comment" cols={30} rows={2} />
			<FormStatusButton />
		</form>
	);
}
