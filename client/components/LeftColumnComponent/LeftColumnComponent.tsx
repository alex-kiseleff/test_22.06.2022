import React, { FC, ReactElement, useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { IContact } from '../../interfaces/interfaces';
import { fetchContacts } from '../../store/slices/fetchContacts';
import { setMessage } from '../../store/slices/messengerSlice';
import LazyLoaderComponent from '../LazyLoaderComponent/LazyLoaderComponent';
import { Container, Data, Section } from './LeftColumnComponent.styles';

/**
 * @component LeftColumnComponent - рендерит левую колонку с контактными данными
 * на странице контактов.
 * @returns {ReactElement}
 */
const LeftColumnComponent: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { contacts, error, loading } = useAppSelector((state) => state.contacts);
    let contactsComponents: Array<ReactElement> = [];

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setMessage(error));
    }, [error]);

    const createContent = () => {
        contactsComponents = contacts?.map(
            ({ post, name, phone, number, address, email }: IContact, index: number) => {
                return (
                    <Container key={index}>
                        <Data>{post}</Data>
                        <Data>{name}</Data>
                        <Data>{phone}</Data>
                        <Data>{number}</Data>
                        {address && <Data>{address}</Data>}
                        {email && <Data>{email}</Data>}
                    </Container>
                );
            }
        );
    };
    createContent();

    return (
        <Section>{error ? null : loading ? <LazyLoaderComponent /> : contactsComponents}</Section>
    );
};

export default LeftColumnComponent;
