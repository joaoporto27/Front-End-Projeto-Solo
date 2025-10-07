"use client";
import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function ContatoPage() {
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
                    <Link href="/perfil" className={styles.headerLink}>
                        Perfil
                    </Link>
                </div>
            </header>

            <div className={styles.particles}>
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className={`${styles.particle} ${styles[`particle${(i % 6) + 1}`]}`}
                    ></div>
                ))}
            </div>

            <div className={styles.mainContent}>
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>Entre em Contato</h1>
                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Nome:</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Seu nome completo"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Telefone:</label>
                            <input
                                type="tel"
                                className={styles.input}
                                placeholder="(11) 99999-9999"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email:</label>
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="seu@email.com"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Mensagem:</label>
                            <textarea
                                className={styles.textarea}
                                rows="4"
                                placeholder="Digite sua mensagem aqui..."
                            ></textarea>
                        </div>

                        <button type="button" className={styles.submitButton}>
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}