import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {useCounter} from '../../hooks/useCounter'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [count,inc,dec] = useCounter()

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercicio 1" />

            <div className="center">
                <span className="text">{count}</span>
            </div>
            <button className="btn" onClick={()=> inc()}>+1</button>
            <button className="btn" onClick={()=> dec()}>-1</button>
        </div>
    )
}

export default UseRef
