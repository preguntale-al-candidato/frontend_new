import React from 'react';
import styles from './layout.module.css'
import Head from 'next/head';
import { Header } from '../header/header'


export class Layout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <>
                <Head>
                    <title>Preguntale al candidato</title>
                    <meta name="description" content="Preguntale al candidato" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" href="favicon.ico" />
                </Head>
                <div className={styles.container}>
                    <Header />
                    <div>
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
            </>
        );
    }
}
