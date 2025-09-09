"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function page() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchCards = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('/api/cards');
            
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
        <div>
            <h1>Cards</h1>

            {loading && <p>Carregando...</p>}

            <div>
                {cards.map((card) => (
                    <div key={card.id} onClick={() => handleCardClick(card)}>
                        <h3>{card.name}</h3>
                        <p>Tipo: {card.type}</p>
                        <p>Custo de Elixir: {card.custo_elixir}</p>
                        <div>
                            <h4>Descrição:</h4>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
