import anarchism from '../dist/anarchism';
import test from 'ava';
import React from 'react'

Object.keys(anarchism).forEach((component) => {
    test('Exported components are functions', t => {
        t.is(typeof anarchism[component], 'function',`${component} is not a function`);
    });
});
