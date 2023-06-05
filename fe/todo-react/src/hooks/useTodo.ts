import React, { useState, useEffect, useRef } from "react";

import * as todoData from "../apis/todos";
import { Todo } from "../types/Todo";

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);




  useEffect(() => {
    todoData.getAllTodosData().then((todo) => {
      console.log(...todo);
      setTodoList([...todo].reverse());
    });
  }, []);

  const updateTodoListItem = (id: string, value: string) => {

    console.log(id);
    console.log(value);

    // todoListから、idが一致する1件を取り出す
    const todoItem = todoList.find((item: Todo) => item.id === id);
    if(!todoItem){
        return;
    }
    const newTodoItem: string = value;
    
    // サーバに更新API呼ぶ
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      // 成功したら、todoListを更新。idが一致しているものを、サーバーから返ってきたupdatedTodoで更新する
      const newTodoList = todoList.map((item) => (item.id !== updatedTodo.id ? item : updatedTodo));
      // 新しいtodoListをstateにセットする
      setTodoList(newTodoList);
    });
  };

  const addTodoListItem = (todoText: string) => {
    // あたらしいitemを作成する
    const newTodoItem = todoText;

    // サーバーの追加APIを呼ぶ
    todoData.addTodoData(newTodoItem).then((addTodo) => {
      // addTodoをtodoListに追加してstateにセットする
      setTodoList([addTodo, ...todoList]);
    });
  };

  const deleteTodoListItem = (id: string) => {
    // サーバーの削除APIを呼ぶ
    todoData.deleteTodoData(id).then((deletedid) => {
      const newTodoList = todoList.filter((item) => item.id !== deletedid);
      // 1件削除された新しいtodoListに追加してstateにセットする
      setTodoList(newTodoList);
    });
  };

  // 作成した関数を返す
  return { todoList, updateTodoListItem, addTodoListItem, deleteTodoListItem };
};