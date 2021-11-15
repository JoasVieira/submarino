import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { formataValor } from "../../components/Main";

const Category = () => {

    const { id } = useParams();
    const [produtos, getProdutos] = useState([]);

    useEffect(() => {
        axios.get('http://react.professorburnes.com.br/categoria/' + id)
            .then((response) => {
                getProdutos(response.data)
            })
    }, [id])

    return (
        <>
            <h1 className="text-center">Categorias:</h1>
            <div className="container">
                <div className="row">
                    {produtos ?
                        produtos.map((item, index) => (
                            <div className="col-12 col-md-4">
                                <div className="card text-center">
                                    <img src={item.imagemp} alt={item.produto} className="w-100"></img>
                                    <h2>{item.produto}</h2>

                                    {item.promo != 0 ?
                                        <div>
                                            De: <span className="corte text-center">{formataValor(item.valor)}</span>
                                            <p className="valor text-center">Por: {formataValor(item.promo)}</p>
                                        </div>
                                        :
                                        <p className="valor text-center"> {formataValor(item.valor)}</p>
                                    }

                                    <Link to={'/produto/' + item.id} className="btn btn-success w-100">
                                        Detalhes
                                    </Link>


                                </div>
                            </div>

                        ))
                        :
                        <p className="alert alert-danger text-center">
                            Não existem produtos.
                        </p>

                    }
                </div>
            </div>
        </>
    )
}

export { Category }