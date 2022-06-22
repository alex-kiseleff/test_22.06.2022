import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

/* fonts */

@font-face {
	font-display: swap;
  	font-family: "FontForDesign";
  	font-style: normal;
  	font-weight: 400;
  	src: url("/public/fonts/20177.woff") format("woff"), url("/public/fonts/20177.woff2") format("woff2");
}

@font-face {
    font-display: swap;
    font-family: 'FontForMenu';
    font-style: normal;
    font-weight: 400;
    src: url('/public/fonts/20051.woff') format('woff'), url('/public/fonts/20051.woff2') format('woff2');
}

@font-face {
    font-display: swap;
    font-family: 'RobotoRegular';
    font-style: 'normal';
    font-weight: 400;
    src: url('/public/fonts/Roboto-Regular.woff2') format('woff2'), url('/public/fonts/Roboto-Regular.woff') format('woff');
}

@font-face {
	font-display: swap;
	font-family: 'RobotoMedium';
    font-style: 'normal';
    font-weight: 500;
    src: url('/public/fonts/Roboto-Medium.woff2') format('woff2'), url('/public/fonts/Roboto-Medium.woff') format('woff');
}

/* reset settings */

* {
    border: 0;
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

:focus,
:active {
    outline: none;
}

a:focus,
a:active {
    outline: none;
}

nav,
footer,
header,
aside {
    display: block;
}

html {
	overflow-y: scroll;
	
}

body {
	background: #bfbf00;
}

html,
body {
    font-size: 100%;
    font-size: 16px;
    height: 100%;
    line-height: 1;
    text-size-adjust: 100%;
    width: 100%;
}

input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}

button {
    cursor: pointer;
}

button::-moz-focus-inner {
    border: 0;
    padding: 0;
}

a,
a:visited {
    color: inherit;
    text-decoration: none;
}

a:hover {
    cursor: pointer;
    text-decoration: none;
}

ul li {
    list-style: none;
}

li {
    list-style-type: none;
}

img {
    vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit;
}
`;

export default GlobalStyles;
