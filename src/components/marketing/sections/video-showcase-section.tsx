"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  Shield,
  Brain,
  Smartphone,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Car,
  BellRing,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRODUCT_VIDEOS } from "@/lib/media-config";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";
import { cn } from "@/lib/utils";

const CHAPTER_ICONS = [Shield, Brain, Smartphone, BarChart3];

export function VideoShowcaseSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeChapter = PRODUCT_VIDEOS.chapters[activeChapterIndex];

  // Handle Play/Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setVideoError(false);
        })
        .catch(() => {
          // If browser blocks video playback, fall back to interactive simulation
          setIsPlaying(true);
          setVideoError(true);
        });
    }
  };

  // Handle Mute/Unmute
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Video time update
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  // Switch Chapter
  const selectChapter = (index: number) => {
    setActiveChapterIndex(index);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.src = PRODUCT_VIDEOS.chapters[index].url;
      videoRef.current.load();
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(true);
          setVideoError(true);
        });
    }
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Scrubber click
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    setProgress(pos * 100);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  return (
    <section className="w-full section-padding bg-[#151518] text-white py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient Looping Twilight Drone Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="nightscape" variant="dark" overlayOpacity={0.70} showControls={false} />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-wide relative z-10">
        {/* Section Heading with Luxury Dark Theme styling */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>See LeaseIQ In Action</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-5 leading-tight">
            Experience the operating system <br className="hidden sm:inline" />
            <span className="text-gradient-gold">built for modern communities.</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Watch how automated gate ANPR, autonomous AI banking, and resident SuperApp work together seamlessly in real residential societies.
          </p>
        </div>

        {/* Master Video Player Container */}
        <div
          ref={containerRef}
          className="max-w-5xl mx-auto rounded-3xl border border-white/15 bg-[#0C0C0E] shadow-2xl overflow-hidden relative group"
        >
          {/* Video Player Display Screen */}
          <div className="relative aspect-[16/9] min-h-[320px] sm:min-h-[480px] bg-black overflow-hidden flex items-center justify-center">
            {/* HTML5 Video Element */}
            <video
              ref={videoRef}
              src={activeChapter.url}
              poster={activeChapter.poster}
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => {
                setIsPlaying(false);
                setProgress(100);
              }}
              onError={() => setVideoError(true)}
              className="w-full h-full object-cover"
            />

            {/* Simulated UI Fallback / High-Fidelity Layer (Visible when paused or if video fails) */}
            {(!isPlaying || videoError) && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/55 backdrop-blur-[2px] transition-all p-6 text-center">
                {/* Poster Image Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
                  style={{ backgroundImage: `url(${activeChapter.poster})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />

                <div className="relative z-30 max-w-lg space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold">
                    {activeChapter.badge} • Chapter {activeChapterIndex + 1}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {activeChapter.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {activeChapter.subtitle}
                  </p>

                  {/* Pulsing Play Button */}
                  <div className="pt-3">
                    <button
                      onClick={togglePlay}
                      className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold text-black shadow-[0_0_40px_rgba(201,169,110,0.5)] hover:scale-105 transition-all group"
                      aria-label="Play product video"
                    >
                      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
                      <Play className="w-8 h-8 fill-black text-black ml-1 relative z-10" />
                    </button>
                  </div>
                  <p className="text-[11px] text-white/50 tracking-wide uppercase pt-2">
                    Click to Play Demonstration ({activeChapter.duration})
                  </p>
                </div>
              </div>
            )}

            {/* Top Overlay Badge when playing */}
            {isPlaying && (
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-white">{activeChapter.title}</span>
                <span className="text-white/40">|</span>
                <span className="text-gold font-mono">{activeChapter.duration}</span>
              </div>
            )}
          </div>

          {/* Timeline Scrubber Bar */}
          <div
            onClick={handleSeek}
            className="w-full bg-white/10 h-2.5 cursor-pointer relative group/scrubber hover:h-3 transition-all"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="bg-gold h-full relative transition-all duration-100"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg scale-0 group-hover/scrubber:scale-100 transition-transform" />
            </div>
          </div>

          {/* Bottom Player Controls & Chapter Selection Bar */}
          <div className="p-4 sm:p-6 bg-[#111114] border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Play/Pause, Mute, Restart */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-start">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={togglePlay}
                  className="rounded-full w-10 h-10 p-0 bg-gold text-black hover:bg-gold/90 font-bold shadow"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={toggleMute}
                  className="rounded-full w-10 h-10 p-0 border-white/20 bg-white/5 hover:bg-white/10 text-white"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-white/60" /> : <Volume2 className="w-4 h-4 text-gold" />}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      setProgress(0);
                    }
                  }}
                  className="rounded-full w-10 h-10 p-0 text-white/60 hover:text-white"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>

              {/* Mobile Fullscreen trigger */}
              <button
                onClick={toggleFullscreen}
                className="lg:hidden p-2 text-white/60 hover:text-white"
                title="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* 4 Interactive Chapter Bookmarks */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {PRODUCT_VIDEOS.chapters.map((ch, idx) => {
                const Icon = CHAPTER_ICONS[idx] || Shield;
                const isActive = activeChapterIndex === idx;

                return (
                  <button
                    key={ch.id}
                    onClick={() => selectChapter(idx)}
                    className={cn(
                      "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap border shrink-0",
                      isActive
                        ? "bg-gold text-black border-gold font-semibold shadow-md"
                        : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border-white/10"
                    )}
                  >
                    <Icon className={cn("w-3.5 h-3.5", isActive ? "text-black" : "text-gold")} />
                    <span>{ch.title}</span>
                    <span className={cn("text-[10px] font-mono", isActive ? "text-black/70" : "text-white/40")}>
                      {ch.duration}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Fullscreen & Action CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                title="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <Button asChild size="sm" className="bg-white text-black hover:bg-white/90 font-medium rounded-full px-5">
                <a href="/book-demo">
                  Book Guided Demo <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Highlights beneath Video */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { label: "Zero Noise Auto-Gate", detail: "Sub-0.8s ANPR recognition" },
            { label: "Bank Nodal Feed", detail: "HDFC, ICICI, SBI auto-sync" },
            { label: "Resident SuperApp", detail: "1-Tap UPI maintenance" },
            { label: "Audit-Ready Ledger", detail: "Instant CA balance sheets" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-gold/30 transition-colors"
            >
              <p className="text-xs font-bold text-gold">{item.label}</p>
              <p className="text-xs text-white/60 mt-0.5">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoShowcaseSection;
