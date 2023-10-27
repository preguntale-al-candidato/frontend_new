import React from 'react';
import styles from './hamburger.module.css';

export class HamburgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    toggleMenu = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const menuClass = this.state.open ? `${styles.hamburger} ${styles.open}` : styles.hamburger;

        return (
            <div className={menuClass} onClick={this.toggleMenu}>
                <div className={styles.icon}></div>
            </div>
        );
    }
}