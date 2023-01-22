import { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import TodoList from "./Components/todo";

function App() {
  let [inputText, setInputText] = useState("");
  const [listItems, setlistItems] = useState([]);

  const changeText = (e) => {
    setInputText(e.target.value);
  };
  const buttonClick = (e) => {
    e.preventDefault();
    if (inputText != "") {
      inputText = inputText.charAt(0).toUpperCase() + inputText.slice(1);

      listItems.push(inputText);
      console.log(listItems);
    }
    setInputText("");
  };

  const deleteItem = (id) => {
    console.log("deleted" + id);
    setlistItems(() => {
      return listItems.filter((item, index) => {
        return index != id;
      });
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex my-9 justify-center">
        <form className="flex w-5/6 lg:w-1/2 xl:w-1/3 ">
          <input
            type="text"
            placeholder="Add items"
            onChange={changeText}
            className="bg-cyan-600 rounded-md text-cyan-50 w-full p-2 px-3 text-sm 
                      focus:outline-none placeholder:text-cyan-100 placeholder:opacity-80"
            value={inputText}
          />
          <button
            onClick={buttonClick}
            className="mx-2 w-9 h-9 text-white rounded-md bg-cyan-600  font-bold text-xl p-2 py-0"
          >
            +
          </button>
        </form>
      </div>

      <div className="mt-11 transition">
        {listItems.map((item, index) => {
          return (
            <TodoList
              text={item}
              key={index}
              id={index}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
