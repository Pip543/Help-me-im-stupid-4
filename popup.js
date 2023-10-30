document.addEventListener("DOMContentLoaded", function () {
  const jokeContainer = document.getElementById("joke-container");
  const jokeText = document.getElementById("joke");
  const getJokeButton = document.getElementById("get-joke");

  getJokeButton.addEventListener("click", async () => {
    const joke = await fetchJoke();
    jokeText.textContent = joke;
  });

  async function fetchJoke() {
    // You can use a joke API or an array of jokes
    // Replace this with your own logic
    // Example API usage: const response = await fetch("your_joke_api_url");
    // const data = await response.json();
    // return data.joke;

    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Parallel lines have so much in common. It's a shame they'll never meet.",
      
    ];

    return jokes[Math.floor(Math.random() * jokes.length)];
  }
});

