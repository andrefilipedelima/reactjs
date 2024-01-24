import { useParams } from 'react-router-dom';

function Produto() {
    const { id } = useParams();

    return(
        <div>
            <h2>Detalhe do Produto</h2><br />
            <span>Meu Produto é { id }</span>
        </div>
    );
}

export default Produto;