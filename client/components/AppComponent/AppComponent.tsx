import React, { FC } from 'react';
import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/theme';
import FirstHeaderComponent from '../FirstHeaderComponent/FirstHeaderComponent';
import SecondHeaderComponent from '../SecondHeaderComponent/SecondHeaderComponent';
import AboutComponent from '../../pages/AboutComponent/AboutComponent';
import ContactsComponent from '../../pages/ContactsComponent/ContactsComponent';
import NewsComponent from '../../pages/NewsComponent/NewsComponent';
import ToPayComponent from '../../pages/ToPayComponent/ToPayComponent';
import MainComponent from '../../pages/MainComponent/MainComponent';
import Page404Component from '../../pages/Page404Component/Page404Component';
import FooterComponent from '../FooterComponent/FooterComponent';
import { Container } from './AppComponent.styles';
import NoServiceComponent from '../../pages/NoServiceComponent/NoServiceComponent';
import PayForMobileComponent from '../../pages/PayForMobileComponent/PayForMobileComponent';

/**
 * @component AppComponent -  подключение файла [theme.ts] с переменными для [styled-components],
 *  маршрутизация.
 * @returns {ReactElement}
 */
const AppComponent: FC = (): ReactElement => {
    const WithHeader = (component: ReactElement): ReactElement => {
        return (
            <>
                <FirstHeaderComponent />
                <SecondHeaderComponent />
                {component}
                <FooterComponent />
            </>
        );
    };

    return (
        <ThemeProvider theme={Theme}>
            <Container>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/about'} element={WithHeader(<AboutComponent />)} />
                        <Route path={'/news'} element={WithHeader(<NewsComponent />)} />
                        <Route path={'/contacts'} element={WithHeader(<ContactsComponent />)} />
                        <Route path={'/topay'} element={WithHeader(<ToPayComponent />)} />
                        <Route
                            path={'/pay_for_mobile'}
                            element={WithHeader(<PayForMobileComponent />)}
                        />
                        <Route path={'/no_service'} element={WithHeader(<NoServiceComponent />)} />
                        <Route path={'/'} element={WithHeader(<MainComponent />)} />
                        <Route path={'*'} element={<Page404Component />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </ThemeProvider>
    );
};

export default AppComponent;
