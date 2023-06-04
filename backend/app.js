require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./Routes/router");
const PORT = process.env.PORT || 8000


app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("./uploads"));
app.use("/files",express.static("./public/files"));

app.use(router);


app.get("/", (req, res) => {
	res.send("Welcome to new server ");
});



app.listen(PORT,()=>{
    console.log(`Server start at port no ${PORT}`)
    console.log(`listen at http://localhost:${PORT}`);
})