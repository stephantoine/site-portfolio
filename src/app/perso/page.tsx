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
                        <source src="https://player.cloudinary.com/embed/?cloud_name=dzxlzl9ng&public_id=coucher_soleil_msmpjm&profile=cld-default" type="video/MP4" />
                        Coucher de soleil
                    </video>
                    <video controls width={800} height={450}>
                        <source src="https://player.cloudinary.com/embed/?cloud_name=dzxlzl9ng&public_id=falaises_xxuteb&profile=cld-default" type="video/mov" />
                        Falaises
                    </video>
                    <video controls width={800} height={450}>
                        <source src="https://player.cloudinary.com/embed/?cloud_name=dzxlzl9ng&public_id=montagne_snizjs&profile=cld-default" type="video/mov" />
                        Montagnes
                    </video>
                </div>
            </section>

            <section>
                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Link className="flex gap-4 bg-gray-100 dark:bg-gray-800 dark:text-white py-2 px-2 text-primary rounded-xl justify-center shadow-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700" href="https://www.youtube.com/watch?v=UcGIwjoNQzY"> 
                        <MountainSnowIcon></MountainSnowIcon>
                        Vlog des Alpes
                    </Link>
                    <Link className="flex gap-4 bg-gray-100 dark:bg-gray-800 dark:text-white py-2 px-2 text-primary rounded-xl justify-center shadow-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700" href="https://youtu.be/mpmc1JH8vNs"> 
                        <StarIcon></StarIcon>
                        Montage année 2025
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Perso