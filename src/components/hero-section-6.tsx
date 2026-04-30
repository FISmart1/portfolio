'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Menu, SendHorizonal, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { AuroraText } from "@/components/magicui/aurora-text";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Highlighter } from "@/components/magicui/highlighter";
import Image from 'next/image'

const menuItems = [
  { name: 'Features', href: '#' },
  { name: 'Solution', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'About', href: '#' },
]

export function HeroSection() {
  const [menuState, setMenuState] = useState(false)
  return (
    <>
      <main>
        <section className="relative py-20 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            
            {/* GRID LAYOUT: Kiri - Tengah - Kanan */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              
              {/* === KOLOM KIRI: Intro & Bio === */}
              <div className="lg:text-left order-2 lg:order-1">
                <AuroraText className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                  Nur Yusuf Ferdiansyah
                </AuroraText>

                <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <Highlighter action="highlight" color="#60a5fa">Student Developer & Emerging Team Leader</Highlighter> who loves building digital
                  solutions and empowering others.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/cv.pdf"
                    download="CV-Yusuf.pdf"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-5 py-2.5 text-white dark:bg-white dark:text-black font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    Download CV
                  </a>

                </div>
              </div>

              {/* === KOLOM TENGAH: FOTO PNG CUTOUT === */}
              <div className="relative flex justify-center order-1 lg:order-2">
                {/* Glow effect behind photo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl scale-110" />
                
                {/* Photo Container with floating animation */}
                <div className="relative z-10 animate-float">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                    {/* 
                      ⚠️ PENTING: Gunakan foto PNG dengan background transparan!
                      Tips: Remove background di remove.bg, Photoshop, atau Figma
                    */}
                    <Image
                      src="/me.png"
                      alt="Nur Yusuf Ferdiansyah"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                      sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    />
                  </div>
                  
                  {/* Decorative badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 rounded-full px-[10%] py-2 shadow-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      👋 Hi, I'm Yusuf!
                    </span>
                  </div>
                </div>
              </div>

              {/* === KOLOM KANAN: Skills & Stats === */}
              <div className="lg:text-left order-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  ✨ What I Bring
                </h3>
                
                <div className="space-y-4">
                  {/* Skill Item */}
                  <div className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Frontend Development</span>
                      <span className="text-xs text-gray-500">75%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[75%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500" />
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Backend & API</span>
                      <span className="text-xs text-gray-500">90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500" />
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">DevOps Engineer</span>
                      <span className="text-xs text-gray-500">60%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-[60%] bg-gradient-to-r from-pink-500 to-orange-500 rounded-full transition-all duration-500" />
                    </div>
                  </div>
                </div>

                {/* Social/Contact */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Let's connect & build something amazing!
                  </p>
                  <div className="flex gap-3">
                    <a 
                      href="https://instagram.com/nyusufansyah" 
                      target="_blank"
                      className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-pink-100 dark:hover:bg-pink-900/30 text-gray-700 dark:text-gray-300 hover:text-pink-600 transition"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a 
                      href="mailto:yusufftibazma@gmail.com"
                      className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/FISmart1" 
                      target="_blank"
                      className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 transition"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* CSS Animation for floating effect */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float {
            animation: none;
          }
        }
      `}</style>
    </>
  )
}