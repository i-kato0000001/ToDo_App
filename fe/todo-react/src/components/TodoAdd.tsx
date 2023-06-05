import { RefObject } from "react";

export const TodoAdd = ({ buttonText, inputEl, handleAddTodoListItem }: { buttonText: string; inputEl: RefObject<HTMLTextAreaElement>; handleAddTodoListItem: () => void }) => {
  return (
    <div className="flex justify-center w-full">
      <textarea ref={inputEl} className="h-10 w-1/2 border rounded-lg bg-red-200 m-4 p-1 text-lg"/>
      <button onClick={handleAddTodoListItem} className="m-2 flex w-full justify-center items-center px-0 py-3 text-base font-bold rounded-full shadow-md text-white bg-green-600 md:inline-flex md:w-auto md:px-12 hover:shadow-sm hover:text-black hover:bg-gradient-to-b from-blue-300 to-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-700 dark:ring-offset-gray-900 dark:focus:ring-red-400 antialiased">{buttonText}</button>
    </div>
  );
};