import React from "react";

export default function todo(props) {
  return (
    <div className="transition flex gap-2 items-center justify-between text-cyan-100 px-3 my-4 pb-2 mx-auto border-cyan-600 w-5/6 lg:w-1/2 xl:w-1/3  border-b-2">
      <li className="list-none">{props.text}</li>
      <button
        onClick={() => {
          props.deleteItem(props.id);
        }}
        className="bg-cyan-600 px-2 py-1 rounded h-8"
      >
        Done
      </button>
    </div>
  );
}
