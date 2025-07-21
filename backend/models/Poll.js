// // import mongoose from "mongoose";

// // const optionSchema = new mongoose.Schema({
// //   text: String,
// //   votes: { type: Number, default: 0 }
// // });

// // const pollSchema = new mongoose.Schema(
// //   {
// //     question: { type: String, required: true },
// //     options: [optionSchema],
// //     votedUsers: { type: [String], default: [] } // ✅ stores usernames who already voted
// //   },
// //   { timestamps: true }
// // );

// // export default mongoose.model("Poll", pollSchema);
// import mongoose from "mongoose";

// const optionSchema = new mongoose.Schema({
//   text: String,
//   votes: { type: Number, default: 0 },
// });

// const pollSchema = new mongoose.Schema({
//   question: String,
//   options: [optionSchema],
//   votedUsers: [
//     {
//       userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//       selectedIndex: Number,
//     },
//   ],
// });

// export default mongoose.model("Poll", pollSchema);
import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  text: String,
  votes: { type: Number, default: 0 },
});

const pollSchema = new mongoose.Schema({
  question: String,
  options: [optionSchema],
  votedUsers: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      selectedIndex: Number,
    },
  ],
});

export default mongoose.model("Poll", pollSchema);
