import React,{useCallback,useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import Button from '../examples/CallBackButtons'
const UseCallback = (props) => {

 const [count, setCount] = useState(0)

 const inc = useCallback((delta)=>{
    setCount(curr => curr + delta)
 },[setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <Button inc={inc} />
                <span className="text">{count}</span>
            </div>
        </div>
    )
}

export default UseCallback
