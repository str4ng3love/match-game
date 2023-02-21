"use client";
import { useState } from "react";
export default function PopRules() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
      
          <div className="absolute flex flex-col bg-black p-4 rounded-md text-white min-w-[500px] items-center m-4  shadow-black shadow-lg">
          <h2 className="text-2xl">Them Rules:</h2>
            <div className="p-4 flex flex-col ">
              <ul>
                <li className="p-4">
                  <span className="text-lg">
                    1. Click tiles to flip images.
                  </span>
                </li>
                <li className="p-4">
                  <span className="text-lg">
                    2. Try to match images to score.
                  </span>
                </li>
                <li className="p-4">
                  <span className="text-lg">
                    3. The less moves you need to match all the images, the
                    better your score.
                  </span>
                </li>
              </ul>
            </div>
            <button
              onClick={(e) => setShow(false)}
              className="p-4 bg-black rounded-md text-2xl hover:bg-white hover:text-black"
            >
              PLAY
            </button>
          </div>

      ) : (
        <></>
      )}
    </>
  );
}