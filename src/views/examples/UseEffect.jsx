import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function resultadoFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return resultadoFatorial(n - 1) * n
}


const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [ParEimpar, setParEimpar] = useState(0)

    useEffect(function () {
        setFatorial(resultadoFatorial(number))
    }, [number])

    useEffect(function () {
        setParEimpar(number %2 === 0 ? 'Par' : 'Impar')
    },[number])

    return (
        <div>
            <div className="UseEffect">
                <PageTitle
                    title="Hook UseEffect"
                    subtitle="Permite executar efeitos colaterais em componentes funcionais!"
                />
            </div>
            <SectionTitle title="Exercicio 1" />

            <div>
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial === -1 ? 'Not exists factorial this number !!' : fatorial}</span>
            </div>

            <input type="number"
                className="input"
                onChange={e => setNumber(e.target.value)}
                value={number}
            ></input>

            <SectionTitle title="Exercicio 2" />

            <div>
                <div>
                    <span className="text">Par Ou Impar: </span>
                    <span className="text red">{ParEimpar}</span>
                </div>
            </div>
        </div>

    )
}

export default UseEffect
