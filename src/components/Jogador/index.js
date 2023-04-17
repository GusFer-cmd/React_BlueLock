import './Jogador.css';

const Jogador = ({nome, imagem, posicao, numero, corDeFundo}) => {
    return(
        <div className="jogador">
            <div className='cabecalho' style={{backgroundColor : corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4 style={{color : 'black'}}>{nome}</h4>
                <h5>{posicao}</h5>
                <h5>{numero}</h5>
            </div>
        </div>
    )
}

export default Jogador;