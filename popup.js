document.addEventListener("DOMContentLoaded", function () {
  const jokeContainer = document.getElementById("joke-container");
  const jokeText = document.getElementById("joke");
  const getJokeButton = document.getElementById("get-joke");

  getJokeButton.addEventListener("click", async () => {
    const joke = await fetchJoke();
    jokeText.textContent = joke;
  });

  async function fetchJoke() {
    // Could use an API for the jokes instead 
    // kinda too much effort tho

    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Parallel lines have so much in common. It's a shame they'll never meet.",
      "Why do seagulls fly over the sea? Because if they flew over the bay they'd be bagels!",
      "Why didn't the vampire attack Taylor Swift? She had BAD BLOOD (taylors version)",
      "Why did the chemist read the book on helium so fast? Cause she couldn't put it down",
      "Why did the two red blood cells break up? Because their love was all in vein",
      "Why did the biologist break up with the physicist? They had no chemistry",
      "Wanna hear a joke about paper? Nevermind it's wearable!",
      "Singing in the shower is fun. Until you get soap in your mouth. Then it becomes a soap opera.",
    
      
    ];

    return jokes[Math.floor(Math.random() * jokes.length)];
  }
});

