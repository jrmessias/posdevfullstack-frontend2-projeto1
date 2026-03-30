import { useState } from "react";
import styles from './CadastrarLivros.module.css'
import LivroForm from "../components/LivroForm";
import LivroList from "../components/LivroList";

function CadastrarLivros(){

    const [mensagem, setMensagem] = useState('');
    const [livros, setLivros] = useState([]);

    function adicionarLivro(titulo, autor){
        setLivros([...livros, { titulo, autor, id: Date.now() }]);
        setMensagem('Livro cadastrado com sucesso!');
        setTimeout(() => setMensagem(''), 3000);
    }

    function removerLivro(id){
        setLivros(livros.filter(livro => livro.id !== id));
    }

    return (
        <div className={styles.container}>
            <h1>Cadastrar Livros</h1>

            {mensagem && <p className={styles.sucesso}>{mensagem}</p>}

            <LivroForm adicionarLivro={adicionarLivro} />
            <LivroList livros={livros} removerLivro={removerLivro} />
        </div>
    );
}

export default CadastrarLivros;
