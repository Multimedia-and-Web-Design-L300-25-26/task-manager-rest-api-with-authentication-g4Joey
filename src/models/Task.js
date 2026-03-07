import mongoose from "mongoose";

// Create Task schema
// Fields:
// - title (String, required)
// - description (String)
// - completed (Boolean, default false)
// - owner (ObjectId, ref "User", required)
// - createdAt (default Date.now)

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,   //New tasks start as incomplete
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,  //Reference to the User model(A special MongoDB ID type)
        ref: "User", //Links the task to the user model
        required: true, //Every task MUST belong to a user
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Task = mongoose.model("Task", taskSchema);

export default Task;