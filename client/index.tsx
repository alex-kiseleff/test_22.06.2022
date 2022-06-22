import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import AppComponent from './components/AppComponent/AppComponent';
import store from './store/store';
import GlobalStyles from './styles/global';

/**
 * @component - корневой компонент приложения, с подключением
 * хранилища [Redux toolkit], файла с глобальными стилями и шрифтами
 * и [AppComponent].
 */
const container = document.querySelector('#root') as HTMLElement;
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <GlobalStyles />
        <AppComponent />
    </Provider>
);
