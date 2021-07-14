import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    curriculum: {
        type: String,
        required: true
    },
}, {timestamps: true})

export const User = mongoose.model('User', userSchema)