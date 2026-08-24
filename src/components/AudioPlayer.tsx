"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // محاولة التشغيل التلقائي
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        // المتصفح يمنع التشغيل التلقائي بدون تفاعل من المستخدم
        console.log("Autoplay prevented by browser. Waiting for user interaction.");
      }
    };

    playAudio();

    // تشغيل الصوت عند أول تفاعل للمستخدم (نقر أو لمس)
    const handleInteraction = async () => {
      if (!isPlaying) {
        try {
          await audio.play();
          setIsPlaying(true);
          // إزالة الأحداث بعد التشغيل الناجح
          document.removeEventListener("click", handleInteraction);
          document.removeEventListener("touchstart", handleInteraction);
        } catch (e) {
          console.error("Error playing audio after interaction:", e);
        }
      }
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/hajj-song.mp3" loop autoPlay />
      <button
        onClick={togglePlay}
        aria-label="Toggle Audio"
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-elite-navy text-elite-gold shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {isPlaying ? (
          // أيقونة إيقاف الصوت
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M17.657 6.343a8 8 0 010 11.314M9 19v-6a2 2 0 00-2-2H5a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 002-2V3a2 2 0 012-2h2a2 2 0 012 2v16a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ) : (
          // أيقونة تشغيل الصوت (صامت)
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
      </button>
    </>
  );
}
