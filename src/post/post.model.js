import {Schema, model} from "mongoose";

const postSchema = new Schema({
    tittle:{
        type: String,
        requiered: true,
        trim: true
    },
    content:{
        type: String,
        requiered: true,
        trim: true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        requiered: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        
    }]
    
},{
    timestamps: true,
    versionKey: false
})

export default model('Post', postSchema)