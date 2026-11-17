const express = require('express');
const cors = require('cors');
const multer = require('multer');
const uploadFile = require('../services/storage.service');
const postModel = require('../models/post.models');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173' }));

const upload = multer({ storage: multer.memoryStorage() });

app.post('/create-post', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Please attach an image using the 'image' form-data field." });
        }
        if (!req.body.caption?.trim()) {
            return res.status(400).json({ message: "A caption is required." });
        }

        const result = await uploadFile(req.file);
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption.trim(),
        });

        return res.status(201).json({
            message: "Post created successfully",
            post,
        });
    } catch (error) {
        console.error("Create post failed:", error.message);
        return res.status(500).json({ message: "Could not create post.", error: error.message });
    }
})

app.get('/posts', async (req, res) => {
    try {
        const posts = await postModel.find().sort({ _id: -1 });
        return res.status(200).json({
            message: "Posts fetched successfully",
            posts,
        });
    } catch (error) {
        return res.status(500).json({ message: "Could not fetch posts.", error: error.message });
    }
})

module.exports = app;
