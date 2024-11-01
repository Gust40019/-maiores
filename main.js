function criarCartao(pergunta, resposta){
       let conteudo = document.getElementById("conteudo")   
       let cartao = document.createElement(article)
        cartao.classList = 'cartao'

        cartao.innerHTML=
        <div class="cartao--conteudo"
        <div class="cartao--pergunta"><p>Time com mais títulos no brasileirão</p> </div>
        <div class="cartao--resposta"><p> Palmeiras 12 títulos </p></div>
       </div>

        conteudo.
conteudo.appChild(cartao)
}
criarCartao(1,2)
criarCartao("peguntaX","respostaX")