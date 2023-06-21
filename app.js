require("dotenv").config();
const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 8000;

// settting view up engines
// using ejs template
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');

//setting up middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use(express.static("./public"));
app.use(express.static("./uploads"));
// app.use(require("cors")());

require("./router")(app);

// 404 Error Handler
app.all("*", (req, res) => {
    res.status(404).json({
        status: false,
        error: "And Just Like That, You Completely Lost Your Way 😥",
    });
});


app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}

    http://localhost:${PORT}`

    );
});
  




module.exports = { app };

require('./router')(app);
