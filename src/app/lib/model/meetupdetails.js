import mongoose from "mongoose";

const meetupSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  description: String,
});

const MeetupData = mongoose.models.meetupDetails || mongoose.model("meetupDetails", meetupSchema);

export default MeetupData;
