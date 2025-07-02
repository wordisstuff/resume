import React from 'react';
import css from './header.module.css';
export interface HeaderProps {
    children: React.ReactNode;
}
export default function Header({ children }: HeaderProps) {
    console.log(process.env.CRM_SECRET_KEY);
    return <span className={css.header}>{children}</span>;
}
