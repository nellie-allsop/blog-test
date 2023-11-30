import { getPosts } from "../../lib/posts"
import Link from "next/link"
import React from "react"
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Patterns",
	description: "A collection of blog entries detailing free crochet patterns",
};

export default function Page() {
  const posts = getPosts()

  return (
    <div className="p-8 flex flex-col items-center justify-center text-center">
      <h1 className="font-bold text-4xl text-purple-500">Patterns</h1>
      <p>Find some fun patterns below</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug} className="font-bold hover:text-purple-500">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}