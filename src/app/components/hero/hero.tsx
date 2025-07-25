'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ScatterText from '../scatterText';

export default function HeroSection() {
    const { t } = useTranslation();
    return (
        <section
            className="container dark:bg-[url(/images/hero-bg-dark.jpg)] bg-[url(/images/hero-bg.jpg)] relative h-auto w-full flex items-center justify-center text-center px-4 rounded"
            // style={{ backgroundImage: "url('/images/hero-bg-dark.jpg')" }}
        >
            <div className="absolute inset-0  z-0" />

            <motion.div
                className="relative z-10 max-w-3xl text-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
            >
                <h1 className="px-auto py-20 text-3xl sm:text-5xl font-bold dark:text-gray-100 text-ocean leading-tight mb-6">
                    <ScatterText text={t('welcome.title')} />
                    {/* <br className="hidden sm:block" /> */}
                    <ScatterText text={t('welcome.title2')} />
                    {/* <br className="hidden sm:block" /> */}
                    <ScatterText text={t('welcome.title3')} />
                </h1>

                <Link
                    href="/contacts"
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition"
                >
                    <ScatterText text={t('contact.contactUs')} />
                </Link>
            </motion.div>
        </section>
    );
}
