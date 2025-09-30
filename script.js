async function getInsult() {
  const insultBox = document.getElementById("insultText");
  insultBox.innerText = "Loading insult... 😈";

  const proxyUrl = "https://api.allorigins.win/get?url=";
  const apiUrl = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

  try {
    const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
    const dataWrapped = await response.json();
    const data = JSON.parse(dataWrapped.contents);
    insultBox.innerText = data.insult;
  } catch (error) {
    console.error("Error fetching insult:", error);
    insultBox.innerText = "⚠️ Failed to fetch insult!";
  }
}
