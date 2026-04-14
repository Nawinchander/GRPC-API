function uploadLogs(call, callback) {
  let count = 0;

  call.on("data", () => count++);
  call.on("end", () => {
    callback(null, { status: `Received ${count} logs` });
  });
}