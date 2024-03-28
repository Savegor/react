const UPDATE_NEW_POST_BODY = 'UPDATE_NEW_POST_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: "Nikita"},
        {id: 2, name: "Egor"},
        {id: 3, name: "Robert"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Good afternoon"},
        {id: 3, message: "Good morning"}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export default dialogsReducer