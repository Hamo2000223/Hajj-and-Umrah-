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
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm transition-all duration-300">
          <div className="relative w-full max-w-md scale-100 overflow-hidden rounded-[2rem] bg-white text-center shadow-2xl">
            {/* صورة علوية معتمة قليلاً */}
            <div className="relative h-48 w-full bg-elite-navy">
              <img
                src="/pilgrim-mecca.png"
                alt="الكعبة المشرفة"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              
              {/* زر الإغلاق */}
              <button
                onClick={closePopup}
                className="absolute right-4 top-4 rounded-full bg-black/20 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/40"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="px-8 pb-8 pt-4">
              <h3 className="mb-3 text-2xl font-bold text-elite-navy">
                لبيّك اللهم لبيّك 🕋
              </h3>
              <p className="mb-6 text-gray-600 leading-relaxed">
                نسأل الله أن يكتب لك زيارة قريبة لبيته الحرام. ابدأ رحلتك الإيمانية معنا الآن وتعرف على باقاتنا المميزة.
              </p>
              
              <button
                onClick={closePopup}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-elite-gold px-6 py-3.5 font-bold text-elite-navy shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>ابدأ رحلتك الإيمانية</span>
                <svg className="h-5 w-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
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
