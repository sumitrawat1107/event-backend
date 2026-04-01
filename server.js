const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();   // <-- yeh line zaroori hai

app.use(cors());
app.use(express.json());
