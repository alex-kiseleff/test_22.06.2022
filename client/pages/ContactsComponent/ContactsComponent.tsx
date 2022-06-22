import React, { FC, ReactElement, useEffect } from 'react';
import LeftColumnComponent from '../../components/LeftColumnComponent/LeftColumnComponent';
import RightColumnComponent from '../../components/RightColumnComponent/RightColumnComponent';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setTitle } from '../../store/slices/titleSlice';
import { Container, Section } from './ContactsComponent.styles';

/**
 * @component ContactsComponent - рендерит страницу [Contacts].
 * @returns {ReactElement}
 */
const ContactsComponent: FC = (): ReactElement => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTitle('КОНТАКТЫ'));
    }, []);

    return (
        <Section>
            <Container>
                <LeftColumnComponent />
                <RightColumnComponent />
            </Container>
        </Section>
    );
};

export default ContactsComponent;
