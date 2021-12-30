import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'



const UseState = (props) => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Inicial...')


    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercicio 1" />

            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button onClick={_ => setCount(count + 1)} className="btn">+1</button>
                    <button onClick={_ => setCount(count - 1)} className="btn">-1</button>
                </div>
            </div>

            <SectionTitle title="Exercicio 2" />


            <input type="text"
            onChange={e => setName(e.target.value)}
                className="input"
                value={name}>
            </input>
            <p className="text">{name}</p>

        </div>
    )
}

export default UseState
