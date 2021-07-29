const mongoose = require("mongoose");
                
const userSchema = mongoose.userSchema({
    name: {type: String , required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    id: {type: String}
})

export const User = mongoose.model("User", userSchema);
