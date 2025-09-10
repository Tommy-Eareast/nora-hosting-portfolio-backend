import mongoose from "mongoose";

const eventPostSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const EventPostMessage = mongoose.model("EventPostMessage", eventPostSchema);

export default EventPostMessage;
