"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Card } from "antd";
import Link from "next/link";

export default function ProfilePage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
             <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <Link href="/" className={styles.headerLink}>
                        Home
                    </Link>
                </div>
                <div className={styles.headerRight}>
                    <Link href="/cards" className={styles.headerLink}>
                        Cartas
                    </Link>
                    <Link href="/contato" className={styles.headerLink}>
                        Contato
                    </Link>
                </div>
            </header>
            <div className={styles.particles}>
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className={`${styles.particle} ${styles[`particle${(i % 8) + 1}`]}`}
                    ></div>
                ))}
                 
            </div>
        <div className={styles.mainContent}>
            <Card hoverable className={styles.card}>
                <div className={styles.imageProfile}>
                    <Image
                        src="/img/perfil.jpeg"
                        alt="João Vitor Porto Sales"
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                </div>
                <div className={styles.description}>
                    <h2>João Vitor Porto Sales</h2>
                    <h3>2TDS1</h3>
                    <h3>Front-End, Avaliação</h3>
                    <h3>
                        Esta API tem o propósito de mostrar a implementação do front-end com
                        back-end, para isso irei utilizar as tabelas Usuários e Posts.
                    </h3>
                    <h5>Docente: Felipe</h5>
                </div>
            </Card>
        </div>
    </div>
    );
}
