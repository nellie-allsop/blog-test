croch-og | Your one-stop blog for all things crochet-y

Note: need to add below to src/app/gallery/[projects]/page.tsx

// import Link from "next/link";

// type projectParam = { params: { projects: string } };

// export function generateMetaData({ params }: projectParam) {
// 	const modTitle = params.projects[0].toUpperCase() + params.projects.slice(1);
// 	return {
// 		title: `Projects | ${modTitle}`,
// 		description: `A showcase of my ${params.projects} project`,
// 	};
// }

// export default function IndividualProjectPage({ params }: projectParam) {
// 	return (
// 		<div>
// 			<p>I once made a {params.projects} out of yarn!</p>

// 			<Link href="/gallery">Previous page</Link>
// 		</div>
// 	);
// }


Need to add below to gallery page.tsx:

// import { Metadata } from "next";
// import React from "react";
// import Link from "next/link";

// export const metadata: Metadata = {
// 	title: "Gallery",
// 	description: "A gallery of some of my crochet creations",
// };

// type projectsSearchQuery = {
// 	sortBy: number;
// };

// type projectsType = {
// 	name: string;
// 	year: number;
// 	id: number;
// };

// let projects: projectsType[] = [
// 	{
// 		name: "Plant",
// 		year: 2022,
// 		id: 0,
// 	},
// 	{
// 		name: "Blanket",
// 		year: 2022,
// 		id: 1,
// 	},
// 	{
// 		name: "Bonnet",
// 		year: 2020,
// 		id: 2,
// 	},
// ];

// function compareDates(a: projectsType, b: projectsType) {
// 	if (a.year < b.year) {
// 		return -1;
// 	} else if (a.year > b.year) {
// 		return 1;
// 	} else {
// 		return 0;
// 	}
// }

// export default function Gallery({
// 	searchParams,
// }: {
// 	searchParams: projectsSearchQuery;
// }) {
// 	let sortedProjects = [...projects];

// 	if (searchParams.sortBy == "asc") {
// 		sortedProjects.sort(compareDates);
// 	} else if (searchParams.sortBy == "desc") {
// 		sortedProjects.sort(compareDates).reverse();
// 	}

// 	return (
// 		<>
// 			<h1>My past projects</h1>
// 			<p>Filter by year created</p>
// 			<Link href="/gallery">Clear filter</Link>
// 			<Link href="/gallery?sortBy=asc">Oldest first</Link>
// 			<Link href="/gallery?sortBy=desc">Latest first</Link>
// 			{sortedProjects.map((projects) => {
// 				return (
// 					<div key={projects.id}>
// 						<Link href={`/gallery/${projects.name.toLowerCase()}`}>
// 							{projects.name}
// 						</Link>
// 						<p>Year created: {projects.year}</p>
// 					</div>
// 				);
// 			})}
// 		</>
// 	);
// }

Need this on patterns, slug, page.tsx:

// import { getPosts, getPostsBySlug } from "../../../lib/posts"
// import React from "react"


// type blogPostParams = {
//   params: {
//     slug: string
//   }
// }

// export function generateStaticParams() {
//   const posts = getPosts()
//   return posts.map((post) => {
//     return {slug : post.slug}
//   }) 
// }

// export default function Page({params}: blogPostParams) {
//   const post = getPostsBySlug
//   (params.slug)

//   return (
//     <>
//     <h1>{post.title}</h1>
//     {/* <Image src={post.image} alt={post.title} height="200" width="200"/> */}
//     <p>{post.intro}</p>
//     <p>{post.pattern}</p>
//     </>
//   )

// }

Need this on level, levelslug, page:

// import { getLevel, getPostsByLevel, postType } from "@/lib/posts";
// import React from "react";

// type blogParams = {
// 	params: {
// 		levelslug: string;
// 	};
// };

// export function generateStaticParams() {
// 	const posts = getLevel();
// 	return posts.map((post) => {
// 		return { level: post.levelslug };
// 	});
// }

// export default function PatternPage({ params }: blogParams) {
// 	const posts: postType[] = getPostsByLevel(params.levelslug);

// 	return (
// 		<>
// 			{posts.map((post) => {
// 				return (
// 					<div key={post.id}>
// 						<h1>{post.title}</h1>
// 						<p>{post.intro}</p>
// 						<p>{post.pattern}</p>
// 					</div>
// 				);
// 			})}
// 		</>
// 	);
// }

Need this in levels, page:

// import Link from "next/link";
// import { getLevel } from "@/lib/posts"
// import React from "react";

// export default function LevelsPage() {
// 	const levels = getLevel();
// 	return (
// 		<>
// 			<h1>Select a pattern by level</h1>
// 			{levels.map((level) => {
// 				return (
// 					<div key={level.name}>
// 						<Link href={`/patterns/levels/${level.levelslug}`}>
// 							{level.name}
// 						</Link>
// 					</div>
// 				);
// 			})}
// 		</>
// 	);
// }
