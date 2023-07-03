const express = require("express");
const app = express();

//makes publick available
app.use(express.static("public"));

//first route
app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/home.html")
);

//about route
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);

//work route
app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/works.html")
);

//gallery route
app.get("/gallery", (request, response, next) =>
  response.sendFile(__dirname + "/views/gallery.html")
);

//node app.js to run it once, or nodemon app.js that it keeps on running and updated automatically.
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
