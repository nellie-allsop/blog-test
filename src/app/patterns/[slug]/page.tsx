import { getPosts, getPostsBySlug } from "../../../lib/posts"
import React from "react"


type blogPostParams = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  const posts = getPosts()
  return posts.map((post) => {
    return {slug : post.slug}
  }) 
}

export default function Page({params}: blogPostParams) {
  const post = getPostsBySlug
  (params.slug)

  return (
    <>
    <h1>{post.title}</h1>
    {/* <Image src={post.image} alt={post.title} height="200" width="200"/> */}
    <p>{post.intro}</p>
    <p>{post.pattern}</p>
    </>
  )

}