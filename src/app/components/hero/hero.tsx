'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
    const { t } = useTranslation();
    return (
        <section
            className="container relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-center px-4 rounded"
            style={{ backgroundImage: "url('/images/hero-bg-dark.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/60 z-0" />

            <motion.div
                className="relative z-10 max-w-3xl text-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
                    {t('welcome.title')}
                    <br className="hidden sm:block" />
                    {t('welcome.title2')}
                    <br className="hidden sm:block" />
                    {t('welcome.title3')}
                </h1>

                <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition"
                >
                    {t('contact.contactUs')}
                </Link>
            </motion.div>
        </section>
    );
}
