const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 MongoDB connect
mongoose.connect("mongodb+srv://ssumitrawat1107_db_user:Rawat@123@cluster0.lohpjwf.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// 📦 Schema
const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Booking = mongoose.model("Booking", BookingSchema);

// 📩 POST API
app.post("/book", async (req, res) => {
  const newBooking = new Booking(req.body);
  await newBooking.save();

  res.json({ message: "Booking saved in DB!" });
});

// 📥 GET API
app.get("/bookings", async (req, res) => {
  const data = await Booking.find();
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
