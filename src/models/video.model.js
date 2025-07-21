const mongoose = require('mongoose');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2')

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String, // Cloudinary URL
        required: true,
    },
    thumbnail: {
        type: String, // Cloudinary URL
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    duration: {
        type: Number, // nikaly gy cloudinary duration
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }

}, { Timestamps: true });


videoSchema.plugin(mongooseAggregatePaginate);


const Video = mongoose.model('Video', videoSchema);