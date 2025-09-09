"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CardDetail({ params }) {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { id } = params;

    const fetchCard = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data } = await axios.get(`/api/cards/${id}`);
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

    const handleBackClick = () => {
        router.push('/cards');
    };

    if (loading) {
        return (
            <div>
                <p>Carregando...</p>
            </div>
        );
    }

    if (error || !card) {
        return (
            <div>
                <p>{error || 'Card não encontrado'}</p>
                <button onClick={handleBackClick}>
                    Voltar para Cards
                </button>
            </div>
        );
    }

    return (
        <div>
            <button onClick={handleBackClick}>
                Voltar para Cards
            </button>
            
            <div>
                <h1>{card.name}</h1>
                
                <div>
                    <div>
                        <span>ID:</span>
                        <span>{card.id}</span>
                    </div>
                    
                    <div>
                        <span>Tipo:</span>
                        <span>{card.type}</span>
                    </div>
                    
                    <div>
                        <span>Custo de Elixir:</span>
                        <span>{card.custo_elixir}</span>
                    </div>
                </div>

                <div>
                    <h2>Descrição</h2>
                    <p>{card.description}</p>
                </div>

                {card.image_url && (
                    <div>
                        <img 
                            src={card.image_url} 
                            alt={card.name}
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
