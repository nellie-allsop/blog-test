import { Metadata } from "next";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
	title: "About",
	description: "Find out about why I made this site",
};

export default function About() {
	return (
		<div className="p-8 flex flex-col items-center justify-center">
			<h1 className="font-bold text-4xl text-purple-500">About the site</h1>
			<p className="p-8">
				This site was created by Nellie Allsop, an aspiring dev who currently
				lives in Norwich
			</p>
			<Image
				className="rounded border-8 border-orange-400 m-8"
				src="/Codebar.jpg"
				width={325}
				height={250}
				alt="Nellie being mentored at a codebar session"
			/>
			<p className="p-3">
				<strong>Picture credit:</strong> codebar Norwich
			</p>
		</div>
	);
}
