import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState,reducer} from '../../store'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />


            <div className="center">

                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Usuario não Encontrado</span>

                }

                <span className="text">{state.number}</span>
                <button className="btn"
                    onClick={() => dispatch({ type: 'Number2Add' })}>+2
                </button>

                <button className="btn"
                    onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>Loguin
                </button>

                <button className="btn"
                    onClick={() => dispatch({ type: 'dividir' })}>/25
                </button>

                <button className="btn"
                    onClick={() => dispatch({ type: 'Multiplicar Valor' })}>*7
                </button>
                
                <button className="btn"
                    onClick={() => dispatch({ type: 'intNumber', payload: -9 })}>-9
                </button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'addNumber', payload: +11 })}>+11
                </button>
            </div>

            <div>
            </div>
        </div>
    )
}

export default UseReducer
