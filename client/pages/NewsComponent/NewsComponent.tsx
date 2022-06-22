import React, { FC, ReactElement, useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setTitle } from '../../store/slices/titleSlice';
import NewsBlockComponent from '../../components/NewsBlockComponent/NewsBlockComponent';
import { INewsBlock } from '../../interfaces/interfaces';
import { Container, Section } from './NewsComponent.styles';
import useAppSelector from '../../hooks/useAppSelector';

/**
 * @component NewsComponent - рендерит новостную страницу [News] с
 * кликнутой новостью на странице [About].
 * @returns {ReactElement}
 */
const NewsComponent: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { news } = useAppSelector((state) => state.news);
    const { id } = useAppSelector((state) => state.id);

    window.scrollTo(0, 0);

    const getArticleById = (id: string) => news?.filter((item) => item.id === id);

    if (!id) {
        location.pathname = '/about';
    }

    useEffect(() => {
        dispatch(setTitle('НОВОСТИ'));
    }, []);

    const props = getArticleById(id)[0] as unknown as INewsBlock;

    return (
        <Section>
            <Container>{<NewsBlockComponent {...props} />}</Container>
        </Section>
    );
};

export default NewsComponent;
