import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Footer from "./components/Footer";


function App() {

  const times = [
    {
      nome: 'Bastard München',
      corPrimaria: '#FFFF33',
      corSecundaria: '#CC0000',
    },
    {
      nome: 'Paris X Gen',
      corPrimaria: '#DA291C',
      corSecundaria: '#004170'
    },
    {
      nome: 'Blue Lock Eleven',
      corPrimaria: '#000000',
      corSecundaria: '#0F4C81'
    },
    {
      nome: 'Ubers',
      corPrimaria: '#000000',
      corSecundaria: '#808080'
    },
    {
      nome: 'Manshine City',
      corPrimaria: '#1C2C5B',
      corSecundaria: '#6CABDD'
    },
    {
      nome: 'Team Z',
      corPrimaria: '#F3D459',
      corSecundaria: '#7A263A'
    },
    {
      nome: 'FC Barcha',
      corPrimaria: '#004D98',
      corSecundaria: '#A50044'
    }
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)} />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
      />)}

      <Footer/>
    </div>
  );
}

export default App;
