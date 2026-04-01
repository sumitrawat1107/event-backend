const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();   // ✅ sabse pehle app define karo

app.use(cors());
app.use(express.json());

// ✅ MongoDB connect (simplified for latest driver)
mongoose.connect("mongodb+srv://ssumitrawat1107_db_user:Rawat@123@cluster0.lohpjwf.mongodb.net/sample_mflix?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));



// 📦 Schema
const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Booking = mongoose.model("Booking", BookingSchema);

// 📩 POST API
app.post("/book", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.json({ message: "Booking saved in DB!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save booking" });
  }
});

// 📥 GET API
app.get("/bookings", async (req, res) => {
  try {
    const data = await Booking.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// ✅ Port fix for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
