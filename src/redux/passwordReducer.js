import { CREATE_RECORD, DELETE_RECORD,  UPDATE_RECORD } from "./types"

const initialState = {

    passwords: [
        {
            "id": 1,
            "key": 1,
            "appointment": "lorem.1.ipsum@gmail.com",
            "password": "d1ol#r-$it-@met"
        },
        {
            "id": 2,
            "key": 2,
            "appointment": "lorem.2.ipsum@gmail.com",
            "password": "d2ol#r-$it-@met"
        },
        {
            "id": 3,
            "key": 4,
            "appointment": "lorem.3.ipsum@gmail.com",
            "password": "d3ol#r-$it-@met"
        },
        {
            "id": 4,
            "key": 4,
            "appointment": "lorem.4.ipsum@gmail.com",
            "password": "d4ol#r-$it-@met"
        }
    ]

}

const passwordReducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_RECORD:
            return state // { ...state, action.payload,  }

        case UPDATE_RECORD:
            console.log('updated: ',action.payload)
            console.log(`state:`, state)
            return {...state, passwords: state.passwords.map(record => record.id === action.payload.id ? action.payload : record )}

        case DELETE_RECORD:
            // console.log('deleting: ',action.payload)
            return {...state, passwords: state.passwords.filter(record=>record.id !== action.payload)}

            // console.log(`typeof state.passwords:`, typeof(state.passwords), "\ncontents of state.passwords:", state.passwords, "\nJSON of state:", JSON.stringify(state.passwords.filter(el=>el.id >2) ))
            return state

        default:
            console.log("worked here")
            return state
    }
}

export default passwordReducer