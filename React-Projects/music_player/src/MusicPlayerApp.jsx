// MusicPlayerApp.jsx
import React, { useState, useRef, useEffect } from 'react';

const songsData = [
  {
    title: 'Chill Vibes',
    artist: 'Lo-Fi Beats',
    src: '/songs/chill-vibes.mp3',
    cover: '/images/cover1.jpg',
    duration: 210
  },
  {
    title: 'Energetic Pulse',
    artist: 'Electro Pop',
    src: '/songs/energetic-pulse.mp3',
    cover: '/images/cover2.jpg',
    duration: 180
  },
  {
    title: 'Smooth Jazz',
    artist: 'Jazz Band',
    src: '/songs/smooth-jazz.mp3',
    cover: '/images/cover3.jpg',
    duration: 240
  }
];

const MusicPlayerApp = () => {
  const [playlist, setPlaylist] = useState(songsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [volume, setVolume] = useState(1);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      isPlaying ? audio.play() : audio.pause();
    }
  }, [isPlaying, currentIndex]);

  const playNext = () => {
    if (shuffle) {
      const nextIndex = Math.floor(Math.random() * playlist.length);
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex((prev) => (prev + 1) % playlist.length);
    }
  };

  const playPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const handleEnded = () => {
    if (repeat) {
      audioRef.current.play();
    } else {
      playNext();
    }
  };

  const totalDuration = playlist.reduce((acc, song) => acc + song.duration, 0);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };

  const removeSong = (index) => {
    if (playlist.length === 1) return;
    const newList = playlist.filter((_, i) => i !== index);
    setPlaylist(newList);
    if (currentIndex >= index) setCurrentIndex((i) => Math.max(0, i - 1));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎵 Music Player</h2>
      <div style={styles.playerBox}>
        <img
          src={playlist[currentIndex].cover}
          alt="cover"
          style={styles.cover}
        />
        <h3>{playlist[currentIndex].title}</h3>
        <p>{playlist[currentIndex].artist}</p>
        <audio
          ref={audioRef}
          src={playlist[currentIndex].src}
          onEnded={handleEnded}
        />
        <div>
          <button onClick={playPrev}>⏮️</button>
          <button onClick={togglePlay}>{isPlaying ? '⏸️' : '▶️'}</button>
          <button onClick={playNext}>⏭️</button>
        </div>
        <div style={styles.controls}>
          <label>🔊</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <button onClick={() => setRepeat((r) => !r)}>
            🔁 Repeat: {repeat ? 'On' : 'Off'}
          </button>
          <button onClick={() => setShuffle((s) => !s)}>
            🔀 Shuffle: {shuffle ? 'On' : 'Off'}
          </button>
        </div>
        <p>Total Playlist Duration: {formatTime(totalDuration)}</p>
      </div>
      <h3 style={styles.heading}>Playlist</h3>
      <ul style={styles.playlist}>
        {playlist.map((song, index) => (
          <li
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              ...styles.songItem,
              backgroundColor: index === currentIndex ? '#d1e7dd' : '#f8f9fa'
            }}
          >
            <img src={song.cover} alt="cover" style={styles.thumb} />
            <div>
              <strong>{song.title}</strong>
              <p>{song.artist}</p>
            </div>
            <button onClick={(e) => { e.stopPropagation(); removeSong(index); }}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial',
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  heading: {
    textAlign: 'center'
  },
  playerBox: {
    textAlign: 'center',
    padding: '10px'
  },
  cover: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '10px',
    marginBottom: '10px'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px'
  },
  playlist: {
    listStyle: 'none',
    padding: 0
  },
  songItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    cursor: 'pointer'
  },
  thumb: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '5px'
  }
};

export default MusicPlayerApp;
