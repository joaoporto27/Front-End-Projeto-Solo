"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Link from 'next/link';

export default function page() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const [search, setSearch] = useState("");
    const [filteredCards, setFilteredCards] = useState([]);

    const handleSearch = () => {
        const searchTerm = search.trim().toLowerCase();
        if (searchTerm === "") {
            setFilteredCards(cards);
        } else {
            const filtered = cards.filter(card =>
                card.name.toLowerCase().includes(searchTerm)
            );
            setFilteredCards(filtered);
        }
    };

    const handleReset = () => {
        setSearch("");
        setFilteredCards(cards);
    };

    useEffect(() => {
        setFilteredCards(cards);
    }, [cards]);

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
            <h1 className={styles.title}> Cartas</h1>

            {loading && <p className={styles.loading}>Carregando cartas...</p>}

            <div className={styles.controls}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Digite o nome da carta"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch} className={styles.buttonSearch}>
                    Pesquisar
                </button>
                <button onClick={handleReset} className={styles.buttonReset}>
                    Resetar
                </button>
            </div>

            <div className={styles.grid}>
                {filteredCards.map((card) => (
                    <div key={card.id} className={styles.card} onClick={() => handleCardClick(card)}>

                        <div className={styles.elixirCost}>{card.custo_elixir}</div>
                        <div className={styles.cardImage}>
                            <img src={card.image_url ? card.image_url : "/img/imagemIndisponivel.jpg"} alt={card.name} className={styles.image} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
