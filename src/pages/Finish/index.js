import { useEffect, useState } from "react";
import { formataValor } from "../../components/Main";

const Finish = () => {

    function formatar(valor) {
        valor = parseFloat(valor);
        var total = valor.toLocaleString('pt-br', { minimumFractionDigits: 2 });
        total = String(total);
        total = total.replace(".", "");
        total = total.replace(",", ".");


        return total;
    }

    const [produtos, getProdutos] = useState(null);
    const [total, getTotal] = useState(null);

    useEffect(() => {
        var carrinho = localStorage.getItem('carrinho');
        var produtos = null;
        if (typeof carrinho == 'string') {
            produtos = JSON.parse(carrinho);
        }

        if (produtos) getProdutos(produtos);
    }, []);

    function atualizaTotal(carrinho) {
        var total = 0;
        carrinho.forEach(e => {
            total = total + e.total;
        })

        getTotal(total);
    }
    useEffect(() => {
        var carrinhoLocal = localStorage.getItem('carrinho');
        var carrinho = null;

        if (typeof carrinhoLocal == 'string') {
            carrinho = JSON.parse(carrinhoLocal);
        }
        if (carrinho) {
            getProdutos(carrinho);
            atualizaTotal(carrinho);
        }
    }, [])



    return (
        <>
            <h1 className="text-center">Finalizar Compra.</h1>

            <form name="pagseguro" method="post" className="container"
                action="https://pagseguro.uol.com.br/v2/checkout/payment.html">
                <h4>Seus dados:</h4>
                <input type="hidden" name="receiverEmail" value="suporte@lojamodelo.com.br" />

                <input type="hidden" name="currency" value="BRL" />

                <input type="text" name="senderName" className="form-control" placeholder="Digite seu nome completo" required />

                <input type="email" name="senderEmail" className="form-control" placeholder="Digite seu e-mail" required />

                {
                    produtos ? produtos.map((item, index) => (
                        <div>
                            <input type="hidden" value={item.id} name={'itemId' + (index + 1)} />
                            <input type="hidden" value={item.produto} name={'itemDescription' + (index + 1)} />
                            <input type="hidden" value={formatar(item.valor)} name={'itemAmount' + (index + 1)} />
                            <input type="hidden" value={item.quantidade} name={'itemQuantity' + (index + 1)} />
                        </div>
                    )
                    )
                        :
                        <p>Não existem itens</p>
                }
                <br />
                <h4>Itens do pedido:</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Valor Unit.</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos ?
                            produtos.map((item, index) => (
                                <tr>
                                    <td>{item.produto}</td>
                                    <td>{formataValor(item.valor)}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{formataValor(item.total)}</td>

                                </tr>
                            ))

                            :
                            <tr>
                                <td colSpan="5">
                                    <p className="alert alert-danger text-center">
                                        Carrinho Vazio.
                                    </p>
                                </td>
                            </tr>

                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">VALOR TOTAL</td>
                            <td>{formataValor(total)}</td>

                        </tr>
                    </tfoot>

                </table>

                <button type="submit" className="btn btn-success float-start">
                    Pagamento
                </button>

            </form>
            <div className="clearfix"></div>
        </>
    )
}

export { Finish }