import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { UserProvider, useUser } from "./context/UserContext";
import type { JSX } from "react";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { nickname } = useUser();
  return nickname ? children : <Navigate to="/" />;
}

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserProvider>
  );
}

export default App;
