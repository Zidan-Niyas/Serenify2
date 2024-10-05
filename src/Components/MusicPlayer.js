// src/components/MusicPlayer.js

import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const MusicPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchSongs = async () => {
      let emotion = "Happy";
      const songsListRef = ref(storage, `songs/`); // Path to your songs folder in Firebase Storage
      const songRefs = await listAll(songsListRef);
      const songUrls = await Promise.all(
        songRefs.items.map((songRef) => getDownloadURL(songRef))
      );
      setSongs(songUrls);
    };

    fetchSongs();
  }, []);

  const playRandomSong = () => {
    if (songs.length === 0) return; // Do nothing if no songs are available

    const randomIndex = Math.floor(Math.random() * songs.length);
    const songUrl = songs[randomIndex];
    const audio = document.getElementById("audio");

    if (currentSong === songUrl) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(songUrl);
      setIsPlaying(true);
      audio.src = songUrl;
      audio.play();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Firebase Music Player</h1>
      <button onClick={playRandomSong}>Play Random Song</button>
      <audio id="audio" />
    </div>
  );
};

export default MusicPlayer;
