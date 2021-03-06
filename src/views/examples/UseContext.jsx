import React,{useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../Data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'

const UseContext = (props) => {

   const context = useContext(DataContext)

   function addNumber(n){
       context.setState({
           ...context.state,
           number: context.state.number + n
       })

   }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            
            <div className="center">
                  <span className="text">{context.state.text}</span>
                  <span className="text">{context.state.number}</span>
            </div>
            <button className="btn" onClick={()=> addNumber(-1)}>-1</button>
            <button className="btn" onClick={()=> addNumber(1)}>+1</button>
            <SectionTitle title="Exercicio 2" />
        </div>

    )
}

export default UseContext
