app.post("/book", async (req, res) => {
  try {
    const newBooking = new Booking(req.body); // Booking model use karo
    await newBooking.save();
    res.json({ message: "Booking saved in DB!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save booking" });
  }
});
app.get("/bookings", async (req, res) => {
  try {
    const allBookings = await Booking.find();
    res.json(allBookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});
