"use client";

import Image from "next/image";

export default function Home() {
  return ( <h1>
            <button
              onClick={() => console.log("clicked")}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
            >
              Click me
            </button>
            </h1>);
}