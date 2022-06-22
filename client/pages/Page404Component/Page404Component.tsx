import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Title, Container } from './Page404Component.styles';

/**
 * @component Page404Component - рендерит страницу с ошибкой адреса.
 * @returns {ReactElement}
 */
const Page404Component: FC = (): ReactElement => {
    return (
        <Container>
            <Title>{'Страница не найдена, код ошибки 404.'}</Title>
            <NavLink to={'/'}>{'Хочу на главную страницу'}</NavLink>
        </Container>
    );
};

export default Page404Component;
