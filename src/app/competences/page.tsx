"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { skills } from '@/contents/comp'
import { Map } from "lucide-react";
import Link from "next/link";

const Competences = () => {
  const imageUrl = "/mind_map.png"
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => setIsOpen(!isOpen)

  const Popup = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [zoom, setZoom] = useState(false)
    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const dragRef = useRef<{ active: boolean; startX: number; startY: number; originX: number; originY: number } | null>(null)
    const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 })

    // Détection mobile
    useEffect(() => {
      const mq = window.matchMedia("(max-width: 639px)")
      const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches)
      handler(mq)
      if ("addEventListener" in mq) mq.addEventListener("change", handler as any)
      else mq.addListener(handler)
      return () => {
        if ("removeEventListener" in mq) mq.removeEventListener("change", handler as any)
        else mq.removeListener(handler)
      }
    }, [])

    // Ouvrir image dans un nouvel onglet sur mobile
    useEffect(() => {
      if (isMobile) {
        try {
          const newWin = window.open(imageUrl, "_blank")
          if (newWin) (newWin as any).opener = null
        } catch {}
        togglePopup()
      }
    }, [isMobile])

    // Calcul des contraintes lors du zoom
    useEffect(() => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      const overflowX = rect.width / 2
      const overflowY = rect.height / 2
      if (zoom) {
        setConstraints({
          left: -overflowX,
          right: overflowX,
          top: -overflowY,
          bottom: overflowY
        })
      } else {
        setConstraints({ left: 0, right: 0, top: 0, bottom: 0 })
        setOffsetX(0)
        setOffsetY(0)
      }
    }, [zoom])

    if (isMobile) return null

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
      if (!zoom) return
      dragRef.current = {
        active: true,
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        originX: offsetX,
        originY: offsetY
      }
      try { e.currentTarget.setPointerCapture(e.pointerId) } catch {}
    }

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      if (!zoom) return
      const drag = dragRef.current
      if (!drag || !drag.active) return
      let newX = drag.originX + (e.clientX - drag.startX)
      let newY = drag.originY + (e.clientY - drag.startY)
      // Appliquer contraintes
      newX = Math.max(constraints.left, Math.min(constraints.right, newX))
      newY = Math.max(constraints.top, Math.min(constraints.bottom, newY))
      setOffsetX(newX)
      setOffsetY(newY)
    }

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
      if (!zoom) return
      const drag = dragRef.current
      if (!drag) return
      drag.active = false
      try { e.currentTarget.releasePointerCapture(drag.pointerId) } catch {}
    }

    const handleClickImage = () => setZoom(prev => prev ? false : true)

    return (
      <div className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-dark rounded-xl shadow-lg z-50 max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-end p-3 bg-white dark:bg-dark shrink-0 border-b border-gray-200 dark:border-gray-700">
            <button
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80"
              onClick={togglePopup}
            >
              Fermer
            </button>
          </div>

          {/* Zone Image */}
          <div
            ref={containerRef}
            className="relative flex-1 w-full overflow-hidden cursor-grab active:cursor-grabbing"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <div
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px) scale(${zoom ? 2 : 1})`,
                transition: "transform 0.25s ease",
                touchAction: "none"
              }}
              className="w-full h-full"
            >
              <motion.img
                src={imageUrl}
                alt="Carte mentale compétences"
                className="select-none max-w-none rotate-90 w-auto h-full sm:rotate-0 sm:w-full sm:h-auto"
                draggable={false}
                onClick={handleClickImage}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-7xl mx-auto pt-10 pb-14">
      <h1 className="text-4xl font-bold mb-4 text-center">Compétences</h1>
      <p className="text-lg text-secondary mb-24 text-center">Voici l&apos;ensemble des compétences du BUT</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
        {skills.map((skill, index) => {
          const link = `/competences/competence-${skill.number}`;
          return (
            <Link key={index} href={link} className="h-full">
              <motion.article
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  borderColor: hoveredIndex === index ? skill.color : "transparent",
                  boxShadow: hoveredIndex === index ? `0 0 12px 2px ${skill.color}40` : "",
                }}
                className="relative h-full bg-white dark:bg-dark/50 rounded-2xl shadow-lg p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <h1
                  className="absolute top-3 right-4 sm:top-4 sm:right-6 text-7xl sm:text-8xl font-bold select-none transition-colors duration-300"
                  style={{ color: hoveredIndex === index ? skill.color : "rgba(177, 173, 172, 0.1)" }}
                >
                  {skill.number}
                </h1>
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{skill.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-grow">{skill.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.projects.map((project) => (
                      <span key={project} className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium shadow-sm">{project}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={togglePopup}
          className="flex gap-2 bg-primary w-auto justify-center text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
        >
          <Map className="w-5 h-5" />
          Carte mentale
        </button>
      </div>

      {isOpen && <Popup />}
    </div>
  )
}

export default Competences
