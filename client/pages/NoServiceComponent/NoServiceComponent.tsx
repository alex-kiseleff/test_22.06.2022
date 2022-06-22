import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Title, Container } from './NoServiceComponent.styles';

/**
 * @component NoServiceComponent - рендерит техническую страницу с временно не
 * работающими сервисами.
 * @returns {ReactElement}
 */
const NoServiceComponent: FC = (): ReactElement => {
    return (
        <Container>
            <Title>{'К сожалению данный сервис временно не предоставляется.'}</Title>
            <Title>{'Ведутся технические работы.'}</Title>
            <NavLink to={'/'}>{'Хочу на главную страницу'}</NavLink>
        </Container>
    );
};

export default NoServiceComponent;
