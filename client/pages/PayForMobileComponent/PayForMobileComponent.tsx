import React, { FC, ReactElement, useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { IOperator } from '../../interfaces/interfaces';
import { fetchOperatorsList } from '../../store/slices/fetchOperatorsList';
import { setMessage } from '../../store/slices/messengerSlice';
import LazyLoaderComponent from '../../components/LazyLoaderComponent/LazyLoaderComponent';
import OperatorCardComponent from '../../components/OperatorCardComponent/OperatorCardComponent';
import { Container, Section } from './PayForMobileComponent.styles';
import { setTitle } from '../../store/slices/titleSlice';

/**
 * @component PayForMobileComponent - рендерит страницу со списком операторов связи.
 * @returns {ReactElement}
 */
const PayForMobileComponent: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { operators, error, loading } = useAppSelector((state) => state.operatorList);
    let operatorsComponents: Array<ReactElement> = [];

    useEffect(() => {
        dispatch(fetchOperatorsList());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setMessage(error));
    }, [error]);

    useEffect(() => {
        dispatch(setTitle('МОБИЛЬНАЯ СВЯЗЬ'));
    }, []);

    const createContent = () => {
        operatorsComponents = operators?.map((props: IOperator, index: number) => {
            return <OperatorCardComponent key={index} {...props} />;
        });
    };
    createContent();

    return (
        <Section>
            <Container>
                {error ? null : loading ? <LazyLoaderComponent /> : operatorsComponents}
            </Container>
        </Section>
    );
};

export default PayForMobileComponent;
