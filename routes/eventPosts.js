import express from "express";
import { getEventPosts, createEventPost } from "../controllers/eventPosts.js";

const router = express.Router();

router.get("/", getEventPosts);
router.post("/", createEventPost);

export default router;
