import {allPosts} from 'contentlayer/generated'

export function getPosts() {
  return allPosts
}

export function getPostBySlug(slug:string) {
  return getPosts().find((post) => post.slug == slug)
}



// For project

// export type postType = {
// 	title: string;
// 	slug: string;
// 	image: string;
// 	intro: string;
// 	pattern: string;
// 	level: string;
// 	id: number;
// };

// const levels = [
// 	{ name: "Beginner", levelslug: "Beginner" },
// 	{ name: "Intermediate", levelslug: "Intermediate" },
// 	{ name: "Advanced", levelslug: "Advanced" },
// ];

// const posts = [
// 	{
// 		title: "Doll Pattern",
// 		slug: "doll",
// 		image: "https://placehold.co/600x400",
// 		intro: "lorem ipsum",
// 		pattern: "pattern description",
// 		level: "Beginner",
// 		id: 0,
// 	},
// 	{
// 		title: "Blanket Pattern",
// 		slug: "blanket",
// 		image: "https://placehold.co/200x400",
// 		intro: "lorem ipsum",
// 		pattern: "describe pattern",
// 		level: "Intermediate",
// 		id: 1,
// 	},
// 	{
// 		title: "Gloves Pattern",
// 		slug: "gloves",
// 		image: "https://placehold.co/600x200",
// 		intro: "lorem ipsum",
// 		pattern: "pattern instructions",
// 		level: "Advanced",
// 		id: 2,
// 	},
// ];

// export function getPosts() {
// 	return posts;
// }

// export function getPostsBySlug(slug: string) {
// 	return posts.find((post) => post.slug === slug);
// }

// export function getLevel() {
// 	return levels;
// }

// export function getPostsByLevel(levelslug: string) {
// 	return posts.filter((post) => post.level === levelslug);
// }
