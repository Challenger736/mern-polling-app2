// // import express from "express";
// // import Poll from "../models/Poll.js";

// // const router = express.Router();

// // // ✅ Create a new poll
// // router.post("/", async (req, res) => {
// //   try {
// //     const { question, options } = req.body;

// //     if (!question || !options || options.length < 2) {
// //       return res.status(400).json({ message: "Need question + at least 2 options" });
// //     }

// //     const newPoll = new Poll({
// //       question,
// //       options: options.map((text) => ({ text, votes: 0 })),
// //     });

// //     await newPoll.save();
// //     res.status(201).json(newPoll);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: "Error creating poll" });
// //   }
// // });

// // // ✅ Get all polls
// // router.get("/", async (req, res) => {
// //   try {
// //     const polls = await Poll.find();
// //     res.json(polls);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: "Error fetching polls" });
// //   }
// // });

// // // ✅ Vote on a poll
// // router.post("/:id/vote", async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const { newIndex, previousIndex } = req.body;

// //     const poll = await Poll.findById(id);
// //     if (!poll) return res.status(404).json({ message: "Poll not found" });

// //     // Update votes
// //     if (typeof previousIndex === "number") {
// //       poll.options[previousIndex].votes -= 1;
// //     }
// //     poll.options[newIndex].votes += 1;

// //     await poll.save();
// //     res.json(poll);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: "Error voting on poll" });
// //   }
// // });

// // export default router;
// import express from "express";
// import Poll from "../models/Poll.js";
// import authMiddleware from "../middleware/authMiddleware.js"; // Make sure this exists

// const router = express.Router();

// // ✅ User votes on a poll
// router.post("/:id/vote", authMiddleware, async (req, res) => {
//   try {
//     const poll = await Poll.findById(req.params.id);
//     if (!poll) return res.status(404).json({ message: "Poll not found" });

//     const userId = req.user.id;
//     const { newIndex } = req.body;

//     // Check if user already voted
//     const alreadyVoted = poll.votedUsers.find((vote) => vote.userId.toString() === userId);
//     if (alreadyVoted) {
//       return res.status(400).json({ message: "User has already voted on this poll" });
//     }

//     poll.options[newIndex].votes += 1;
//     poll.votedUsers.push({ userId, selectedIndex: newIndex });

//     await poll.save();
//     res.json(poll);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error voting on poll" });
//   }
// });
// export default router;
// import express from "express";
// import Poll from "../models/Poll.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// // ✅ Create a new poll (auth required)
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const { question, options } = req.body;

//     if (!question || !options || options.length < 2) {
//       return res.status(400).json({ message: "Need question + at least 2 options" });
//     }

//     const newPoll = new Poll({
//       question,
//       options: options.map((text) => ({ text, votes: 0 })),
//     });

//     await newPoll.save();
//     res.status(201).json(newPoll);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating poll" });
//   }
// });

// // ✅ Get all polls
// router.get("/", async (req, res) => {
//   try {
//     const polls = await Poll.find();
//     res.json(polls);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching polls" });
//   }
// });

// // ✅ Vote on a poll (only once per user)
// router.post("/:id/vote", authMiddleware, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { newIndex } = req.body;
//     const userId = req.user.id;

//     const poll = await Poll.findById(id);
//     if (!poll) return res.status(404).json({ message: "Poll not found" });

//     const alreadyVoted = poll.votedUsers.find(v => v.userId.toString() === userId);
//     if (alreadyVoted) return res.status(400).json({ message: "User already voted" });

//     poll.options[newIndex].votes += 1;
//     poll.votedUsers.push({ userId, selectedIndex: newIndex });

//     await poll.save();
//     res.json(poll);
//   } catch (err) {
//     res.status(500).json({ message: "Error voting on poll" });
//   }
// });

// export default router;
import express from "express";
import Poll from "../models/Poll.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Create a new poll (auth required)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { question, options } = req.body;

    if (!question || !options || options.length < 2) {
      return res.status(400).json({ message: "Need question + at least 2 options" });
    }

    const newPoll = new Poll({
      question,
      options: options.map((text) => ({ text, votes: 0 })),
    });

    await newPoll.save();
    res.status(201).json(newPoll);
  } catch (error) {
    res.status(500).json({ message: "Error creating poll" });
  }
});

// ✅ Get all polls
router.get("/", async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json(polls);
  } catch (error) {
    res.status(500).json({ message: "Error fetching polls" });
  }
});

// ✅ Vote on a poll (update vote if already voted)
router.post("/:id/vote", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { newIndex } = req.body;
    const userId = req.user.id;

    const poll = await Poll.findById(id);
    if (!poll) return res.status(404).json({ message: "Poll not found" });

    const existingVote = poll.votedUsers.find(v => v.userId.toString() === userId);

    if (existingVote) {
      // 🔁 User already voted — switch vote
      poll.options[existingVote.selectedIndex].votes -= 1; // Undo old vote
      poll.options[newIndex].votes += 1; // Add new vote
      existingVote.selectedIndex = newIndex; // Update user's choice
    } else {
      // 🆕 First-time voter
      poll.options[newIndex].votes += 1;
      poll.votedUsers.push({ userId, selectedIndex: newIndex });
    }

    await poll.save();
    res.json(poll);
  } catch (err) {
    res.status(500).json({ message: "Error voting on poll" });
  }
});

export default router;
