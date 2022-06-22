import React, { FC, ReactElement, useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { IInformationAboutState, IInfoAbout } from '../../interfaces/interfaces';
import { fetchInformationAbout } from '../../store/slices/fetchInformationAbout';
import { setMessage } from '../../store/slices/messengerSlice';
import LazyLoaderComponent from '../LazyLoaderComponent/LazyLoaderComponent';
import { Container, Paragraph, Title } from './InformationColumnComponent.styles';

/**
 * @component InformationColumnComponent - рендерит информационную колонку
 * на странице [about].
 * @returns {ReactElement}
 */
const InformationColumnComponent: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { infoAbout, error, loading } = useAppSelector(
        (state) => state.about
    ) as IInformationAboutState;
    let paragraphsComponents: Array<ReactElement> = [];

    useEffect(() => {
        dispatch(fetchInformationAbout());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setMessage(error));
    }, [error]);

    const createContext = () => {
        paragraphsComponents = infoAbout?.map(({ title, paragraph }: IInfoAbout, index: number) => {
            return (
                <div key={index}>
                    {title && <Title>{title}</Title>}
                    {paragraph && <Paragraph>{paragraph}</Paragraph>}
                </div>
            );
        });
    };
    createContext();

    return (
        <Container>
            {error ? null : loading ? <LazyLoaderComponent /> : paragraphsComponents}
        </Container>
    );
};

export default InformationColumnComponent;
