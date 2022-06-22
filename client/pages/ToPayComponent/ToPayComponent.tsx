import React, { FC, FormEvent, ReactElement, useEffect } from 'react';
import ButtonSubmitComponent from '../../components/ButtonSubmitComponent/ButtonSubmitComponent';
import InputWithMaskComponent from '../../components/InputWithMaskComponent/InputWithMaskComponent';
import SumForPayComponent from '../../components/SumForPayComponent/SumForPayComponent';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { IDataForSubmit } from '../../interfaces/interfaces';
import { fetchSubmit } from '../../store/slices/fetchSubmit';
import { setMessage } from '../../store/slices/messengerSlice';
import { setTitle } from '../../store/slices/titleSlice';
import { setSrc } from '../../store/slices/urlImageSlice';
import { getFromSessionStorage } from '../../utilites/sessionStorage';
import { Container, LogoOperator, Section } from './ToPayComponent.styles';

/**
 * @component ToPayComponent - рендерит страницу с панелью оплаты
 * мобильного телефона.
 * @returns {ReactElement}
 */
const ToPayComponent: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { currentSrc } = useAppSelector((state) => state.urlImage);
    const { error, success } = useAppSelector((state) => state.submit);

    useEffect(() => {
        const urlImage = getFromSessionStorage('urlImage');
        if (urlImage) {
            dispatch(setSrc(urlImage));
        }
    }, []);

    useEffect(() => {
        dispatch(setMessage(error));
        if (success) {
            location.pathname = '/';
        }
    }, [error, success]);

    useEffect(() => {
        dispatch(setTitle('ОПЛАТА МОБИЛЬНОЙ СВЯЗИ'));
    }, []);

    const handlerSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const arr = Object.entries(form);
        const dataForSend = arr.reduce((obj: IDataForSubmit, item: Array<HTMLFormElement>) => {
            return item[1].tagName === 'INPUT' ? { ...obj, [item[1].name]: item[1].value } : obj;
        }, {} as IDataForSubmit);
        dispatch(fetchSubmit(dataForSend));
    };

    return (
        <Section>
            <Container onSubmit={handlerSubmit}>
                <LogoOperator>{<img src={currentSrc} />}</LogoOperator>
                <InputWithMaskComponent />
                <SumForPayComponent />
                <ButtonSubmitComponent />
            </Container>
        </Section>
    );
};

export default ToPayComponent;
