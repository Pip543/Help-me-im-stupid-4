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
      "Why do seagulls fly over the sea? Because if they flew over the bay they'd be bagels!",
      "Why didn't the vampire attack Taylor Swift? She had BAD BLOOD (taylors version)",
      "Why did the chemist read the book on helium so fast? Cause she couldn't put it down",
      "Why did the two red blood cells break up? Because their love was all in vein",
      "Why did the biologist break up with the physicist? They had no chemistry",
      "Wanna hear a joke about paper? Nevermind it's wearable!",
      "Did you hear the rumour about butter? Well, I'm not going to spread it",
      "Singing in the shower is fun. Until you get soap in your mouth. Then it becomes a soap opera.",
    
      
    ];

    return jokes[Math.floor(Math.random() * jokes.length)];
  }
});

