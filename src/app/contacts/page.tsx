'use client';

import { useTranslation } from "react-i18next";
import AnimatedHeader from '../components/AnimatedHeader';
import '../i18n/config'


// import { headers } from 'next/headers';

export default function Contacts() {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)]">
           <AnimatedHeader>123</AnimatedHeader>
           <h1> {t('sorry.dev')}</h1>
           <ul>
            <li> email: wordisstuff@gmail.com</li>
            <li></li>
            <li></li>
           </ul>
        </div>
    );
}
