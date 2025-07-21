// // import { useState } from "react";
// // import { registerUser, loginUser } from "../api";
// // import { toast } from "react-toastify";

// // export default function AuthForm({ setIsLoggedIn }) {
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       if (isLogin) {
// //         const res = await loginUser(username, password);
// //         localStorage.setItem("token", res.token);
// //         localStorage.setItem("username", res.username);
// //         toast.success(`✅ Welcome back, ${res.username}`);
// //         setIsLoggedIn(true);
// //       } else {
// //         await registerUser(username, password);
// //         toast.success("✅ Account created! Please log in now.");
// //         setIsLogin(true);
// //       }
// //     } catch (err) {
// //       toast.error(err.response?.data?.msg || "❌ Auth error");
// //     }
// //   };

// //   return (
// //     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
// //       <div className="card p-4 shadow" style={{ width: "350px" }}>
// //         <h3 className="text-center">{isLogin ? "🔑 Login" : "📝 Sign Up"}</h3>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-3">
// //             <label className="form-label">Username</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label">Password</label>
// //             <input
// //               type="password"
// //               className="form-control"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <button type="submit" className="btn btn-primary w-100">
// //             {isLogin ? "Login" : "Sign Up"}
// //           </button>
// //         </form>
// //         <p className="text-center mt-3">
// //           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
// //           <button className="btn btn-link p-0" onClick={() => setIsLogin(!isLogin)}>
// //             {isLogin ? "Sign Up" : "Login"}
// //           </button>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import { registerUser, loginUser } from "../api";
// import { toast } from "react-toastify";

// export default function AuthForm({ setIsLoggedIn }) {
//   const [isLogin, setIsLogin] = useState(true);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (isLogin) {
//         const res = await loginUser(username, password);
//         localStorage.setItem("token", res.token);
//         localStorage.setItem("username", res.username);
//         toast.success(`✅ Welcome back, ${res.username}`);
//         setIsLoggedIn(true);
//       } else {
//         await registerUser(username, password);
//         toast.success("✅ Account created! Please log in now.");
//         setIsLogin(true);
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.msg || "❌ Authentication error");
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-card">
//         {/* ✅ Neon Title */}
//         <h2 className="auth-title">
//           {isLogin ? "🔑 Welcome Back" : "📝 Join Pollify"}
//         </h2>
//         <p className="auth-subtitle">
//           {isLogin
//             ? "Login to create & vote in polls"
//             : "Sign up to start creating polls!"}
//         </p>

//         {/* ✅ Auth Form */}
//         <form onSubmit={handleSubmit}>
//           {/* Username */}
//           <div className="mb-3">
//             <label className="form-label text-light">Username</label>
//             <input
//               type="text"
//               className="form-control neon-input"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3">
//             <label className="form-label text-light">Password</label>
//             <input
//               type="password"
//               className="form-control neon-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="btn neon-submit-btn w-100">
//             {isLogin ? "✅ Login" : "🚀 Sign Up"}
//           </button>
//         </form>

//         {/* ✅ Toggle between login/signup */}
//         <p className="auth-toggle mt-3">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button
//             className="btn btn-link neon-toggle-link"
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>

//       {/* ✅ Styles for Neon Glass Effect */}
//       <style>{`
//         .auth-wrapper {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-height: 100vh;
//           background: radial-gradient(circle at center, #050505, #0d0d0d);
//         }

//         .auth-card {
//           width: 100%;
//           max-width: 400px;
//           padding: 35px;
//           border-radius: 15px;
//           background: rgba(20, 20, 35, 0.55);
//           backdrop-filter: blur(12px);
//           border: 1px solid rgba(0, 255, 255, 0.25);
//           box-shadow: 0 0 15px rgba(0, 255, 255, 0.05),
//                       0 0 30px rgba(0, 200, 255, 0.05);
//           animation: fadeInAuth 0.6s ease-in-out;
//           text-align: center;
//         }

//         @keyframes fadeInAuth {
//           0% {
//             opacity: 0;
//             transform: translateY(15px) scale(0.97);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .auth-title {
//           color: #00fff5;
//           font-weight: 700;
//           text-shadow: 0 0 10px #00fff5;
//         }

//         .auth-subtitle {
//           color: #ccc;
//           font-size: 0.95rem;
//           margin-bottom: 20px;
//         }

//         .neon-input {
//           background: rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(0, 255, 255, 0.25);
//           color: #f1f1f1;
//           transition: all 0.3s ease;
//         }
//         .neon-input:focus {
//           outline: none;
//           box-shadow: 0 0 10px #00fff5;
//           border-color: #00fff5;
//         }

