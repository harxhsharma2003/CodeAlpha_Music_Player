const songs = [
    {
      title: "Wake Up",
      artist: "Gurinder Gill-Hard Choices",
      src: "Gurinder Gill - WAKE UP (Official Music Video) [hGvLhgssbUI].mp3",
      albumArt: "Wake up.webp",
    },
    {
      title: "Die With A Smile",
      artist: "Bruno Mars & Lady Gaga",
      src: "Lady Gaga Bruno Mars  Die With A Smile Official Music Video.mp3",
      albumArt: "die with a smile.png",
    },
    {
      title: "Satke Lige Dil Madhuli",
      artist: "Deepa Nagarkoti & Rohit Chauhan",
      src: "Satke Lige Dil Madhuli _ Dhuk Dhuki Mera Mann Ma _ Rohit Chauhan _ Deepa Nagarkoti [tLNRhtEkyJk].mp3",
      albumArt: "pahadi song image.webp",
    },
  ];
  
  let currentSongIndex = 0;
  const audio = new Audio(songs[currentSongIndex].src);
  const playPauseBtn = document.getElementById("play-pause-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const songTitle = document.getElementById("song-title");
  const artist = document.getElementById("artist");
  const progressBar = document.getElementById("progress-bar");
  const volumeBar = document.getElementById("volume-bar");
  const albumArt = document.getElementById("album-art");
  
  // Update song info
  function updateSongInfo() {
    songTitle.textContent = songs[currentSongIndex].title;
    artist.textContent = songs[currentSongIndex].artist;
    albumArt.src = songs[currentSongIndex].albumArt;
  }
  
  // Play or pause the song
  function playPause() {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "⏸";
    } else {
      audio.pause();
      playPauseBtn.textContent = "⏵";
    }
  }
  
  // Play next song
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex].src;
    updateSongInfo();
    playPause();
  }
  
  // Play previous song
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex].src;
    updateSongInfo();
    playPause();
  }
  
  // Update progress bar as the song plays
  audio.addEventListener("timeupdate", () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  });
  
  // Seek through the song
  progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  });
  
  // Adjust volume
  volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value;
  });
  
  // Event listeners for buttons
  playPauseBtn.addEventListener("click", playPause);
  nextBtn.addEventListener("click", nextSong);
  prevBtn.addEventListener("click", prevSong);
  
  // Load the first song
  updateSongInfo();