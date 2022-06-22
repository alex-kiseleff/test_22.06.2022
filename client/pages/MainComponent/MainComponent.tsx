import React, { FC, ReactElement, useEffect } from 'react';
import { Container, Section } from './MainComponent.styles';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setTitle } from '../../store/slices/titleSlice';
import { IPanelService, IPanelServiceState } from '../../interfaces/interfaces';
import LazyLoaderComponent from '../../components/LazyLoaderComponent/LazyLoaderComponent';
import { setMessage } from '../../store/slices/messengerSlice';
import { fetchPanelService } from '../../store/slices/fetchPanelService';
import useAppSelector from '../../hooks/useAppSelector';
import PanelServiceComponent from '../../components/PanelServiceComponent/PanelServiceComponent';

/**
 * @component MainComponent - рендерит главную страницу со списком панелей-ссылок
 * с предоставляемыми услугами.
 * @returns {ReactElement}
 */
const MainComponent: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { panelService, error, loading } = useAppSelector(
        (state) => state.panelService
    ) as IPanelServiceState;
    let panelsServicesComponents: Array<ReactElement> = [];

    useEffect(() => {
        dispatch(setTitle('ПЛАТЕЖИ И ПЕРЕВОДЫ'));
    }, []);

    useEffect(() => {
        dispatch(fetchPanelService());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setMessage(error));
    }, [error]);

    const createContext = () => {
        panelsServicesComponents = panelService?.map((props: IPanelService, index: number) => {
            return <PanelServiceComponent key={index} {...props} />;
        });
    };
    createContext();

    return (
        <Section>
            <Container>
                {error ? null : loading ? <LazyLoaderComponent /> : panelsServicesComponents}
            </Container>
        </Section>
    );
};

export default MainComponent;
