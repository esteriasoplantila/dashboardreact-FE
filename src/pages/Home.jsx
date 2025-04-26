import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Dashboard from "./Dashboard";
import UserCreate from "./user/Create";
import UserUpdate from "./user/Update";
import UserDelete from "./user/Delete";
import UserView from "./user/View";
import TransactionCreate from "./transaction/Create";
import TransactionView from "./transaction/View";

const Home = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      <aside
        className={`${
          isCollapsed ? "w-20" : "w-64"
        } bg-gray-800 text-white flex flex-col transition-all duration-300`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-600">
          {!isCollapsed && <span className="text-2xl font-bold">Menu</span>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="bg-gray-700 p-1 rounded hover:bg-gray-600"
          >
            {isCollapsed ? "➡️" : "⬅️"}
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <Link className="block py-2 hover:bg-gray-700 rounded" to="/">
            Dashboard
          </Link>
          <div className="mt-4">
            <p className="text-gray-400">{!isCollapsed && "User"}</p>
            <Link
              className="block py-1 hover:bg-gray-700 rounded"
              to="/user/create"
            >
              Create
            </Link>
            <Link
              className="block py-1 hover:bg-gray-700 rounded"
              to="/user/update"
            >
              Update
            </Link>
            <Link
              className="block py-1 hover:bg-gray-700 rounded"
              to="/user/delete"
            >
              Delete
            </Link>
            <Link
              className="block py-1 hover:bg-gray-700 rounded"
              to="/user/view"
            >
              View
            </Link>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">{!isCollapsed && "Transaction"}</p>
            <Link
              className="block py-1 hover:bg-gray-700 rounded"
              to="/transaction/create"
            >
              Create
            </Link>
            <Link
              className="block py-1 hover:bg-gray-700 rounded"
              to="/transaction/view"
            >
              View
            </Link>
          </div>
        </nav>
        <button
          onClick={handleLogout}
          className="m-4 p-2 bg-red-500 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/create" element={<UserCreate />} />
          <Route path="/user/update" element={<UserUpdate />} />
          <Route path="/user/delete" element={<UserDelete />} />
          <Route path="/user/view" element={<UserView />} />
          <Route path="/transaction/create" element={<TransactionCreate />} />
          <Route path="/transaction/view" element={<TransactionView />} />
        </Routes>
      </main>
    </div>
  );
};

export default Home;
