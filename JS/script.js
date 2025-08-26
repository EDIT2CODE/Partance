fetch("https://backendpartance.onrender.com", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ user_id: 1, name: "Salaire", amount: 1000 })
});
