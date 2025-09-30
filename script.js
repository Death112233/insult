function getInsult() {
  const insultBox = document.getElementById("insultText");
  insultBox.innerText = "Loading insult... 😈";

  fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json")
    .then(response => response.json())
    .then(data => {
      insultBox.innerText = data.insult;
    })
    .catch(error => {
      console.error("Error:", error);
      insultBox.innerText = "⚠️ Oops, failed to fetch insult!";
    });
}
