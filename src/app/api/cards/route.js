export async function GET() {
    // Dados de exemplo baseados na estrutura da tabela cards
    const cards = [
        {
            id: 1,
            name: "Esqueleto",
            type: "Tropa",
            custo_elixir: 1,
            description: "Soldados esqueletos que atacam em grupo. Baratos e rápidos, mas frágeis."
        },
        {
            id: 2,
            name: "Goblin",
            type: "Tropa",
            custo_elixir: 2,
            description: "Pequenos guerreiros verdes muito rápidos. Ótimos para ataques rápidos."
        },
        {
            id: 3,
            name: "Fireball",
            type: "Magia",
            custo_elixir: 4,
            description: "Causa dano em área a tropas e torres inimigas."
        },
        {
            id: 4,
            name: "Bárbaro",
            type: "Tropa",
            custo_elixir: 5,
            description: "Guerreiro forte com machado. Alto dano e pontos de vida."
        },
        {
            id: 5,
            name: "Tornado",
            type: "Magia",
            custo_elixir: 3,
            description: "Puxa todas as tropas para o centro e causa dano leve."
        },
        {
            id: 6,
            name: "Canhão",
            type: "Defesa",
            custo_elixir: 6,
            description: "Torre defensiva que causa alto dano em área."
        }
    ];

    return Response.json(cards);
}
