import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Gallery",
	description: "A gallery of some of my crochet creations",
};

type projectsSearchQuery = {
	sortBy: number;
};

type projectsType = {
	name: string;
	year: number;
	id: number;
	image: string;
};

let projects: projectsType[] = [
	{
		name: "Plant",
		year: 2022,
		id: 0,
		image: "/audrey.jpg"
	},
	{
		name: "Blanket",
		year: 2022,
		id: 1,
		image: "/blanket.png"
	},
	{
		name: "Bonnet",
		year: 2020,
		id: 2,
		image: "/audrey.jpg"
	},
];

function compareDates(a: projectsType, b: projectsType) {
	if (a.year < b.year) {
		return -1;
	} else if (a.year > b.year) {
		return 1;
	} else {
		return 0;
	}
}

export default function Gallery({
	searchParams,
}: {
	searchParams: projectsSearchQuery;
}) {
	let sortedProjects = [...projects];

	if (searchParams.sortBy == "asc") {
		sortedProjects.sort(compareDates);
	} else if (searchParams.sortBy == "desc") {
		sortedProjects.sort(compareDates).reverse();
	}

	return (
		<div className="p-8 flex flex-col items-center justify-center text-center">
			<h1 className="font-bold text-4xl text-purple-500">My past projects</h1>
			<p>Filter by year created</p>
			<div className="flex flex-row justify-around m-8">
				<Link
					href="/gallery"
					className="font-bold text-orange-500 hover:text-purple-500 p-5"
				>
					Clear filter
				</Link>
				<Link
					href="/gallery?sortBy=asc"
					className="font-bold text-orange-500 hover:text-purple-500 p-5"
				>
					Oldest first
				</Link>
				<Link
					href="/gallery?sortBy=desc"
					className="font-bold text-orange-500 hover:text-purple-500 p-5"
				>
					Latest first
				</Link>
			</div>

			{sortedProjects.map((projects) => {
				return (
					<div key={projects.id}>
						<Link
							href={`/gallery/${projects.name.toLowerCase()}`}
							className="font-bold hover:text-purple-500"
						>
							{projects.name}
						</Link>
						<p>Year created: {projects.year}</p>
						<Image
					src={`${projects.image}`}
					width={64}
					height={64}
					alt="crochog logo"
				/>
					</div>
				);
			})}
		</div>
	);
}
