import React from 'react';
import styles from './nav.module.css';
import Link from 'next/link';
import { HamburgerMenu } from '../hamburger/hamburger';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={styles.header}>
                <Link href="/" className={styles.titleText}>
                    <h5 className={styles.titleText}>Preguntale al Candidato</h5>
                </Link>
                <div className={styles.headerLinks}>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                </div>
                <HamburgerMenu />
            </header>
        );
    }
}