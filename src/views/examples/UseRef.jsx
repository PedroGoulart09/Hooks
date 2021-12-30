import React, { useState, useEffect, useRef } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';


const inputs = (s1,s2) => {
  return [...s1].map((event,index) => `${event}${s2[index] || ''}`
  ).join('')
}

const UseRef = (props) => {

    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);


    useEffect(function () {
        count.current++
        myInput2.current.focus();
    }, [value])
    
    useEffect(function () {
        count.current++
        myInput1.current.focus();
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercicio 1" />
            <div>
                <span className="text">Valor: </span>
                <span className="text">{inputs(value,value2)}[</span>
                <span className="text red">{count.current}</span>
                <span className="text">]</span>
            </div>
            <input type="text"
                ref={myInput1}
                className="input"
                onChange={e => setValue(e.target.value)}
                value={value}
                ></input>
            <SectionTitle title="Exercicio 1" />
            <div>
            <input type="text"
            ref={myInput2}
                className="input"
                onChange={e => setValue2(e.target.value)}
                value={value2}
            ></input>

            </div>
        </div>
    )
}

export default UseRef
