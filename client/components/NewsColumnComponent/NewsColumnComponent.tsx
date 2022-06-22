import React, { FC, ReactElement, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { INewsBlock } from '../../interfaces/interfaces';
import { fetchNews } from '../../store/slices/fetchNews';
import { setMessage } from '../../store/slices/messengerSlice';
import LazyLoaderComponent from '../LazyLoaderComponent/LazyLoaderComponent';
import NewsBlockComponent from '../NewsBlockComponent/NewsBlockComponent';
import { Container } from './NewsColumnComponent.styles';

/**
 * @component NewsColumnComponent - рендерит новостные блоки в колонку.
 * @returns {ReactElement}
 */
const NewsColumnComponent: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { news, error, loading } = useAppSelector((state) => state.news);
    let newsComponents: Array<ReactElement> = [];

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setMessage(error));
    }, [error]);

    const createContent = () => {
        newsComponents = news?.map((props: INewsBlock, index: number) => {
            return (
                <NavLink key={index} to={'/news'}>
                    <NewsBlockComponent {...props} />
                </NavLink>
            );
        });
    };
    createContent();

    return (
        <Container>{error ? null : loading ? <LazyLoaderComponent /> : newsComponents}</Container>
    );
};

export default NewsColumnComponent;
