import { useState } from 'react'
// import Hashtaurante from './assets/hashtaurante.webp'
import './App.css'
import { Navegacao } from './Navegacao'
import { pratosPrincipais, sobremesas, bebidas} from './cardapio'
import { ItemCardapio } from './ItemCardapio'
import { Rodape } from './Rodape'

export function App(){
  const imagemFundo2 = 'https://ttad.com.br/wp-content/uploads/2018/12/tati-tavares-alex-dalcin-reforma-restaurante-1-1400x450.jpg';
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0); // 0 é o valor inicial da variavel de estado
  return <> 
            <h1>Restaurante do Lau</h1>
            <img src={imagemFundo2} alt="" className='capa' />
            <h2>Nosso cardápio</h2>
            <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
            <div className='menu'>
                {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem}/>)}
            </div>
            <Rodape/>
         </>
         
}