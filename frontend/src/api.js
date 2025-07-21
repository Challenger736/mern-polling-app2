// // // const API_URL = "http://localhost:5000/api/polls";

// // // // ✅ Get all polls
// // // export async function getPolls() {
// // //   const res = await fetch(API_URL);
// // //   return res.json();
// // // }

// // // // ✅ Create a poll
// // // export async function createPoll(question, options) {
// // //   const res = await fetch(API_URL, {
// // //     method: "POST",
// // //     headers: { "Content-Type": "application/json" },
// // //     body: JSON.stringify({ question, options }),
// // //   });
// // //   return res.json();
// // // }

// // // // ✅ Vote
// // // export async function votePoll(pollId, newIndex, previousIndex) {
// // //   const res = await fetch(`${API_URL}/${pollId}/vote`, {
// // //     method: "POST",
// // //     headers: { "Content-Type": "application/json" },
// // //     body: JSON.stringify({ newIndex, previousIndex }),
// // //   });
// // //   return res.json();
// // // }
// // import axios from "axios";

// // const API_URL = "http://localhost:5000/api"; // ✅ Backend URL

// // // ✅ Fetch all polls
// // export const getPolls = async () => {
// //   const res = await axios.get(`${API_URL}/polls`);
// //   return res.data;
// // };

// // // ✅ Create new poll
// // export const createPoll = async (question, options) => {
// //   const res = await axios.post(`${API_URL}/polls`, { question, options });
// //   return res.data;
// // };

// // // ✅ Vote on poll (requires token)
// // export const votePoll = async (pollId, newIndex, previousIndex) => {
// //   const token = localStorage.getItem("token");
// //   const res = await axios.post(
// //     `${API_URL}/polls/${pollId}/vote`,
// //     { newIndex, previousIndex },
// //     { headers: { Authorization: `Bearer ${token}` } }
// //   );
// //   return res.data;
// // };

// // // ✅ Register new user
// // export const registerUser = async (username, password) => {
// //   const res = await axios.post(`${API_URL}/auth/register`, { username, password });
// //   return res.data;
// // };

// // // ✅ Login user
// // export const loginUser = async (username, password) => {
// //   const res = await axios.post(`${API_URL}/auth/login`, { username, password });
// //   return res.data; // returns { token, username }
// // };
// import axios from "axios";

// const API_URL = "http://localhost:5000/api";

// // ✅ Get token from localStorage
// const getAuthHeader = () => {
//   const token = localStorage.getItem("token");
//   return token ? { Authorization: `Bearer ${token}` } : {};
// };

// // ✅ Fetch all polls
// export const getPolls = async () => {
//   const res = await axios.get(`${API_URL}/polls`);
//   return res.data;
// };

// // ✅ Create a poll (needs auth)
// export const createPoll = async (question, options) => {
//   const res = await axios.post(
//     `${API_URL}/polls`,
//     { question, options },
//     { headers: getAuthHeader() }
//   );
//   return res.data;
// };

// // ✅ Vote on a poll (needs auth)
// export const votePoll = async (pollId, newIndex) => {
//   const res = await axios.post(
//     `${API_URL}/polls/${pollId}/vote`,
//     { newIndex },
//     { headers: getAuthHeader() }
//   );
//   return res.data;
// };
// // ✅ User login
// export const loginUser = async (username, password) => {
//   const res = await axios.post(`${API_URL}/auth/login`, { username, password });
//   return res.data; // Should return { token }
// };

// // ✅ User registration
// export const registerUser = async (username, password) => {
//   const res = await axios.post(`${API_URL}/auth/register`, { username, password });
//   return res.data; // Should return success message
// };

import axios from "axios";

const API_URL = "http://localhost:5000/api";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getPolls = async () => {
  const res = await axios.get(`${API_URL}/polls`);
  return res.data;
};

export const createPoll = async (question, options) => {
  const res = await axios.post(`${API_URL}/polls`, { question, options }, {
    headers: getAuthHeader()
  });
  return res.data;
};

export const votePoll = async (pollId, newIndex) => {
  const res = await axios.post(`${API_URL}/polls/${pollId}/vote`, { newIndex }, {
    headers: getAuthHeader()
  });
  return res.data;
};

export const loginUser = async (username, password) => {
  const res = await axios.post(`${API_URL}/auth/login`, { username, password });
  return res.data;
};

export const registerUser = async (username, password) => {
  const res = await axios.post(`${API_URL}/auth/register`, { username, password });
  return res.data;
};
