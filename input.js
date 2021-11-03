let connection;

const setUpInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  //Ctrl + c to exit game
  if (key === "\u0003") {
    process.exit();
  }

  //W A S D controls
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }

  if (key === "y") {
    connection.write("Say: yummy in my tummy");
  }

  if (key === "u") {
    connection.write("Say: ssssss i am snek");
  }
};
module.exports = { setUpInput };
