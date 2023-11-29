import Link from "next/link";

export default function Header() {
	return (
		<nav>
			<Link href="/">Home </Link>
			<Link href="/patterns">Patterns</Link>
			<Link href="/gallery">Gallery</Link>
			<Link href="/about">About</Link>
		</nav>
	);
}