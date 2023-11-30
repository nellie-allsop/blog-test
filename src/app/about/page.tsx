import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Find out about why I made this site"
}

export default function About () {
  return(
    <div className="p-8 flex flex-col items-center justify-center">
    <h1 className="font-bold text-4xl text-purple-500">About the site</h1>
    </div>
  )
}