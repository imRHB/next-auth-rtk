import mongoose, { Schema } from "mongoose";
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
        role: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);

// export default User;
