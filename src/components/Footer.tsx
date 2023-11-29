import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="flex justify-around">
			<p>Created by Nellie</p>
			<Link href="https://github.com/nellie-allsop">Check out my Github</Link>
		</footer>
	);
}