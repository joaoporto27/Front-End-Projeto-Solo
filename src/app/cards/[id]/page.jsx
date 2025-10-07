"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';
import Link from 'next/link';

export default function CardDetail({ params }) {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = params;

    const fetchCard = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
            setCard(data);
        } catch (error) {
            console.error('Erro ao buscar card:', error);
            setError('Card não encontrado');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchCard();
        }
    }, [id]);


    if (loading) {
        return (
            <div className={styles.container}>
                <p className={styles.loading}>Carregando carta...</p>
            </div>
        );
    }

    if (error || !card) {
        return (
            <div className={styles.container}>
                <p className={styles.error}>{error || 'Card não encontrado'}</p>
                 <Link href="/cards" className={styles.backButton}>
                ⬅️ Voltar para Arena
            </Link>
            </div>
        );
    }

    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <Link href="/" className={styles.headerLink}>
                        Home
                    </Link>
                </div>
                <div className={styles.headerRight}>
                    <Link href="/perfil" className={styles.headerLink}>
                        Sobre Mim
                    </Link>
                    <Link href="/contato" className={styles.headerLink}>
                        Contato
                    </Link>
                </div>
            </header>
            <div className={styles.backButtonDiv}>
            <Link href="/cards" className={styles.backButton}>
                ⬅️ Voltar para Arena
            </Link>
            </div>
            
            <div className={styles.cardDetail}>
                <div className={styles.cardHeader}>
                    <h1 className={styles.cardName}>{card.name}</h1>
                    <div className={styles.elixirCost}>{card.custo_elixir}</div>
                </div>
                
                <div className={styles.cardBody}>
                    <div className={styles.cardType}>{card.type}</div>
                    
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>ID:</span>
                            <span className={styles.statValue}>{card.id}</span>
                        </div>
                        
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>Tipo:</span>
                            <span className={styles.statValue}>{card.type}</span>
                        </div>
                        
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>Custo de Elixir:</span>
                            <span className={styles.statValue}>{card.custo_elixir}</span>
                        </div>
                    </div>

                    <div className={styles.descriptionSection}>
                        <h2 className={styles.descriptionTitle}>⚔️ Descrição da Carta</h2>
                        <p className={styles.description}>{card.description}</p>
                    </div>

                    {card.image_url && (
                        <div className={styles.imageSection}>
                            <img 
                                src={card.image_url} 
                                alt={card.name}
                                className={styles.cardImage}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
