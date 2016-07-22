# Contributing

## Pull requests only

**DON'T** push to the master branch directly. Always use feature branches and let people discuss changes in pull requests.
Pull requests should only be merged after all discussions have been concluded and at least 1 reviewer has given their
**approval**.

## Guidelines

- **every change** needs a test
- keep the current code style

## New Components

Each new component should live in its own folder inside the `components`
directory. The directory and the component file should use a dash separated name.

e.g. `components/my-new-shiny-component/my-new-shiny-component.jsx`

Then it will be available as `import { MyNewShinyComponent } from 'anarchism'`

# Testing

Each component should come with a test suite to be included in its folder

e.g. `components/my-new-shiny-component/my-new-shiny-component.spec.js`

It will automatically be executed by npm test.

# Documentation

In each components folder there should be a `README.md` file to document the
component's usage
