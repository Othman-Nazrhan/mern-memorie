import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
title :{ type: String  , required: true },
message : { type: String , required: true },
creator: { type: String , required: true },
tags : [String],
selectedFiles:{ type: String , required: true},
likeCount: {
    type: Number,
    default:0
},
createdAt:{
    type: Date,
    default:new Date()
},
});

var Posts = mongoose.model('Posts',postSchema)

export default Posts ;