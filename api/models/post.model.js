import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        Category: {
            type: String,
            required: true,
        },
        regularPrice: {
            type: Number,
            required: true,
        },
        discountPrice: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        offer: {
            type: Boolean,
            required: true,
        },
        imageUrls: {
            type: Array,
            required: true,
        },
        userRef: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;