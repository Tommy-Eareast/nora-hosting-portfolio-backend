import EventPostMessage from "../models/eventPostMessage.js";

export const getEventPosts = async (req, res) => {
    try {
        const eventPostMessages = await EventPostMessage.find();

        res.status(200).json(eventPostMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createEventPost = async (req, res) => {
    const eventpost = req.body;
    const newEventPost = new EventPostMessage(eventpost);

    try {
        await newEventPost.save();
        res.status(201).json(newEventPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
