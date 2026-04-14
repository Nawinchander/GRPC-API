/// server side

function getNotifications(call) {
  const messages = ["Hello", "New Message", "System Alert"];
  messages.forEach(msg => {
    call.write({ message: msg });
  });
  call.end();
}


