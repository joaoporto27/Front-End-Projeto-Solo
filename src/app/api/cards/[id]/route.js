export async function GET(request, { params }) {
    const { id } = params;
    
    // Dados de exemplo - mesmo array da API principal
    const cards = [
        {
            id: 1,
            name: "Esqueleto",
            type: "Tropa",
            custo_elixir: 1,
            description: "Soldados esqueletos que atacam em grupo. Baratos e rápidos, mas frágeis.",
            image_url: "https://api-assets.clashroyale.com/cards/300/tS1x9w45_2g672i33Pj2l_3a_p1V_4K81I6i_aA.png"
        },
        {
            id: 2,
            name: "Goblin",
            type: "Tropa",
            custo_elixir: 2,
            description: "Pequenos guerreiros verdes muito rápidos. Ótimos para ataques rápidos.",
            image_url: "https://api-assets.clashroyale.com/cards/300/X_DQUye_OaS3QN6VC9CPw05Fit7wvSm3XegjUT9-g7Q.png"
        },
        {
            id: 3,
            name: "Fireball",
            type: "Magia",
            custo_elixir: 4,
            description: "Causa dano em área a tropas e torres inimigas.",
            image_url: "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xkFb5lXXiGpf6TCKz_bPYF2AA.png"
        },
        {
            id: 4,
            name: "Bárbaro",
            type: "Tropa",
            custo_elixir: 5,
            description: "Guerreiro forte com machado. Alto dano e pontos de vida.",
            image_url: "https://api-assets.clashroyale.com/cards/300/TvBe5G2-2S+M818BmgXJtDxGCjmr_f5a7pB39yO2-sQ.png"
        },
        {
            id: 5,
            name: "Tornado",
            type: "Magia",
            custo_elixir: 3,
            description: "Puxa todas as tropas para o centro e causa dano leve.",
            image_url: "https://api-assets.clashroyale.com/cards/300/QJB-QK1QJHdw4hjpAwk4p_MC_W_2l_1k1ABwSmm2p10.png"
        },
        {
            id: 6,
            name: "Canhão",
            type: "Defesa",
            custo_elixir: 6,
            description: "Torre defensiva que causa alto dano em área.",
            image_url: "https://api-assets.clashroyale.com/cards/300/n3Wso-2_weA_d1pasOT-2_0k_oKGU_XzNlgrhI4H_d4.png"
        }
    ];

    // Buscar o card pelo ID
    const card = cards.find(c => c.id === parseInt(id));
    
    if (!card) {
        return Response.json(
            { error: 'Card não encontrado' },
            { status: 404 }
        );
    }

    return Response.json(card);
}
