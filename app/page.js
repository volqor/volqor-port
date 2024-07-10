import React from "react";

import "../public/CSS/bootstrap.css";

import Introduction from "./home/Introduction";
import Cards from "./home/Cards";




export default function Home() {
  return (
    <main>
      <div className="mt-5">
        <Introduction />
        <Cards />
      </div>
    </main>
  )
}