//         .neon-submit-btn {
//           background: linear-gradient(90deg, #00ff87, #00fff5);
//           border: none;
//           font-weight: 600;
//           color: #000;
//           padding: 10px;
//           transition: all 0.3s ease;
//         }
//         .neon-submit-btn:hover {
//           box-shadow: 0 0 20px #00ff87, 0 0 30px #00fff5;
//           transform: scale(1.03);
//         }

//         .auth-toggle {
//           color: #aaa;
//           font-size: 0.9rem;
//         }

//         .neon-toggle-link {
//           color: #00fff5 !important;
//           text-decoration: none;
//           text-shadow: 0 0 6px #00fff5;
//           transition: all 0.3s ease;
//         }
//         .neon-toggle-link:hover {
//           color: #00ff87 !important;
//           text-shadow: 0 0 12px #00ff87;
//         }
//       `}</style>
//     </div>
//   );
// }
import { useState } from "react";
import { registerUser, loginUser } from "../api";
import { toast } from "react-toastify";
// import { loginUser, registerUser } from "../api";


export default function AuthForm({ setIsLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ New state

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await loginUser(username, password);
        localStorage.setItem("token", res.token);
        localStorage.setItem("username", res.username);
        toast.success(`✅ Welcome back, ${res.username}`);
        setIsLoggedIn(true);
      } else {
        await registerUser(username, password);
        toast.success("✅ Account created! Please log in now.");
        setIsLogin(true);
      }
    } catch (err) {
      toast.error(err.response?.data?.msg || "❌ Authentication error");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="bg-particles"></div>

      <div className="auth-card">
        <h2 className="auth-title">
          {isLogin ? "🔑 Welcome Back" : "📝 Join Pollify"}
        </h2>
        <p className="auth-subtitle">
          {isLogin
            ? "Login to create & vote in polls"
            : "Sign up to start creating polls!"}
        </p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label text-light">Username</label>
            <input
              type="text"
              className="form-control neon-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password with Show/Hide */}
          <div className="mb-3 position-relative">
            <label className="form-label text-light">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control neon-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Eye Icon Toggle */}
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide Password" : "Show Password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Submit */}
          <button type="submit" className="btn neon-submit-btn w-100">
            {isLogin ? "✅ Login" : "🚀 Sign Up"}
          </button>
        </form>

        {/* Toggle Login / Signup */}
        <p className="auth-toggle mt-3">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="btn btn-link neon-toggle-link"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>

      {/* ✅ Styles */}
      <style>{`
        .auth-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: radial-gradient(circle at center, #050505, #0d0d0d);
          overflow: hidden;
        }

        .bg-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(0,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: moveDots 20s linear infinite;
          z-index: 0;
        }

        .auth-card {
          position: relative;
          width: 100%;
          max-width: 400px;
          padding: 35px;
          border-radius: 15px;
          background: rgba(20, 20, 35, 0.55);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 255, 255, 0.25);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
          text-align: center;
          z-index: 1;
          animation: fadeInAuth 0.6s ease-in-out;
        }

        @keyframes fadeInAuth {
          0% {
            opacity: 0;
            transform: translateY(15px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .auth-title {
          color: #00fff5;
          font-weight: 700;
          text-shadow: 0 0 10px #00fff5;
        }
        .auth-subtitle {
          color: #ccc;
          font-size: 0.95rem;
          margin-bottom: 20px;
        }

        .neon-input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 255, 0.25);
          color: #f1f1f1;
          transition: all 0.3s ease;
        }
        .neon-input:focus {
          outline: none;
          box-shadow: 0 0 10px #00fff5;
          border-color: #00fff5;
        }

        /* ✅ Password toggle eye */
        .toggle-password {
          position: absolute;
          right: 12px;
          top: 38px;
          cursor: pointer;
          font-size: 1.3rem;
          color: #00fff5;
          transition: 0.3s ease;
        }
        .toggle-password:hover {
          text-shadow: 0 0 8px #00fff5;
        }

        .neon-submit-btn {
          background: linear-gradient(90deg, #00ff87, #00fff5);
          border: none;
          font-weight: 600;
          color: #000;
          padding: 10px;
          transition: all 0.3s ease;
        }
        .neon-submit-btn:hover {
          box-shadow: 0 0 20px #00ff87, 0 0 30px #00fff5;
          transform: scale(1.03);
        }

        .auth-toggle {
          color: #aaa;
          font-size: 0.9rem;
        }

        .neon-toggle-link {
          color: #00fff5 !important;
          text-decoration: none;
          text-shadow: 0 0 6px #00fff5;
          transition: all 0.3s ease;
        }
        .neon-toggle-link:hover {
          color: #00ff87 !important;
          text-shadow: 0 0 12px #00ff87;
        }
      `}</style>
    </div>
  );
}
