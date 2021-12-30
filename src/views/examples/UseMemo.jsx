import React, { useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function sum(n1, n2) {
    return n1 + n2
}

const UseMemo = (props) => {

    const [n1, setNum1] = useState(0)
    const [n2, setNum2] = useState(0)
    const [n3, setNum3] = useState(0)

    const result = useMemo(()=>sum(n1, n2),[n1,n2])

  
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="Exercicio 1" />
            <div className="center">

                <input type="number" className="input" value={n1} onChange={(e) => setNum1(parseInt(e.target.value))}></input>

                <input type="number" className="input" value={n2} onChange={(e) => setNum2(parseInt(e.target.value))}></input>

                <input type="number" className="input" value={n3} onChange={(e) => setNum3(parseInt(e.target.value))}></input>

                <span className="text">{result}</span>

            </div>
        </div>
    )
}

export default UseMemo
