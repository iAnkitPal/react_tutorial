import { useState } from "react";

export function BgChanger(params) {
  const [color, setColor] = useState("black");
  return (
    <>
      {" "}
      <div
        className="container h-full bg-transparent"
        style={{ height: "100vh", backgroundColor: color }}
      >
        <div className="flex justify-center pt-4 flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <button
            type="button"
            onClick={() => {setColor("black")}}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Black
          </button>
          <button
            type="button"
            onClick={() => {setColor("Yellow")}}
            className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Yellow
          </button>
          <button
            type="button"
            onClick={() => {setColor("Red")}}
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Red
          </button>
          <button
            type="button"
            onClick={() => {setColor("Green")}}
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Green
          </button>
        </div>
      </div>
    </>
  );
}
