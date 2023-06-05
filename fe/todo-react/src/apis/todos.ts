import axios from "axios";
import { Todo } from "../types/Todo";

const todoDataUrl = "http://localhost/api/todo"

// 全TODOリスト取得
export const getAllTodosData = async () => {
    const response = await axios.get(todoDataUrl);
    //console.log(response.data);
    return response.data;
  };
// 1件のTODOを追加する
export const addTodoData = async (text: string) => {
  console.log("PostText:",text);
  const response = await axios.post(`${todoDataUrl}`,{text:text});
  return response.data;
};

// 1件のTODOを削除する
export const deleteTodoData = async (id: string) => {
  console.log("DeleteId:",id);
  await axios.delete(`${todoDataUrl}/?id=${id}`);
  return id;
};

// 1件のTODOを更新する
export const updateTodoData = async (id: string, text: string | undefined) => {
  const response = await axios.put(`${todoDataUrl}/?id=${id}`, {text:text});
  return response.data;
};