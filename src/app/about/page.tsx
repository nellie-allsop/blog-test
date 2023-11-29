import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Find out about why I made this site"
}

export default function About () {
  return(
    <>
    <p>About the site</p>
    </>
  )
}