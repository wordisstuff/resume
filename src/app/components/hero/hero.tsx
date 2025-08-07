'use client';
import React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ScatterText from '../scatterText';
import { FcRight } from "react-icons/fc";

export default function HeroSection() {
    const { t } = useTranslation();
    const x = useMotionValue(30)
    return (
        <section
            className="container dark:bg-[url(/images/hero-bg-dark.jpg)] bg-[url(/images/hero-bg.jpg)] relative h-auto w-full flex items-center justify-center text-center px-4 rounded"
            // style={{ backgroundImage: "url('/images/hero-bg-dark.jpg')" }}
        >
            <div className="absolute inset-0  z-0" />

            <motion.div
                className="relative z-10 max-w-3xl text-white flex-row"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ease: "easeOut", duration: 1 }}
                 animate={{ x: 10 }}
            >
                <h1 className="px-auto py-20 text-3xl sm:text-5xl font-bold dark:text-gray-100 text-ocean leading-tight mb-6">
                    <ScatterText text={t('welcome.title')} />
                    {/* <br className="hidden sm:block" /> */}
                    <ScatterText text={t('welcome.title2')} />
                    {/* <br className="hidden sm:block" /> */}
                    <ScatterText text={t('welcome.title3')} />
                </h1>
                <motion.div 
                    className="relative z-11 max-w-3xl fill-red-800 stroke-red-100"
                    initial={{ opacity: 0, y:0, x:-200 }}
                    whileInView={{ opacity: 1, y:60 ,x:-120}}
                    viewport={{ once: true, amount: 0.5 }}
                    animate={{ scale: 1 }}
                    style={{ x, rotate: 10, originX: 0.5 }}
                    transition={{ duration: 1 }}>
                    <FcRight fill='red' stroke='red' className='text-8xl inline fill-red-800 stroke-red-100' />
                </motion.div>
                <motion.div 
                    className="relative z-11 max-w-3xl"
                    initial={{ opacity: 0, y:-80, x:20 }}
                    whileInView={{ opacity: 1, y:-10 ,x:0}}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1 }}>
                    <Link
                    href="/contacts"
                    className="inline-block px-6 py-3 bg-ocean dark:bg-bluegren dark:hover:bg-babyblue hover:bg-bluegrotto text-gray-100 dark:text-gray-700 rounded-lg shadow-lg transition"
                    >
                    <ScatterText text={t('contact.contactUs')} />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
