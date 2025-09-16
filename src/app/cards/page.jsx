"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function page() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchCards = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
            setCards(data);
        } catch (error) {
            console.error('Erro ao buscar cards:', error);
            setCards([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    const handleCardClick = (card) => {
        console.log(`Você clicou em ${card.name}`);
        router.push(`/cards/${card.id}`);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>⚔️ Arena dos Cards ⚔️</h1>

            {loading && <p className={styles.loading}>Carregando cartas...</p>}

            <div className={styles.grid}>
                {cards.map((card) => (
                    <div key={card.id} className={styles.card} onClick={() => handleCardClick(card)}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardName}>{card.name}</h3>
                            <div className={styles.elixirCost}>{card.custo_elixir}</div>
                        </div>
                        <div className={styles.cardBody}>
                            <p className={styles.cardType}>{card.type}</p>
                            <div className={styles.description}>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
