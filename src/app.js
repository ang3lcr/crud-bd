const express = require ("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/db")
const userRoutes = require("./routes/user.routes")


const app = express();

db.authenticate()
    .then(() => console.log("Succesfully authenticated"))
    .catch((error) => console.log(error));

db.sync({force:false})
    .then(() => console.log("Database sync"))
    .catch((error) => console.log(error));

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/hola", (req, res) => {
    const status = {
        "Status": "Running"
    };
    console.log(status);
});


app.use('/api/v1', userRoutes);

module.exports = app;