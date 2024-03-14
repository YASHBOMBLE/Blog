import {Schema, model} from "mongoose"

const blogSchema = new Schema({
 title : String,
 blog : String
}, { timestamps: true },{Location:true})

const Blogs = model("Blogs", blogSchema)

export default Blogs