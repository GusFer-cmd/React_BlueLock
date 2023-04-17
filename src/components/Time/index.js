import Jogador from '../Jogador';
import './Time.css';

const Time = (props) => {
    return(
        (props.jogadores.length > 0) && <section className="time" style={{backgroundColor : props.corSecundaria}}>
            <h3 style={{color: props.corPrimaria}}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador => <Jogador corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} posicao={jogador.posicao} numero={jogador.numero} imagem={jogador.imagem} />)}
            </div>
        </section>
    )
}

export default Time