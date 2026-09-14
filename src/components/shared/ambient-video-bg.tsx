"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, Pause, Video } from "lucide-react";

export type VideoPreset =
  | "architecture"
  | "security"
  | "finance"
  | "community"
  | "nightscape"
  | "technology"
  | "lifestyle"
  | "operations"
  | "analytics"
  | "governance"
  | "cyber"
  | "courtyard"
  | "gardens"
  | "lobby"
  | "sunset";

export interface AmbientVideoBgProps {
  className?: string;
  preset?: VideoPreset;
  videoSrc?: string;
  posterImage?: string;
  overlayOpacity?: number;
  variant?: "dark" | "subtle" | "light";
  showControls?: boolean;
}

const PRESETS: Record<
  VideoPreset,
  { videoSrc: string; poster: string; label: string }
> = {
  architecture: {
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-buildings-seen-from-above-41484-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85",
    label: "Grand Towers Aerial Feed",
  },
  nightscape: {
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85",
    label: "Twilight Penthouses Stream",
  },
  courtyard: {
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-buildings-seen-from-above-41484-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    label: "Minimalist Courtyard Stream",
  },
  technology: {
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-41584-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    label: "Glass Tech Atrium Stream",
  },
  finance: {
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-computer-43403-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2000&q=85",
    label: "Fintech Ledger Feed",
  },
  cyber: {
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-41584-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=85",
    label: "Neural Data Matrix Feed",
  },
  security: {
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-security-camera-recording-a-parking-lot-41581-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=2000&q=85",
    label: "Perimeter Barrier Stream",
  },
  gardens: {
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-young-woman-checking-her-phone-while-walking-outside-43415-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=85",
    label: "Lush Community Greenery",
  },
  lifestyle: {
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2000&q=85",
    label: "Resort Infinity Pool Stream",
  },
  lobby: {
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-buildings-seen-from-above-41484-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
    label: "Marble Concierge Lounge",
  },
  sunset: {
    videoSrc:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85",
    label: "Golden Horizon Twilight",
  },
  community: {
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-young-woman-checking-her-phone-while-walking-outside-43415-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=85",
    label: "Evening Amphitheater Stream",
  },
  operations: {
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-41584-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=85",
    label: "Operations & SLA Stream",
  },
  analytics: {
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-computer-43403-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=85",
    label: "Command Analytics Stream",
  },
  governance: {
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-buildings-seen-from-above-41484-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85",
    label: "Governance & Trust Stream",
  },
};

export function AmbientVideoBg({
  className = "",
  preset = "architecture",
  videoSrc,
  posterImage,
  overlayOpacity,
  variant = "dark",
  showControls = false,
}: AmbientVideoBgProps) {
  const prefersReduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const activePreset = PRESETS[preset] || PRESETS.architecture;
  const activeVideo = videoSrc || activePreset.videoSrc;
  const activePoster = posterImage || activePreset.poster;

  // Ensure background images and videos are clearly visible to the user
  // Normalize incoming overlayOpacity so that high values don't wash out the imagery
  const normalizedOpacity =
    overlayOpacity !== undefined
      ? overlayOpacity > 0.8
        ? 0.55 + (overlayOpacity - 0.8) * 0.4
        : overlayOpacity
      : variant === "dark"
      ? 0.72
      : 0.58;

  useEffect(() => {
    if (prefersReduced) {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [prefersReduced]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
    >
      {/* High-Resolution Photographic Poster Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `url(${activePoster})`,
          opacity: 0.80,
          filter: "brightness(0.92) contrast(1.1) saturate(1.05)",
        }}
      />

      {/* Ambient Looping Video Layer */}
      {!hasError && !prefersReduced && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-50" : "opacity-0"
          }`}
          style={{ filter: "brightness(0.92) contrast(1.1) saturate(1.1)" }}
        >
          <source src={activeVideo} type="video/mp4" />
        </video>
      )}

      {/* Procedural High-End Architectural Motion Grid & Particle Canvas */}
      <div className="absolute inset-0 z-[1] overflow-hidden opacity-35">
        {/* Animated Electric Cyan Light Beam */}
        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["0%", "5%", "0%"],
            rotate: [-2, 2, -2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[30%] left-[15%] w-[800px] h-[700px] rounded-full bg-gradient-to-tr from-[#00F5D4]/15 via-[#3B82F6]/10 to-transparent blur-[130px] pointer-events-none"
        />
        <motion.div
          animate={{
            x: ["10%", "-10%", "10%"],
            y: ["5%", "-5%", "5%"],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[700px] h-[600px] rounded-full bg-gradient-to-br from-[#8B5CF6]/15 via-[#00F5D4]/8 to-transparent blur-[140px] pointer-events-none"
        />

        {/* High-Tech Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #00F5D4 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Ambient Glowing Particles */}
        {!prefersReduced && (
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: `${15 + i * 14}%`,
                  y: `${20 + (i % 3) * 25}%`,
                  opacity: 0.2,
                }}
                animate={{
                  y: [
                    `${20 + (i % 3) * 25}%`,
                    `${10 + (i % 3) * 25}%`,
                    `${20 + (i % 3) * 25}%`,
                  ],
                  opacity: [0.15, 0.4, 0.15],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
                className="absolute w-2 h-2 rounded-full bg-[#00F5D4]/40 blur-[1px]"
              />
            ))}
          </div>
        )}
      </div>

      {/* Adaptive Translucent Vignette & Gradients (Deep Space Navy #040D1A) */}
      {variant === "dark" ? (
        <>
          <div
            className="absolute inset-0 z-[2]"
            style={{
              background: `radial-gradient(ellipse at 50% 40%, rgba(4, 13, 26, ${
                normalizedOpacity * 0.65
              }) 0%, rgba(4, 13, 26, ${normalizedOpacity}) 70%, rgba(4, 13, 26, 0.96) 100%)`,
            }}
          />
          <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#040D1A]/85 via-transparent to-[#040D1A]/95" />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 z-[2]"
            style={{
              background: `radial-gradient(ellipse at 50% 35%, rgba(4, 13, 26, ${
                normalizedOpacity * 0.65
              }) 0%, rgba(6, 18, 32, ${
                normalizedOpacity * 0.9
              }) 65%, rgba(4, 13, 26, 0.96) 100%)`,
            }}
          />
          <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#040D1A]/70 via-transparent to-[#040D1A]/85" />
        </>
      )}

      {/* Ambient Video Control Badge */}
      {showControls && (
        <div className="absolute bottom-6 right-6 z-20 pointer-events-auto hidden sm:flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A1B30]/85 hover:bg-[#0A1B30] border border-[rgba(0,245,212,0.14)] text-xs font-medium text-white backdrop-blur-md shadow-sm transition-all hover:border-[rgba(0,245,212,0.4)] group"
            title={isPlaying ? "Pause ambient video motion" : "Play ambient video motion"}
          >
            <span className="flex h-2 w-2 rounded-full bg-[#00F5D4] animate-pulse" />
            <Video className="w-3.5 h-3.5 text-[#00F5D4]" />
            <span className="text-[11px] text-[#7E97B8] group-hover:text-white">
              {isPlaying ? activePreset.label : "Video Paused"}
            </span>
            {isPlaying ? (
              <Pause className="w-3 h-3 text-[#7E97B8] ml-0.5" />
            ) : (
              <Play className="w-3 h-3 text-[#00F5D4] ml-0.5" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default AmbientVideoBg;

