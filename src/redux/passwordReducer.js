import { CREATE_RECORD, DELETE_RECORD,  UPDATE_RECORD } from "./types"

const initialState = {

    passwords: [
        {
            "id": 1,
            "appointment": "lorem.1.ipsum@gmail.com",
            "password": "d1ol#r-$it-@met"
        },
        {
            "id": 2,
            "appointment": "lorem.2.ipsum@gmail.com",
            "password": "d2ol#r-$it-@met"
        },
        {
            "id": 3,
            "appointment": "lorem.3.ipsum@gmail.com",
            "password": "d3ol#r-$it-@met"
        },
        {
            "id": 4,
            "appointment": "lorem.4.ipsum@gmail.com",
            "password": "d4ol#r-$it-@met"
        }
    ]

}

const passwordReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_RECORD:
            return {...state, passwords: state.passwords.concat(action.payload)}

        case UPDATE_RECORD:
            return {...state, passwords: state.passwords.map(record => record.id === action.payload.id ? action.payload : record )}

        case DELETE_RECORD:
            return {...state, passwords: state.passwords.filter(record=>record.id !== action.payload)}

        default:
            return state
    }
}

export default passwordReducer