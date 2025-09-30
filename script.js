async function getInsult() {
  const insultBox = document.getElementById("insultText");
  insultBox.innerText = "Loading insult... 😈";

  // CORS proxy use kar rahe hai
  const proxyUrl = "https://api.allorigins.win/get?url=";
  const apiUrl = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

  try {
    const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
    const dataWrapped = await response.json();

    // proxy ke through actual API data ko parse karo
    const data = JSON.parse(dataWrapped.contents);
    insultBox.innerText = data.insult;

  } catch (error) {
    console.error("Error fetching insult:", error);
    insultBox.innerText = "⚠️ Oops, failed to fetch insult!";
  }
}
