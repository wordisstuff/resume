'use client';
import { motion } from 'framer-motion';
import React from 'react';

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export function MotionList({ children }: { children: React.ReactNode }) {
    return (
        <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6"
        >
            {React.Children.map(children, (child, i) => (
                <motion.li key={i} variants={item}>
                    {child}
                </motion.li>
            ))}
        </motion.ul>
    );
}
