"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Prevent scrolling when popup is open
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showPopup]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // محاولة التشغيل التلقائي
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
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

  const closePopup = () => {
    setShowPopup(false);
    if (!isPlaying && audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/hajj-song.mp3" loop autoPlay />
      
      {/* النافذة المنبثقة الترحيبية */}
      {showPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm transition-all duration-300">
          <div className="relative w-full max-w-md scale-100 overflow-hidden rounded-3xl bg-white p-8 text-center shadow-2xl">
            {/* زر الإغلاق */}
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-800"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="mb-4 flex justify-center text-elite-gold">
              <svg className="h-16 w-16 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity=".3"/>
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm1-5a1.25 1.25 0 100 2.5A1.25 1.25 0 0012 6z" />
              </svg>
            </div>
            
            <h3 className="mb-2 text-2xl font-bold text-elite-navy">
              أهلاً بك في إيليت للسياحة
            </h3>
            <p className="mb-6 text-gray-600">
              لا تفوت فرصة العمر، احجز باقة العمرة الشاملة بـ 48,000 جنيه فقط وتمتع بأفضل الخدمات.
            </p>
            
            <button
              onClick={closePopup}
              className="w-full rounded-full bg-elite-gold px-6 py-3 font-bold text-elite-navy shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              تصفح عروضنا
            </button>
          </div>
        </div>
      )}

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
