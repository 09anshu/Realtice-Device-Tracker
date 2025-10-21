const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
// serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function(socket) {
    socket.on("send-location", function(data) {
        io.emit("receive-location", {id: socket.id, ...data});
    });
    socket.on("disconnect", function() {
        io.emit("user-disconnect", {id: socket.id});
    });
});
app.get("/", function (req, res) {
    res.render("index");
})
// start the server so the process stays alive (nodemon will watch for changes)
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
