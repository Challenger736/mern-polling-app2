
import React, { useState, useEffect } from "react";
import { ProgressBar, Badge } from "react-bootstrap";

// ✅ Roman numeral helper
const toRoman = (num) => {
  const romanMap = [
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
    ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
    ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1],
  ];
  let result = "";
  for (const [roman, value] of romanMap) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }
  return result;
};

export default function PollList({ polls, onVote }) {
  const [animatedPolls, setAnimatedPolls] = useState([]);
  const [votedPollsInSession, setVotedPollsInSession] = useState({});

  useEffect(() => {
    const initial = polls.map((poll) => poll.options.map(() => 0));
    setAnimatedPolls(initial);

    const timer = setTimeout(() => {
      const final = polls.map((poll) =>
        poll.options.map((opt) => {
          const total = poll.options.reduce((sum, o) => sum + o.votes, 0);
          return total > 0 ? ((opt.votes / total) * 100).toFixed(1) : 0;
        })
      );
      setAnimatedPolls(final);
    }, 150);

    return () => clearTimeout(timer);
  }, [polls]);

  if (!polls || polls.length === 0) {
    return (
      <div className="text-center mt-5 text-light">
        <div style={{ fontSize: "4rem" }}>🌌</div>
        <h4 className="fw-bold mt-3 neon-text">No polls yet!</h4>
        <p className="text-muted">
          Click <span className="fw-semibold">“➕ Create Poll”</span> to add one!
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <h4 className="text-center mb-4 text-gradient fw-bold">
        🌈 Total Polls:{" "}
        <span className="badge neon-badge text-white px-3 py-2 rounded-pill">
          {polls.length}
        </span>
      </h4>

      {polls.map((poll, pollIndex) => {
        const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);
        const maxVotes = Math.max(...poll.options.map((opt) => opt.votes));
        const votedKey = `voted_${poll._id}`;
        const votedIndex = localStorage.getItem(votedKey)
          ? parseInt(localStorage.getItem(votedKey))
          : null;

        return (
          <div
            key={poll._id}
            className="poll-card mb-5 p-4 rounded-4 bg-dark text-light shadow-lg"
            style={{
              transition: "transform 0.3s",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
              border: "1px solid #333",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold text-glow">
                <Badge className="me-2 rounded-circle badge-glow px-3 py-2">
                  #{pollIndex + 1}
                </Badge>
                {poll.question}
              </h5>
              <Badge className="px-3 py-2 rounded-pill fw-semibold text-white bg-secondary">
                {totalVotes} votes
              </Badge>
            </div>

            {poll.options.map((opt, optIndex) => {
              const isVoted = votedIndex === optIndex;
              const isTop = opt.votes === maxVotes && totalVotes > 0;
              const isSessionVote = votedPollsInSession[poll._id];
              const percentage = animatedPolls[pollIndex]?.[optIndex] || 0;

              return (
                <div
                  key={optIndex}
                  className={`option-card p-3 rounded-3 mb-4 bg-gradient ${
                    isVoted && isSessionVote ? "bg-success bg-opacity-10" : "bg-dark"
                  } shadow-sm`}
                  style={{
                    transition: "box-shadow 0.3s ease",
                    border: "1px solid #444",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-light">
                      {toRoman(optIndex + 1)}. {opt.text}{" "}
                      {isVoted && isSessionVote && (
                        <span className="text-success fw-bold ms-2">✅ You Voted</span>
                      )}
                      {isTop && (
                        <Badge bg="warning" text="dark" className="ms-2 fw-bold">
                          🏆 Top
                        </Badge>
                      )}
                    </span>
                    <small className="fw-bold text-white">
                      {opt.votes} votes ({percentage}%)
                    </small>
                  </div>

                  <ProgressBar
                    now={percentage}
                    animated
                    variant={isTop ? "warning" : isVoted ? "success" : "info"}
                    className="progress-neon"
                    style={{
                      height: "10px",
                      borderRadius: "10px",
                      transition: "width 1s ease",
                    }}
                  />

                  <button
                    className={`vote-btn btn btn-sm mt-3 w-100 fw-semibold ${
                      isVoted && isSessionVote ? "btn-success" : "btn-outline-light"
                    }`}
                    onClick={(e) => {
                      const ripple = document.createElement("span");
                      ripple.classList.add("ripple");
                      e.target.appendChild(ripple);
                      setTimeout(() => ripple.remove(), 500);

                      const prevVote = votedIndex !== null ? votedIndex : null;

                      localStorage.setItem(votedKey, optIndex);
                      setVotedPollsInSession((prev) => ({
                        ...prev,
                        [poll._id]: true,
                      }));

                      onVote(poll._id, optIndex, prevVote);
                    }}
                  >
                    {isVoted && isSessionVote ? "✅ You Voted" : "💫 Vote this Option"}
                  </button>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
