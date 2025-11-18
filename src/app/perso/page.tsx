"use client"

import { MountainSnowIcon, StarIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Perso = () => {
    return (
        <div className="container max-w-3xl 2xl:max-w-7xl mx-auto pt-10 pb-20 px-4 sm:px-6 lg:px-8">
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
                    <video controls width={800} height={450}>
                        <source 
                            src="https://res.cloudinary.com/dzxlzl9ng/video/upload/f_auto,q_auto/coucher_soleil_msmpjm.mp4" 
                            type="video/mp4" 
                        />
                        Votre navigateur ne supporte pas la lecture video.
                    </video>

                    <video controls width={800} height={450}>
                        <source 
                            src="https://res.cloudinary.com/dzxlzl9ng/video/upload/f_auto,q_auto/falaises_xxuteb.mp4" 
                            type="video/mp4" 
                        />
                        Falaises
                    </video>

                    <video controls width={800} height={450}>
                        <source 
                            src="https://res.cloudinary.com/dzxlzl9ng/video/upload/f_auto,q_auto/montagne_snizjs.mp4" 
                            type="video/mp4" 
                        />
                        Montagnes
                    </video>

                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link 
                        href="https://www.youtube.com/watch?v=UcGIwjoNQzY"
                        className="flex items-center justify-center gap-3 bg-gray-100 dark:bg-gray-800 text-primary dark:text-white py-3 px-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700"
                    > 
                        <MountainSnowIcon className="w-6 h-6"/>
                        <span className="font-medium text-lg">Vlog des Alpes</span>
                    </Link>

                    <Link 
                        href="https://youtu.be/mpmc1JH8vNs"
                        className="flex items-center justify-center gap-3 bg-gray-100 dark:bg-gray-800 text-primary dark:text-white py-3 px-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700"
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