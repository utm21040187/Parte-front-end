import { Schema, model} from "mongoose";

const UserSchema = new Schema([
    {
        name: {
            type: String, 
            required: true
        }
    },
    {
        password: {
            type: String,   
            required: true
        }
    },
    {
        email: {
            type: String,
            required: true
        }
    },
    {
        CURP: {
            type:String,
            required: true
        }
    },
    {
        rol:{
            type: String,
            enum:["administrator","participant","judge"],
            lowercase: true,
            required: true
        }
    }
])

export const UsersModel = model("users", UserSchema);