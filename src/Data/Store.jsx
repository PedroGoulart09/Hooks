import React,{ useState} from 'react'

const initialState = {
    number: 1234,
    text: 'Api Context + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = (props) => {

    const [state,setState] = useState(initialState)

    function set(key, value) {
        setState({
            ...state,
            [key]:value

        })
    }

    return (

        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => set('number', n),
            setText: n => set('text', n)

        }}>
            {props.children}
        </AppContext.Provider>

    )
}

export default Store