const { ObjectID } = require('mongodb')
const mongoose = require('mongoose')
const validator = require('validator')


const reviewSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }, 
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'User'
    }
},
{
    timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review