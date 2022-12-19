import { model, Schema } from "mongoose";

let count = new Schema({
    img:{type:String, required:true},
},
    {
        timestamps:true
    }
);

export default model("count", count);