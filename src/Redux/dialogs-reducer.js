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
    ]
}

let messageReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    messages: [...state.messages]
  };

  switch (action.type) {
    case SEND_MESSAGE: 
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };
    default: return state;
  }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
      type: SEND_MESSAGE,
      newMessageBody
    }
};
  

export default messageReducer;