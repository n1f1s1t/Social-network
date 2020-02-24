import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", like: "15" },
                { id: 2, message: "It's my first post", like: "20" }
            ],
            newPostText: ""
        },

        messagesPage: {
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
            newMessageBody: ""
        },

        sidebar: {}
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("state changes");
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispacth(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state); 
    }
}




window.store = store;
export default store;