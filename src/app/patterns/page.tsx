import Link from "next/link"
import { Metadata } from "next";
import React from "react";
import { getPosts } from "../../lib/posts";

export const metadata: Metadata = {
	title: "Patterns",
	description: "A collection of blog entries detailing free crochet patterns",
};

export default function Levels() {
	const posts = getPosts()
	return (
		<>
			<h1>Patterns</h1>
			<p>Find some fun patterns below</p>
			<Link href={"/patterns/levels/"}>
							Choose your pattern by proficiency level
						</Link>
			{/* <Levels /> */}
			{posts.map(post => {return (
				<p key={post.id}><Link href={`/patterns/${post.slug}`}>{post.title}</Link>
			</p>
			)
			})}
		</>
	);
}
