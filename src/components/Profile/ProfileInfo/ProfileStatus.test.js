import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

test("ProfileStatus component", () => {
    test("span should be displayed", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />)
        const instatce = component.getInstance();
        let span = instatce.findByType("span");
        expect(span.length).toBe(1)
    })
})