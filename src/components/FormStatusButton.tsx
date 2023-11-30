"use client";

// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormStatusButton() {
	const { pending } = useFormStatus();
	return (
		<button className="bg-pink-500 text-white hover:bg-purple-500 font-bold rounded py-3 px-3" type="submit" disabled={pending}>
			{pending ? "Posting comment..." : "Post"}
		</button>
	);
}
