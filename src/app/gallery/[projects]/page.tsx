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
		<div>
			<p>I once made a {params.projects} out of yarn!</p>

			<Link href="/gallery">Previous page</Link>
		</div>
	);
}
