import { Link } from "react-router-dom";

function TodoItem({ index, item, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between border-b py-2">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={item.done}
          onChange={onToggle}
          className="w-4 h-4"
        />
      </label>

      <span
        className={item.done ? "line-through text-gray-400" : "text-gray-800"}
      >
        <Link to={`/todoDetail/${index}`}>{item.text}</Link>
      </span>

      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 text-sm"
      >
        del
      </button>
    </li>
  );
}

export default TodoItem;
