import mongoose from "mongoose";

const meetupSchema = new mongoose.Schema({
  title: String,
  price: String,
  imageUrl: String,
  description: String,
});

const MeetupData = mongoose.models.MeetupDetails || mongoose.model("MeetupDetails", meetupSchema);

export default MeetupData;
