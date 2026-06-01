"use client";
import { useState, useRef, useImperativeHandle, forwardRef } from "react";

const MusicPlayer = forwardRef((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useImperativeHandle(ref, () => ({
    playMusic: () => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  }));

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/music.mp3" loop />
      <button 
        onClick={() => {
            if (audioRef.current) {
                isPlaying ? audioRef.current.pause() : audioRef.current.play();
                setIsPlaying(!isPlaying);
            }
        }}
        className="w-12 h-12 bg-stone-900 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
});

MusicPlayer.displayName = 'MusicPlayer';
export default MusicPlayer;