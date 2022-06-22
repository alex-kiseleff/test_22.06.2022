import React, { FC, ReactElement, useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { IVisibility } from '../../interfaces/interfaces';
import { setMessage } from '../../store/slices/messengerSlice';
import { setCondition } from '../../store/slices/openBurgerMenuSlice';
import { Container, Section, Title } from './MessengerComponent.styles';

/**
 * @component MessengerComponent - рендерит сообщение если приходит
 * [prop] и скрывает его через 3000 мс.
 * @param {string} message - строка сообщения.
 * @returns {ReactElement}
 */
const MessengerComponent: FC<IVisibility> = ({ message }): ReactElement => {
    const dispatch = useAppDispatch();
    const { isMenuOpen } = useAppSelector((state) => state.burgerMenu);

    useEffect(() => {
        if (isMenuOpen) {
            dispatch(setCondition(!isMenuOpen));
        }
    }, [dispatch]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            dispatch(setMessage(''));
        }, 3000);
        return () => {
            clearTimeout(timerId);
        };
    }, [message]);

    return (
        <Section message={message}>
            <Container>{message && <Title>{message}</Title>}</Container>
        </Section>
    );
};

export default MessengerComponent;
