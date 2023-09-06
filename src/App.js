import React, { createContext, useState } from "react";
import TrackList from "./components/List";
import PlayerControls from "./components/Control";

import LostChameleon from "./songs/LostChameleon.mp3";
import Rock from "./songs/TheHipsta.mp3";
import Tobu from "./songs/Tobu.mp3";

import { MusicContext } from "./Context/Music";

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Lost Chameleon - Genesis",
        file: LostChameleon
      },
      {
        name: "The Hipsta - Shaken Soda",
        file: Rock
      },
      {
        name: "Tobu - Such Fun",
        file: Tobu
      }
    ],
    currentTrackIndex: null,
    isPlaying: false
  });

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="container">
        <TrackList />
        <PlayerControls />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
