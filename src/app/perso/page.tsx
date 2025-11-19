"use client"

import { MountainSnowIcon, StarIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Perso = () => {
    return (
        <div className="container max-w-5xl 2xl:max-w-7xl mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8">
            {/* 🔸 Introduction */}
            <section className="mb-16">
                <h1 className="text-4xl font-bold mb-4 text-center">
                    Mes vidéos et plans en drone
                </h1>
                <p className="text-lg text-secondary max-w-3xl mx-auto text-center leading-relaxed">
                    On m&apos;a offert un drone à mon anniversaire, j&apos;en ai fais une passion...
                    Voici quelques plans et montages que j&apos;ai pu réaliser !
                </p>
            </section>

            <section className='mb-16'>
                <div className='flex w-full gap-8 flex-col items-center'>
                    <video controls width={900}>
                        <source 
                            src="https://res.cloudinary.com/dzxlzl9ng/video/upload/f_auto,q_auto/coucher_soleil_msmpjm.mp4" 
                            type="video/mp4" 
                        />
                        Votre navigateur ne supporte pas la lecture video.
                    </video>

                    <video controls width={900}>
                        <source 
                            src="https://res.cloudinary.com/dzxlzl9ng/video/upload/f_auto,q_auto/falaises_xxuteb.mp4" 
                            type="video/mp4" 
                        />
                        Falaises
                    </video>

                    <video controls width={900}>
                        <source 
                            src="https://res.cloudinary.com/dzxlzl9ng/video/upload/f_auto,q_auto/montagne_snizjs.mp4" 
                            type="video/mp4" 
                        />
                        Montagnes
                    </video>

                </div>
            </section>

            <section>
                <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Link 
                        href="https://www.youtube.com/watch?v=UcGIwjoNQzY"
                        className="flex items-center justify-center gap-4 bg-primary w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
                    > 
                        <MountainSnowIcon className="w-6 h-6"/>
                        <span>Vlog des Alpes</span>
                    </Link>

                    <Link 
                        href="https://youtu.be/mpmc1JH8vNs"
                        className="flex items-center justify-center gap-4 bg-gray-700 w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors"
                    > 
                        <StarIcon className="w-6 h-6"/>
                        <span className="font-medium text-lg">Montage année 2025</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Perso