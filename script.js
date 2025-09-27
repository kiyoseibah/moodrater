// Spotify songs for each mood
const moodSongs = {
  sad: "https://open.spotify.com/embed/track/6Jv7kjGkhY2fT4yuBF3aTz?utm_source=generator",
  meh: "https://open.spotify.com/embed/track/3ZCTVFBt2Brf31RLEnCkWJ?utm_source=generator",
  okay: "https://open.spotify.com/embed/track/0zNeZTy7nLEWCRrBgjrBx5?utm_source=generator",
  happy: "https://open.spotify.com/embed/track/4NnWuGQujzWUEg0uZokO5M?utm_source=generator",
  excited: "https://open.spotify.com/embed/track/0WQiDwKJclirSYG9v5tayI?utm_source=generator"
};

// Encouraging messages for each mood
const moodMessages = {
  sad: "It's okay to feel sad sometimes 💙. Take a deep breath, you got this!",
  meh: "Not every day is exciting, and that's perfectly fine 😌. Just take it slow.",
  okay: "Today was alright! 🌼 Keep going, brighter days are coming.",
  happy: "Yay! So glad you're feeling good today! ☀️ Spread those good vibes!",
  excited: "Woohoo! Your energy is contagious 🤩 Go out there and make the most of it!"
};

let selectedMood = "";

// Mood button clicks
document.querySelectorAll(".mood-btn").forEach(button => {
  button.addEventListener("click", function() {
    selectedMood = this.dataset.mood;
    showMood(selectedMood);
  });
});

// Show mood message and Spotify player
function showMood(mood) {
  const moodMessage = document.getElementById("moodMessage");
  const songPlayer = document.getElementById("songPlayer");

  // Show encouraging message
  moodMessage.textContent = moodMessages[mood];
  moodMessage.style.display = "block";

  // Show Spotify song
  songPlayer.innerHTML = `
    <iframe style="border-radius:12px"
            src="${moodSongs[mood]}"
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
    </iframe>
  `;
}

// Save note and show summary
document.getElementById("saveNote").addEventListener("click", function() {
  const note = document.getElementById("note").value.trim();
  const summary = document.getElementById("summary");

  if (!selectedMood) {
    alert("Please select your mood first!");
    return;
  }

  if (note === "") {
    alert("Please write something about your day!");
    return;
  }

  summary.style.display = "block";
  summary.innerHTML = `
    <h3>Today's Mood Recap</h3>
    <p><strong>Mood:</strong> ${selectedMood.toUpperCase()}</p>
    <p><strong>Note:</strong> ${note}</p>
  `;

  // Clear the textarea
  document.getElementById("note").value = "";
});
