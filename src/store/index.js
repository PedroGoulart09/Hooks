export const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export function reducer(state, action) {
    switch (action.type) {
        case 'Number2Add':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        case 'intNumber':
            return { ...state, number: state.number + action.payload }
        case 'addNumber':
            return { ...state, number: state.number + action.payload }
        case 'dividir':
            return { ...state, number: state.number / 25 }
        case 'Multiplicar Valor':
            return { ...state, number: parseInt(state.number) * 7 }
        default:
            return state
    }
}