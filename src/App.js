import './index.css';
import StyleText from './componentes/styleText/';
import ButtonAlert from './componentes/alertButton/'

const paragrafy = "'As montanhas da vida não existem apenas para que você chegue no topo, mas para que você aprenda o valor da escalada.'"

function App() {
  return (
    <>
      <h1>Parágrafo colorido e botões</h1>
      <StyleText title={paragrafy}/>
      
      <ButtonAlert label='Baixar arquivo' />
      <ButtonAlert />
    </>
  )

}

export default App;
