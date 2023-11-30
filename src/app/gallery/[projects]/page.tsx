import Link from "next/link";

type projectParam = { params: { projects: string } };

export function generateMetaData({ params }: projectParam) {
	const modTitle = params.projects[0].toUpperCase() + params.projects.slice(1);
	return {
		title: `Projects | ${modTitle}`,
		description: `A showcase of my ${params.projects} project`,
	};
}

export default function IndividualProjectPage({ params }: projectParam) {
	return (
		<div className="p-8 flex flex-col text-center min-h-screen">
			<p>I once made a {params.projects} out of yarn!</p>

			<Link className="bg-pink-500 text-white hover:bg-purple-500 font-bold rounded py-3 px-3 w-44" href="/gallery">Previous page</Link>
		</div>
	);
}
