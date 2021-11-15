const Search = () => {
    return (
        <>
            <h1 className="text-center">Pesquisa sobre SEO no React</h1>

            <div className="container">
                <p>React foi desenvolvido para criar UI’s interativas que são declarativas, modulares e multiplataformas. Hoje, é um dos mais populares — se não o mais popular — Framework de JavaScript para escrever aplicações front-end performáticas. Desenvolvido inicialmente para criar SPAs (Aplicações de uma página), React é usado agora para fazer websites completos e até mesmo aplicações mobile.</p>
                <p>Se você está começando ou tem uma vasta experiência com desenvolvimento web e for para o React, irá perceber uma incrível quantidade do seu código HTML e CSS se transformando em JavaScript. Isso se dá pois o React não recomenda criar ou atualizar diretamente os elementos de UI, mas invés disso descrever o “estado” deles. React vai então atualizar a DOM para corresponder com esse estado da maneira mais eficiente possível.
                    Como resultado, todas as mudanças na UI ou na DOM devem ser feitas pela engine do React. Apesar de conveniente para os desenvolvedores, isso pode significar carregamentos mais longos para os usuários e mais trabalho para os motores de busca achar e indexar o conteúdo.</p>
                <p>Por que otimizar o React para SEO é um desafio?<br />

                    Nessa breve visão geral do Googlebot, rastreamento e indexação apenas arranha a superfície. Ainda assim, os engenheiros de software devem identificar os problemas potenciais enfrentados pelos mecanismos de pesquisa ao tentar rastrear e indexar as páginas do React. Agora podemos dar uma olhada mais de perto no que torna o React SEO desafiador e o que os desenvolvedores podem fazer para abordar e superar alguns desses desafios.</p>

                <p>-Conteúdo vazio de primeira passagem.<br />

                    Sabemos que os aplicativos React dependem muito do JavaScript e costumam ter problemas com os mecanismos de pesquisa. Isso ocorre porque o React emprega um Modelo de shell para aplicativos por padrão. O HTML inicial não contém nenhum conteúdo significativo, e um usuário ou um bot deve executar JavaScript para ver o conteúdo real da página.<br />

                    Essa abordagem significa que o Googlebot detecta uma página vazia durante a primeira passagem. O conteúdo é visto pelo Google apenas quando a página é renderizada. Isso atrasará a indexação de conteúdo ao lidar com milhares de páginas.</p>

                <p>-Tempo de carregamento e experiência do usuário.<br />

                    Buscar, analisar e executar o JavaScript leva tempo. Além disso, o JavaScript pode precisar fazer chamadas de rede para buscar o conteúdo, e o usuário pode precisar esperar um pouco antes de visualizar as informações solicitadas.

                    O Google estabeleceu um conjunto de Indicadores vitais da web relacionados à experiência do usuário, usados ​​em seus critérios de classificação. Um tempo de carregamento mais longo pode afetar a pontuação de experiência do usuário, fazendo com que o Google classifique um site mais baixo.</p>
                <p>Alguns outros fatores que você precisa considerar ao construir sites com muito conteúdo incluem a necessidade de um bom sistema de gerenciamento de conteúdo (CMS) para seus autores e a capacidade de gerar / modificar facilmente visualizações de mídia social e otimizar imagens para tamanhos variados de tela.<br />
                    Isso é apenas uma breve explanação sobre SEO no React. mais informações pode ser consultadas no site abaixo:<br />
                    <a href="https://mindconsulting.com.br/2021/08/melhores-praticas-e-estrategias-de-seo-para-react/" >https://mindconsulting.com.br/2021/08/melhores-praticas-e-estrategias-de-seo-para-react/</a></p>
            </div>

        </>
    )
}

export { Search }