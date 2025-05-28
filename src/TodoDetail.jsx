import { useParams, Link } from "react-router-dom";
import { useTodo } from "./TodoContext";
import { useEffect, useState, useRef } from "react";

function TodoDetail() {
  const { id } = useParams();
  console.log(id);
  const { todoList, setTodoList } = useTodo();
  if (!todoList.length) {
    return <div className="text-gray-400 text-center mt-10">Loading...</div>;
  }
  const todo = todoList.find((item) => {
    return item.id == id;
  });
  const [text, setText] = useState("");

  useEffect(() => {
    setText(todo.text);
  }, [todo]);

  const handleChange = (e) => {
    debugger;
    console.log(e.target.value);
    setText(e.target.value);
    let newList = [...todoList];
    newList = newList.map((item) =>
      item.id == id ? { ...item, text: e.target.value } : item
    );
    setTodoList(newList);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-bold text-gray-800">📝 タスク編集</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <p className="text-sm text-gray-600">
        状態：{todo.done ? "✅ 完了" : "⏳ 未完了"}
      </p>

      <Link
        to="/todoList"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        ← 戻る
      </Link>
    </div>
  );
}

export default TodoDetail;
