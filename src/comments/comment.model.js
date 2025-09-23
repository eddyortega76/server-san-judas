import { Schema,model } from 'mongoose';

const commentSchema = new Schema ({
    text: {
        type: String,
        requiered: true,
        rim: true
    },
    post: {
        ype: Schema.Types.ObjectId,
        ref: 'Post',
        requiered: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        requiered: true
    }
},{
    timestamps: true,
    versionKey: false
})

export default model ('Comment', commentSchema)
