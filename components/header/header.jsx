import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import { Navbar } from '../nav/nav'
import { HamburgerMenu } from '../hamburger/hamburger'

export class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className={styles.header}>

        <Navbar />
      </header>
    );
  }
}
