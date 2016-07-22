import anarchism from '../dist/anarchism';
import test from 'ava';

Object.keys(anarchism).forEach((component) => {
    test(`Exported component ${component} is a function`, (t) => {
        t.is(typeof anarchism[component], 'function',`${component} is not a function`);
    });
});
