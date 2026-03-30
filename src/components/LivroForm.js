import { useState } from "react";
import styles from '../pages/CadastrarLivros.module.css'

function LivroForm({adicionarLivro}){

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        if(!titulo.trim() || !autor.trim()) return;

        adicionarLivro(titulo, autor);
        setTitulo('');
        setAutor('');
    }

    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                placeholder="Título do livro"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <input
                type="text"
                placeholder="Autor do livro"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default LivroForm;
