'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface ScatterTextProps {
    text: string;
    type?: 'letter' | 'word';
    delay?: number;
}

export default function ScatterText({
    text,
    type = 'letter',
    delay = 0,
}: ScatterTextProps) {
    const elements = type === 'word' ? text.split(' ') : text.split('');

    return (
        <div className="inline-block overflow-visible">
            {elements.map((item, index) => {
                const randomX = Math.random() * 100 - 50; // між -50 і 50
                const randomY = Math.random() * 100 - 50;
                const randomRotate = Math.random() * 60 - 30; // -30° до +30°

                return (
                    <motion.span
                        key={index}
                        initial={{
                            opacity: 0,
                            x: randomX,
                            y: randomY,
                            rotate: randomRotate,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: 0,
                            rotate: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: delay + index * 0.04,
                            ease: 'easeOut',
                        }}
                        className="inline-block"
                    >
                        {item === ' ' ? '\u00A0' : item}
                    </motion.span>
                );
            })}
        </div>
    );
}
