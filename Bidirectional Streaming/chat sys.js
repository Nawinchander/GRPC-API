function chat(call) {
  call.on("data", (msg) => {
    call.write({ user: "Server", text: `Echo: ${msg.text}` });
  });

  call.on("end", () => call.end());
}

