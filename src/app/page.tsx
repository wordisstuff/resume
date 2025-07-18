'use client';
import { useTranslation } from 'react-i18next';
import Header from './components/header/header';
import './i18n/config.js';
import HeroSection from './components/hero/hero';
import { MotionList } from './components/motionList';
import ScatterText from './components/scatterText';

// import { headers } from 'next/headers';

export default function Home() {
    const { t } = useTranslation();
    console.log(t('header.menu'));
    return (
        <div className="container mx-auto grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="container">
                <Header>{t('header.menu')}</Header>
            </header>
            <ScatterText
                text="WebBarrel — рішення для вашого бізнесу"
                type="letter"
            />
            <MotionList>
                <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">
                    Сервіс 1
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">
                    Сервіс 2
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">
                    Сервіс 3
                </div>
            </MotionList>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start rounded">
                <HeroSection />
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <h2>FOOTER</h2>
            </footer>
        </div>
    );
}
