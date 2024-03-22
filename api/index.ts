import server from "./src/server";

server.listen(process.env.PORT, () => {
  console.log("Connected to Express ✨");
});
