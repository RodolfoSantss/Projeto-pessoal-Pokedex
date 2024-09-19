let repeat = '1'

do {
    let menu = prompt('Escolha sua geração:\n1 Primeira geração.\n2 Segunda geração');

    if (menu === '1' || menu === '2') {
        let gen
        let generation
        let pokemonOptions = []

        switch (menu) {
            case '1':
                generation = 'primeira';
                pokemonOptions = [
                    { id: '1', name: 'Bulbasaur', type: 'Planta e Poison', description: 'é um Pokémon bonito nascido com uma grande semente solidamente fixado à sua volta, a semente cresce em tamanho como o Pokémon tem' },
                    { id: '2', name: 'Charmander', type: 'Fogo', description: 'é facilmente o mais gentil e bem comportado de sua linha evolutiva. Seus sentimentos e emoções podem ser lidos pela chama na ponta de sua cauda.' },
                    { id: '3', name: 'Squirtle', type: 'Água', description: 'O casco de Squirtle não é apenas usado para a proteção. A forma arredondada do casco e as ranhuras em sua superfície ajudam a minimizar a resistência na água, permitindo que este Pokémon nade em altas velocidades.' }
                ]
                break
            case '2':
                generation = 'segunda';
                pokemonOptions = [
                    { id: '1', name: 'Chikorita', type: 'Planta', description: 'é um pequeno Pokémon verde, com uma folha verde escura com um colar de gemas. Sua característica mais marcante é a grande folha no topo da sua cabeça, que é geralmente maior do que o resto do seu corpo.' },
                    { id: '2', name: 'Cyndaquil', type: 'Fogo', description: 'é um Pokémon da região de Johto. É tímido e enrola-se formando uma bola. Quando é surpreendido, as chamas nas suas costas ficam mais fortes. Quando é atacado, utiliza as suas chamas para se proteger.' },
                    { id: '3', name: 'Totodile', type: 'Água', description: 'Totodile têm uns hábitos de morder tudo que vê, também inclui os seus treinadores, Totodiles também tão sempre na brincadeira, sempre ficam a sorrir e dar gargalhadas. É também é bem energético e barulhento.' }
                ]
                break
            default:
                console.log('Escolha inválida. Tente novamente.')
                continue;
        }

        let validGen = false
        while (!validGen) {
            gen = prompt(`Digite 1, 2 ou 3 para buscar algum inicial da ${generation} geração.`)
            if (gen === '1' || gen === '2' || gen === '3') {
                validGen = true
            } else {
                console.log('Escolha inválida. Tente novamente.')
            }
        }

        console.log(`Você escolheu o número ${gen} para a ${generation} geração.`)

        switch (gen) {
            case '1':
            case '2':
            case '3':
                for (let i = 0; i < pokemonOptions.length; i++) {
                    if (pokemonOptions[i].id === gen) {
                        console.log(`${pokemonOptions[i].name}\n${pokemonOptions[i].type}\n${pokemonOptions[i].description}`);
                        break
                    }
                }
                break
            default:
                console.log('Erro ao mostrar informações do Pokémon. Tente novamente.');
                break
        }

    } else {
        console.log('Erro de sintaxe tente novamente. ;)')
    }

    repeat = prompt('Digite 1 caso queira repetir.')

} while (repeat === '1')