import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  yourName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  zipCode: { type: String, required: true },
  preferredStates: { type: String },
  additionalInfo: { type: String },
  consent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Contact", contactSchema);
