authClient.ValidateToken({ token }, (err, res) => {
  if (!res.valid) throw new Error("Unauthorized");
});

