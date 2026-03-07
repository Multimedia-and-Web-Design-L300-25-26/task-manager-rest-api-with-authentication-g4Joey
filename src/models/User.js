import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Create User schema
// Fields:
// - name (String, required)
// - email (String, required, unique)
// - password (String, required, minlength 6)
// - createdAt (default Date.now)



const userSchema = new mongoose.Schema({
  name: {type: String, required: true },
  email:{type: String, required: true, unique:true},
  password:{type: String, required: true, minlength:6 },
  createdAt:{type: Date, default: Date.now}
 

});


// This runs BEFORE every .save() call
userSchema.pre("save", async function () {
  // Only hash if the password field was changed (or is new)
  if (!this.isModified("password")) return;
  
  // Generate a salt (random data added to the hash for extra security)
  const salt = await bcrypt.genSalt(10);
  
  // Replace the plain password with the hashed version
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;