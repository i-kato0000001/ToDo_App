import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types/Todo";

// TodoItemをループして表示
// todoListが0件の場合、タイトルとTODOリストを表示しない
export const TodoList = ({
  todoList,
  updateTodoListItem,
  deleteTodoListItem,
  title,
  as,
}: {
  todoList: Todo[];
  updateTodoListItem: (id: string,value: string) => void;
  deleteTodoListItem: (id: string) => void;
  title: string;
  as: string;
}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
        <TodoTitle title={title} as={as} />
        <div className="flex justify-center">
          
          <table className="font-mono font-extrabold italic text-green-800 text-center text-2xl m-4 p-4 border border-green-900 border-2 bg-gradient-to-b from-blue-200 to-blue-100">
            <tr className="text-3d font-mono font-extrabold italic text-green-800 text-2xl m-8 p-4 border border-green-900 border-2">
              <th className="font-extrabold text-center text-4xl m-4 p-4 border border-green-900 border-2">ＮＯ</th><th className="font-extrabold text-center text-4xl m-4 p-4 border border-green-900 border-2">　　　　　ＴＯＤＯ　内容　　　　　</th><th className="font-extrabold text-center text-4xl m-4 p-4 border border-green-900 border-2">ＴＯＤＯ追加更新日時</th><th className="font-extrabold text-center text-4xl m-4 p-6 border border-green-900 border-2">　更新　</th><th className="font-extrabold text-center text-4xl m-4 p-4 border border-green-900 border-2">　削除　</th>
            </tr>
            {todoList.map((todo) => (
              <tr key={todo.id}>
                <TodoItem todo={todo} key={todo.id} updateTodoListItem={updateTodoListItem} deleteTodoListItem={deleteTodoListItem} />
              </tr>
            ))}
          </table>
        </div>
        </>
      )}
    </>
  );
};
