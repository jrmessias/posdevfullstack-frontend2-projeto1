import { useState, useEffect } from "react";
import styles from './CadastrarLivros.module.css'
import LivroForm from "../components/LivroForm";
import LivroList from "../components/LivroList";

function CadastrarLivros(){

    const [mensagem, setMensagem] = useState('');
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);

    function adicionarLivro(titulo, autor){
        // use functional update to avoid stale closures when state changes
        setLivros(prev => [...prev, { titulo, autor, id: Date.now() }]);
        setMensagem('Livro cadastrado com sucesso!');
        setTimeout(() => setMensagem(''), 3000);
    }

    useEffect(()=>{
        // fetch livros from API (same behavior as Biblioteca page)
        setTimeout(()=>{
            fetch(`${process.env.REACT_APP_API_URL}/livros`)
            .then(resp => resp.json())
            .then(data => {
                setLivros(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
        }, 2000);
    }, []);

    function removerLivro(id){
        setLivros(livros.filter(livro => livro.id !== id));
    }

    return (
        <div className={styles.container}>
            <h1>Cadastrar Livros</h1>

            {mensagem && <p className={styles.sucesso}>{mensagem}</p>}

            <LivroForm adicionarLivro={adicionarLivro} />
            {loading ? (
                <p>Carregando livros...</p>
            ) : (
                <LivroList livros={livros} removerLivro={removerLivro} />
            )}
        </div>
    );
}

export default CadastrarLivros;
