# web-component-linaria-starter-kit

## Get Started

1. git clone https://github.com/cloudshadow/web-component-linaria-starter-kit.git
2. npm install
3. npm run storybook

## Usage

```
import {ComponentName} from 'your-npm-package-name';

<ComponentName />

// or

<html>
  <head>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js" ></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" ></script>
    <script crossorigin src="https://unpkg.com/babel-standalone@6.26.0/babel.js" ></script>
    <!-- index.umd.js this file was generated after you run build command -->
    <script crossorigin src="./index.umd.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script src="./index.js" type="text/babel"></script>
  </body>
</html>


// ./index.js
// Ex: const {Button} = CloudCoreUI;
const {ComponentName} = NameConfigInRollup;
ReactDOM.render(<Button>test</Button>, document.getElementById('root'));
```

## Browser Support

Linaria use css variables please check the borwser support on https://caniuse.com/?search=CSS%20Variables
