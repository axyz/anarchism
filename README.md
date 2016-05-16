# Anarchism React components with NO STATE.

Anarchism is a curated collection of [React](https://facebook.github.io/react/)
components intended to be used on unidirectional data flow architectures. The
most well known is probably [redux](http://redux.js.org/) (but also other
[flux](http://facebook.github.io/flux/) like implementations); however any
approach that may benefit from stateless components may be used as well (e.g.
FRP libraries, GraphQL + [Relay](https://facebook.github.io/relay/), etc..).

The library contains two kind of components:
- pure components they are stateless components with no side-effects. They are
responsible to render the visible part of your application. They are pure
functions depending on props and context.
- impure components they are wrapper or decorator components that are
responsible to deal with all the behaviors that may not be achieved without
state or some kind of side effects (e.g. DOM stuff). They are allowed to have
some state or side effects, but are not allowed to render anything visible, just
wrap or decorate pure components.

Presentational components should use the minimum set of css properties to define
their behavior and/or structure, anything else should remain unstyled.

A "future first" approach is preferred: use newest css and js features relying
on transpilers and polyfills to maximize compatibility and eventually apply
specific hacks only when polyfills are failing.

All the components will also play nicely when rendered on the server (isomorphic
applications), especially impure components that are dealing with the DOM will
have fallback solutions when the `window` object is not available.

## How to use it To use anarchism components you just need to install anarchism
as a dependency in your project: ``` $ npm install --save anarchism ```

then simply import the components you want to use: ```javascript import {
Intreact, Zlide } from 'anarchism' ```

and use them as normal React components according to the respective
documentations.

## What it is not This project do not want to provide ready to use components
with a common design. You will not find the typical front-end elements you can
expect from common frameworks such as [bootstrap](http://getbootstrap.com/),
[foundation](http://foundation.zurb.com/),
[material-ui](http://www.material-ui.com/), etc...

While those libraries are great for prototyping, you will always end up wanting
to deeply change their style and behavior on real world projects. Given their
complex nature, very often the effort to adapt them to our own necessities is
higher than writing from scratch a bunch of components.

Also, as far as I now, none of the well known front-end libraries are optimized
to be used with unidirectional data flows and very often they rely heavily on
state and DOM events and manipulations.

The only stateless react components library I've found so far is
[Rebass](http://jxnblk.com/rebass/), a really nice project that should work very
well for prototyping flux based applications. However it comes with its own
style that you can eventually configure (on some of its aspects) using context
properties or overwrite when needed. In a real project you will probably end up
anyway spending more time overriding stuff than actually composing your
application.

## Why we need anarchism This is an ongoing project where I want to collect
components that respect the above rules. Ideally every component should be as
much minimalistic and abstract as possible and you should not feel the needs to
change it or to not being using all of its features.

Sometimes we end up implementing again and again the same behavioral pattern for
lot of front-end components. A very basic example may be show different contents
on a div depending on props, or more complex things like a full-blown stateless
slider with no interface or any other styling than the very strictly needed for
layout and animation.

This library want to abstract these patterns and its expected usage on real
world project would be to create complete and styled front-end components that
use anarchism components as dependencies to implement their behavior.

## Want to contribute? There are at least 4 ways to contribute to the project:
- Adding very simple components that abstract some basic pattern directly inside
this repository
- Open an issue to propose an external project (available on npm) that may fit
inside the library
- bug fixing, testing and cross-browser issues solving are always welcome
- contribute to the example folder with interesting components created using
anarchism

## List of pure components
- [zlide](https://github.com/zalando/react-zlide) - Lightweight and stateless
  slider component for React.js
- [callout](https://github.com/zalando/react-callout) - Lightweight and
  stateless callout component for React.js
- [zoom](https://github.com/zalando/react-zoom) - Lightweight and stateless
  modal component for React.js based on flexbox

## List of impure components
- [intreact](https://github.com/zalando/intreact) - Handling interactions with
  dumb react components.
- [rezponsive](https://github.com/zalando/rezponsive) - React decorator for
  responsive behaviors.
