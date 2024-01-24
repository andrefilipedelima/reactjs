import { Link } from  'react-router-dom';

function Home() {
    return (
      <div>
        <h1>Bem-vindo a página Home</h1> 
        <span>Sujeito Programador</span><br /><br />

        <hr />

        <Link to="/produto/12345">Acessar Produto 12345</Link>

      </div>
    );
  }
  
  export default Home;
  