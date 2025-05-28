import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import TodoList from "./TodoList";
import NotFound from "./NotFound";
import TodoDetail from "./TodoDetail";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <Router>
          <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <nav className="flex gap-4 mb-4">
              <Link to="/" className="text-blue-600 hover:underline">
                Home
              </Link>
              <Link to="/about" className="text-blue-600 hover:underline">
                About
              </Link>
              <Link to="/todoList" className="text-blue-600 hover:underline">
                Todo
              </Link>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/todoList" element={<TodoList />} />
              <Route path="/todoDetail/:id" element={<TodoDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </TodoProvider>
    </>
  );
}

export default App;
