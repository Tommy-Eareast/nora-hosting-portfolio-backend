import mongoose from "mongoose";

const eventPostSchema = mongoose.Schema({
    title: String,
    message: String,
    organiser: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    hostedOn: {
        type: Date,
        default: new Date(),
    },
});

const EventPostMessage = mongoose.model("EventPostMessage", eventPostSchema);

export default EventPostMessage;
