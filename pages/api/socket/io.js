import { Server as ServerIO } from "socket.io";

let clientConnection = 0;

export default function SocketHandler(req, res) {
  if (!res.socket.server.io) {
    const path = "/api/socket/io";
    console.log(`New Socket.io server... to ${path}`);
    // adapt Next's net Server to http Server
    const httpServer = res.socket.server;
    const io = new ServerIO(httpServer, {
      path: path,
      addTrailingSlash: false,
    });
    io.on("connection", (socket) => {
      clientConnection++;
      socket.on("disconnect", (reason) => {
        clientConnection--;
      });
      if (io.engine.clientsCount > parseInt(process.env.MAX_ALLOWED) * 2) {
        io.emit("message", { show: false });
      } else {
        io.emit("message", { show: true });
      }
      console.log(io.engine.clientsCount);
    });

    // append SocketIO server to Next.js socket server response
    res.socket.server.io = io;
  }
  res.end();
}
