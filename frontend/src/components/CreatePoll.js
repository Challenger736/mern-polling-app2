// // // import { useState } from "react";
// // // import { toast } from "react-toastify";

// // // export default function CreatePoll({ onCreate }) {
// // //   const [question, setQuestion] = useState("");
// // //   const [options, setOptions] = useState(["", ""]);

// // //   const handleAddOption = () => {
// // //     setOptions([...options, ""]);
// // //   };

// // //   const handleDeleteOption = (index) => {
// // //     if (options.length <= 2) {
// // //       toast.warning("⚠️ Poll must have at least 2 options!");
// // //       return;
// // //     }
// // //     const newOptions = options.filter((_, i) => i !== index);
// // //     setOptions(newOptions);
// // //     toast.info("❌ Option removed!");
// // //   };

// // //   const handleChangeOption = (index, value) => {
// // //     const newOptions = [...options];
// // //     newOptions[index] = value;
// // //     setOptions(newOptions);
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     const filteredOptions = options.filter((opt) => opt.trim() !== "");
// // //     if (!question.trim() || filteredOptions.length < 2) {
// // //       toast.warning("⚠️ Please enter a question and at least 2 valid options!");
// // //       return;
// // //     }
// // //     onCreate(question, filteredOptions);
// // //     setQuestion("");
// // //     setOptions(["", ""]);
// // //   };

// // //   return (
// // //     <form
// // //       onSubmit={handleSubmit}
// // //       style={{
// // //         marginBottom: "20px",
// // //         padding: "10px",
// // //         border: "1px solid #ddd",
// // //       }}
// // //     >
// // //       <h3>Create a New Poll</h3>

// // //       <input
// // //         type="text"
// // //         placeholder="Enter your question"
// // //         value={question}
// // //         onChange={(e) => setQuestion(e.target.value)}
// // //         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
// // //       />

// // //       {options.map((opt, index) => (
// // //         <div key={index} style={{ marginBottom: "5px" }}>
// // //           <input
// // //             type="text"
// // //             placeholder={`Option ${index + 1}`}
// // //             value={opt}
// // //             onChange={(e) => handleChangeOption(index, e.target.value)}
// // //             style={{ width: "80%", padding: "5px" }}
// // //           />
// // //           {options.length > 2 && (
// // //             <button
// // //               type="button"
// // //               onClick={() => handleDeleteOption(index)}
// // //               style={{
// // //                 marginLeft: "5px",
// // //                 background: "red",
// // //                 color: "white",
// // //                 border: "none",
// // //                 padding: "5px 8px",
// // //                 cursor: "pointer",
// // //               }}
// // //             >
// // //               ❌
// // //             </button>
// // //           )}
// // //         </div>
// // //       ))}

// // //       <button
// // //         type="button"
// // //         onClick={handleAddOption}
// // //         style={{
// // //           background: "#007bff",
// // //           color: "white",
// // //           border: "none",
// // //           padding: "5px 10px",
// // //           cursor: "pointer",
// // //           marginRight: "10px",
// // //         }}
// // //       >
// // //         ➕ Add Option
// // //       </button>

// // //       <button
// // //         type="submit"
// // //         style={{
// // //           background: "green",
// // //           color: "white",
// // //           border: "none",
// // //           padding: "5px 10px",
// // //           cursor: "pointer",
// // //         }}
// // //       >
// // //         ✅ Create Poll
// // //       </button>
// // //     </form>
// // //   );
// // // }
// // import React, { useState } from "react";

// // export default function CreatePoll({ onCreate }) {
// //   const [question, setQuestion] = useState("");
// //   const [options, setOptions] = useState(["", ""]);

// //   const handleAddOption = () => setOptions([...options, ""]);
// //   const handleChangeOption = (i, val) => {
// //     const newOptions = [...options];
// //     newOptions[i] = val;
// //     setOptions(newOptions);
// //   };
// //   const handleDeleteOption = (i) => {
// //     if (options.length > 2) setOptions(options.filter((_, idx) => idx !== i));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!question.trim() || options.filter((o) => o.trim()).length < 2) {
// //       alert("Please enter a question and at least two valid options.");
// //       return;
// //     }
// //     onCreate(question, options);
// //     setQuestion("");
// //     setOptions(["", ""]);
// //   };

// //   return (
// //     <div className="container mt-4">
// //       <div className="card shadow-sm">
// //         <div className="card-body">
// //           <h4 className="card-title mb-3">📝 Create a New Poll</h4>

// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-3">
// //               <label className="form-label">Poll Question</label>
// //               <input
// //                 type="text"
// //                 className="form-control"
// //                 placeholder="Enter your question"
// //                 value={question}
// //                 onChange={(e) => setQuestion(e.target.value)}
// //               />
// //             </div>

// //             <label className="form-label">Options</label>
// //             {options.map((opt, index) => (
// //               <div className="input-group mb-2" key={index}>
// //                 <input
// //                   type="text"
// //                   className="form-control"
// //                   placeholder={`Option ${index + 1}`}
// //                   value={opt}
// //                   onChange={(e) => handleChangeOption(index, e.target.value)}
// //                 />
// //                 {options.length > 2 && (
// //                   <button
// //                     type="button"
// //                     className="btn btn-outline-danger"
// //                     onClick={() => handleDeleteOption(index)}
// //                   >
// //                     ❌
// //                   </button>
// //                 )}
// //               </div>
// //             ))}

