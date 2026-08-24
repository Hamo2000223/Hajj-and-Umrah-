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
    const handleInteraction = () => {
      if (!isPlaying) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              // إزالة الأحداث بعد التشغيل الناجح
              document.removeEventListener("click", handleInteraction);
              document.removeEventListener("touchstart", handleInteraction);
              document.removeEventListener("pointerdown", handleInteraction);
            })
            .catch((e) => {
              console.error("Error playing audio after interaction:", e);
            });
        }
      }
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction, { passive: true });
    document.addEventListener("pointerdown", handleInteraction, { passive: true });

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("pointerdown", handleInteraction);
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
        className={`fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
          isPlaying
            ? "bg-elite-navy text-elite-gold shadow-[0_0_20px_rgba(234,179,8,0.4)] ring-2 ring-elite-gold"
            : "animate-bounce bg-elite-gold text-elite-navy shadow-xl ring-4 ring-elite-gold/30"
        }`}
      >
        {isPlaying ? (
          // أيقونة الصوت يعمل
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        ) : (
          // أيقونة الصوت متوقف (اضغط للتشغيل)
          <svg className="h-7 w-7 pl-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
}
