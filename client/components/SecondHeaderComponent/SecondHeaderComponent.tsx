import React, { FC, ReactElement } from 'react';
import useAppSelector from '../../hooks/useAppSelector';
import { Section, Container, Title } from './SecondHeaderComponent.styles';
import MenuComponent from '../MenuComponent/MenuComponent';
import MessengerComponent from '../MessengerComponent/MessengerComponent';
import BurgerMenuComponent from '../BurgerMenuComponent/BurgerMenuComponent';

/**
 * @component SecondHeaderComponent - рендерит: текущее название страницы,
 * меню (кнопку "бургер"), всплывающее сообщение.
 * @returns {ReactElement}
 */
const SecondHeaderComponent: FC = (): ReactElement => {
    const title = useAppSelector((state) => state.titles.title);
    const { message } = useAppSelector((state) => state.messenger);

    return (
        <Section>
            <Container>
                <BurgerMenuComponent />
                <MenuComponent />
                <Title>{title}</Title>
            </Container>
            <MessengerComponent message={message} />
        </Section>
    );
};

export default SecondHeaderComponent;