// //             <div className="d-flex justify-content-between">
// //               <button
// //                 type="button"
// //                 className="btn btn-outline-primary"
// //                 onClick={handleAddOption}
// //               >
// //                 ➕ Add Option
// //               </button>
// //               <button type="submit" className="btn btn-success">
// //                 ✅ Create Poll
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";

// export default function CreatePoll({ onCreate }) {
//   const [question, setQuestion] = useState("");
//   const [options, setOptions] = useState(["", ""]);

//   const handleAddOption = () => setOptions([...options, ""]);
//   const handleChangeOption = (i, val) => {
//     const newOptions = [...options];
//     newOptions[i] = val;
//     setOptions(newOptions);
//   };
//   const handleDeleteOption = (i) => {
//     if (options.length > 2) setOptions(options.filter((_, idx) => idx !== i));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!question.trim() || options.filter((o) => o.trim()).length < 2) {
//       alert("⚠️ Please enter a question and at least two valid options.");
//       return;
//     }
//     onCreate(question, options);
//     setQuestion("");
//     setOptions(["", ""]);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label className="form-label">Poll Question</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter your question"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//       </div>

//       <label className="form-label">Options</label>
//       {options.map((opt, index) => (
//         <div className="input-group mb-2" key={index}>
//           <input
//             type="text"
//             className="form-control"
//             placeholder={`Option ${index + 1}`}
//             value={opt}
//             onChange={(e) => handleChangeOption(index, e.target.value)}
//           />
//           {options.length > 2 && (
//             <button
//               type="button"
//               className="btn btn-outline-danger"
//               onClick={() => handleDeleteOption(index)}
//             >
//               ❌
//             </button>
//           )}
//         </div>
//       ))}

//       <div className="d-flex justify-content-between">
//         <button
//           type="button"
//           className="btn btn-outline-primary"
//           onClick={handleAddOption}
//         >
//           ➕ Add Option
//         </button>
//         <button type="submit" className="btn btn-success">
//           ✅ Create Poll
//         </button>
//       </div>
//     </form>
//   );
// }
import React, { useState } from "react";

export default function CreatePoll({ onCreate }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const handleAddOption = () => setOptions([...options, ""]);
  const handleChangeOption = (i, val) => {
    const newOptions = [...options];
    newOptions[i] = val;
    setOptions(newOptions);
  };
  const handleDeleteOption = (i) => {
    if (options.length > 2) setOptions(options.filter((_, idx) => idx !== i));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || options.filter((o) => o.trim()).length < 2) {
      alert("⚠️ Please enter a question and at least two valid options.");
      return;
    }
    onCreate(question, options);
    setQuestion("");
    setOptions(["", ""]);
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="neon-glass-card p-4">
        <h3 className="text-center mb-4 neon-title">✨ Create a New Poll</h3>

        <form onSubmit={handleSubmit}>
          {/* ✅ Poll Question */}
          <div className="mb-3">
            <label className="form-label text-light fw-semibold">Poll Question</label>
            <input
              type="text"
              className="form-control neon-input"
              placeholder="What's your question?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          {/* ✅ Poll Options */}
          <label className="form-label text-light fw-semibold">Options</label>
          {options.map((opt, index) => (
            <div className="input-group mb-2" key={index}>
              <input
                type="text"
                className="form-control neon-input"
                placeholder={`Option ${index + 1}`}
                value={opt}
                onChange={(e) => handleChangeOption(index, e.target.value)}
              />
              {options.length > 2 && (
                <button
                  type="button"
                  className="btn btn-outline-danger neon-delete"
                  onClick={() => handleDeleteOption(index)}
                >
                  ❌
                </button>
              )}
            </div>
          ))}

          {/* ✅ Action Buttons */}
          <div className="d-flex justify-content-between mt-3">
            <button
              type="button"
              className="btn neon-btn"
              onClick={handleAddOption}
            >
              ➕ Add Option
            </button>

            <button type="submit" className="btn neon-submit-btn">
              ✅ Create Poll
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Neon Glass Styles */}
      <style>{`
        .neon-glass-card {
          width: 100%;
          max-width: 550px;
          border-radius: 15px;
          background: rgba(25, 25, 35, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 255, 255, 0.3);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.1),
                      0 0 30px rgba(0, 200, 255, 0.05);
          animation: floatIn 0.6s ease-in-out;
        }

        @keyframes floatIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .neon-title {
          color: #00fff5;
          text-shadow: 0 0 8px #00fff5;
        }

        .neon-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 255, 0.2);
          color: #f1f1f1;
          transition: all 0.3s ease;
        }
        .neon-input:focus {
          outline: none;
          box-shadow: 0 0 10px #00fff5;
          border-color: #00fff5;
        }

        .neon-btn {
          background: transparent;
          border: 1px solid #00fff5;
          color: #00fff5;
          transition: all 0.3s ease;
        }
        .neon-btn:hover {
          background: #00fff5;
          color: #000;
          box-shadow: 0 0 12px #00fff5;
        }

        .neon-submit-btn {
          background: linear-gradient(90deg, #00ff87, #00fff5);
          border: none;
          font-weight: 600;
          color: #000;
          transition: all 0.3s ease;
        }
        .neon-submit-btn:hover {
          box-shadow: 0 0 20px #00ff87, 0 0 30px #00fff5;
          transform: scale(1.05);
        }

        .neon-delete {
          border: 1px solid rgba(255, 0, 100, 0.5);
          color: #ff4f7b;
        }
        .neon-delete:hover {
          background: rgba(255, 0, 100, 0.2);
          box-shadow: 0 0 8px #ff4f7b;
        }
      `}</style>
    </div>
  );
}
