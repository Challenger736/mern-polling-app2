
import { useState, useEffect } from "react";
import CreatePoll from "./components/CreatePoll";
import PollList from "./components/PollList";
import AuthForm from "./components/AuthForm";
import { getPolls, createPoll, votePoll } from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [polls, setPolls] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [showCreatePoll, setShowCreatePoll] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const fetchPolls = async () => {
    try {
      const data = await getPolls();
      setPolls(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch polls:", error);
      setPolls([]);
    }
  };

  useEffect(() => {
    if (isLoggedIn) fetchPolls();
  }, [isLoggedIn]);

  const handleCreate = async (question, options) => {
    await createPoll(question, options);
    toast.success("✅ Poll created successfully!");
    fetchPolls();
    setShowCreatePoll(false);
  };

  const handleVote = async (pollId, newIndex, previousIndex) => {
    await votePoll(pollId, newIndex, previousIndex);

    if (previousIndex !== null && previousIndex !== newIndex) {
      toast.info("🔄 You changed your vote!");
    } else if (previousIndex === null) {
      toast.success("✅ Vote recorded!");
    } else {
      toast.warning("⚠️ You already voted for this option!");
    }

    fetchPolls();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    toast.info("👋 Logged out successfully!");
  };

  const appStyle = {
    background: darkMode
      ? "linear-gradient(135deg, #0d0d0d, #1a1a2e, #0f2027)"
      : "linear-gradient(135deg, #f0f0f0, #dfe6e9, #ffffff)",
    color: darkMode ? "#f1f1f1" : "#1a1a1a",
    minHeight: "100vh",
    paddingBottom: "40px",
    transition: "background 0.6s ease, color 0.6s ease",
  };

  if (!isLoggedIn) {
    return (
      <div style={appStyle}>
        <AuthForm setIsLoggedIn={setIsLoggedIn} />
        <ToastContainer theme={darkMode ? "dark" : "light"} />
      </div>
    );
  }

  return (
    <div style={appStyle}>
      <nav
        className="navbar navbar-expand-lg shadow-lg"
        style={{
          background: darkMode
            ? "rgba(20, 20, 30, 0.6)"
            : "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(12px)",
          borderBottom: darkMode
            ? "1px solid rgba(0, 255, 200, 0.3)"
            : "1px solid rgba(0, 0, 0, 0.1)",
          transition: "all 0.6s ease",
        }}
      >
        <div className="container-fluid">
          <span
            className="navbar-brand fw-bold"
            style={{
              color: darkMode ? "#00fff5" : "#0077b6",
              textShadow: darkMode
                ? "0 0 8px #00fff5, 0 0 20px #00ccff"
                : "0 0 5px #0077b6",
              fontSize: "1.6rem",
              letterSpacing: "1px",
            }}
          >
            🗳️ Pollify
          </span>

          <div className="ms-auto d-flex align-items-center gap-3">
            <button
              className="btn neon-btn"
              onClick={() => setShowCreatePoll(!showCreatePoll)}
            >
              {showCreatePoll ? "❌ Close" : "➕ Create Poll"}
            </button>

            <span
              style={{
                color: darkMode ? "#ddd" : "#333",
                fontWeight: "500",
                textShadow: "0 0 5px rgba(0,0,0,0.1)",
              }}
            >
              👤 {localStorage.getItem("username")}
            </span>

            <button className="btn logout-btn" onClick={handleLogout}>
              🚪 Logout
            </button>

            <button
              className="btn btn-outline-light"
              style={{ borderColor: darkMode ? "#00f5d4" : "#333" }}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        {showCreatePoll && (
          <div className="mb-4 fade-in">
            <CreatePoll onCreate={handleCreate} />
          </div>
        )}
        <PollList polls={polls} onVote={handleVote} darkMode={darkMode} />
      </div>

      <ToastContainer position="top-right" autoClose={2500} theme={darkMode ? "dark" : "light"} />

      <style>{`
        .neon-btn {
          background: linear-gradient(90deg, #00f5d4, #00bbf9);
          color: #000;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 8px;
          box-shadow: 0 0 12px #00f5d4;
          transition: all 0.3s ease;
        }
        .neon-btn:hover {
          box-shadow: 0 0 20px #00bbf9, 0 0 30px #00f5d4;
          transform: scale(1.05);
        }

        .logout-btn {
          background: linear-gradient(90deg, #ff4d6d, #ff758f);
          color: #fff;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 8px;
          box-shadow: 0 0 12px #ff4d6d;
          transition: all 0.3s ease;
        }
        .logout-btn:hover {
          box-shadow: 0 0 20px #ff758f, 0 0 30px #ff4d6d;
          transform: scale(1.05);
        }

        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeSlideUp 0.4s ease-in-out;
        }

        body, .navbar, .container, .poll-card, .option-card, .btn {
          transition: background 0.6s ease, color 0.6s ease, box-shadow 0.4s ease;
        }
      `}</style>
    </div>
  );
}