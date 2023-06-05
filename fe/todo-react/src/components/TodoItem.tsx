import React,{useState} from "react";
import { Todo } from "../types/Todo";

// 1つのTodo、内容と更新・削除ボタン
export const TodoItem = ({ todo, updateTodoListItem, deleteTodoListItem }: { todo: Todo; updateTodoListItem: any; deleteTodoListItem: any }) => {
  
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [active, setActive] = useState(false);

  const handleChangeText = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    if(event.target.value===""){
      setDisabled(true);
      setActive(false);  
    }else{
      setDisabled(false);
      setActive(true);
      setValue(event.target.value);
    }
  };
  
  // onClickイベントが発生したら、useTodoフックを呼び出す
  const handleUpdateTodoListItem = () =>{
    updateTodoListItem(todo.id,value);
    setDisabled(true);
    setActive(false);
  }
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  const year = todo.updated_at.substring(0,4);
  const month = todo.updated_at.substring(5,7);
  const day = todo.updated_at.substring(8,10);
  const hour = String(Number(todo.updated_at.substring(11,13)) + 9);
  const minute = todo.updated_at.substring(14,16);
  const second = todo.updated_at.substring(17,19);
  const datetime = year+"年"+month+"月"+day+"日"+hour+"時"+minute+"分"+second+"秒"

  // console.log("todoItemOftodo.text:",todo.text);
  // console.log("todoItemOftodo.updated_at:",todo.updated_at);
  // console.log("todoItemOftodo:",todo);
  return (
    <>
      <td className="text-3d text-center text-2xl mb-8 p-1 pb-2 border border-green-900 border-2">{todo.id}</td>
      <td className="text-center text-2xl mb-8 p-1 pb-2 border border-green-900 border-2"><input type="text" defaultValue={todo.text} onChange={handleChangeText} className="w-full p-1 pl-6 rounded-lg"/></td>
      <td className="text-center text-2xl mb-8 p-1 pb-2 border border-green-900 border-2"><input type="text" value={datetime} className="w-full p-1 pl-6 rounded-lg"/></td>
      <td className="text-center text-2xl mb-8 p-1 pb-2 border border-green-900 border-2"><button id={todo.id} onClick={handleUpdateTodoListItem} disabled={disabled} className={!active ? "" : "flex w-full justify-center items-center px-0 py-3 text-base font-bold rounded-full shadow-md text-white bg-purple-500 md:inline-flex md:w-auto md:px-12 hover:shadow-sm hover:bg-gradient-to-b hover:from-purple-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-700 dark:ring-offset-gray-900 dark:focus:ring-red-400"}>{!active ? "":"更新"}</button></td>
      <td className="text-center text-2xl mb-8 p-1 pb-2 border border-green-900 border-2"><button type="button" onClick={handleDeleteTodoListItem} className="flex w-full justify-center items-center px-0 py-3 text-base font-bold rounded-full shadow-md text-white bg-gray-500 md:inline-flex md:w-auto md:px-12 hover:shadow-sm hover:bg-gradient-to-b hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-600 dark:ring-offset-gray-900 dark:focus:ring-red-400">削除</button></td>
    </>
  );
};
