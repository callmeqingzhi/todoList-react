import { useState, useEffect, useRef } from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "./TodoContext";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const { todoList, setTodoList } = useTodo();

  const handleAdd = () => {
    if (task.trim() === "") {
      return;
    }
    setTodoList([...todoList, { id: uuidv4(), text: task, done: false }]);
    setTask("");
  };

  const handleDel = (delIndex) => {
    const newList = todoList.filter((_, index) => index != delIndex);
    setTodoList(newList);
  };

  const handleToggle = (index) => {
    const newList = [...todoList];
    newList[index].done = !newList[index].done;
    setTodoList(newList);
  };
  const enter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };
  const filteredList = todoList.filter((item) => {
    if (filter === "all") return true;
    if (filter === "done") return item.done;
    if (filter === "undone") return !item.done;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Todo List
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="やることを入力"
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            追加
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          {["all", "undone", "done"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 rounded border text-sm transition font-medium ${
                filter === type
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {type === "all"
                ? "📋 全部"
                : type === "undone"
                ? "⏳ 未完成"
                : "✅ 完了"}
            </button>
          ))}
        </div>

        <ul className="divide-y">
          {filteredList.length > 0 ? (
            filteredList.map((item) => (
              <TodoItem
                key={item.id}
                index={item.id}
                item={item}
                onToggle={() => handleToggle(item.id)}
                onDelete={() => handleDel(item.id)}
              />
            ))
          ) : (
            <p className="text-center text-gray-400 py-4">
              まだタスクがありません
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
