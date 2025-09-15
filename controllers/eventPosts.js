import EventPost from "../models/eventPost.js";

export const getEventPosts = async (req, res) => {
    try {
        const eventPosts = await EventPost.find();

        res.status(200).json(eventPosts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createEventPost = async (req, res) => {
    const eventpost = req.body;
    const newEventPost = new EventPost(eventpost);

    try {
        await newEventPost.save();
        res.status(201).json(newEventPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
