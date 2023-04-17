import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [posicao, setPosicao] = useState('')
    const [numero, setNumero] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoJogadorCadastrado({
            nome,
            posicao,
            numero,
            imagem,
            time    
        })
        setNome('')
        setPosicao('')
        setImagem('')
        setTime('')
        setNumero('')
    }
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador.</h2>
                <CampoTexto
                    label='Nome'
                    placeholder='Digite seu nome...'
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    label='Posição'
                    placeholder='Digite sua posição...'
                    obrigatorio={true}
                    valor={posicao}
                    aoAlterado={valor => setPosicao(valor)}
                />

                <CampoTexto
                    label='Numero'
                    placeholder='Digite seu número...'
                    obrigatorio={true}
                    valor={numero}
                    aoAlterado={valor => setNumero(valor)}
                />

                <CampoTexto
                    label='Imagem'
                    placeholder='Informe o endereço da imagem...'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    label = 'Times'
                    itens={props.times}
                    obrigatorio={true}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}    
                />
                
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;