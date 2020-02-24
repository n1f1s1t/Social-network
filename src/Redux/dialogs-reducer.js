const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: "1", name: "Vladimir" },
        { id: "2", name: "Ivan" },
        { id: "3", name: "Artem" },
        { id: "4", name: "Vadim" },
        { id: "5", name: "Andrey" },
    ],
    messages: [
        { id: "1", message: "hi" },
        { id: "2", message: "hello" },
        { id: "3", message: "Wow" },
        { id: "4", message: "!!!" },
        { id: "5", message: "Welcome!" },
    ],
    newMessageBody: " "
}

let messageReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    messages: [...state.messages]
  };

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE: 
      let body = stateCopy.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }]
      };
    default: return state;
  }
}

export const sendMessageCreator = () => {
    return {
      type: SEND_MESSAGE
    }
  };

export const updateNewMessageBodyCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body
    }
  };
  

export default messageReducer;