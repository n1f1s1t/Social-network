import profileReducer, { addPostActionCreator } from "./profile-reducer";

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    let action = addPostActionCreator("1111");
    let state = {
        posts: [
          { id: 1, message: "Hi, how are you?", like: "15" },
          { id: 2, message: "It's my first post", like: "20" }
        ]
    };
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(5);
});


