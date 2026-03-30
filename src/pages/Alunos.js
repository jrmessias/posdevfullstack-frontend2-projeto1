import { useEffect, useState } from "react";
import styles from './Alunos.module.css'

function Alunos(){    

    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busca, setBusca] = useState('');

    useEffect( ()=> {

        setTimeout( () => {
            fetch("http://localhost:5001/alunos")
                .then((resp) => resp.json())
                .then((data) => {
                    setAlunos(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }, 2000);
    }, []);

    if(loading){
        return <p className={styles.loading}>Carregando alunos...</p>
    }

    const alunosFiltrados = alunos.filter(aluno =>
        aluno.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return(
        <div className={styles.container}>
            <h1>Lista de Alunos</h1>

            <input
                type="text"
                placeholder="Buscar aluno pelo nome..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className={styles.inputBusca}
            />

            {alunos.length === 0 ? (
                <p className={styles.vazio}>Nenhum aluno encontrado.</p>
            ) : alunosFiltrados.length === 0 ? (
                <p className={styles.vazio}>Nenhum aluno encontrado.</p>
            ) : (
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunosFiltrados.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
    );
}

export default Alunos;
