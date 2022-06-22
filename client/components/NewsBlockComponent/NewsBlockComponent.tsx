import React, { FC, MouseEvent, ReactElement } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import { INewsBlock } from '../../interfaces/interfaces';
import { setId } from '../../store/slices/getIdSlice';
import { Article, Description, Title } from './NewsBlockComponent.styles';

/**
 * @component NewsBlockComponent - создает новостную статью в колонке
 * новостей на странице [about].
 * @param {string} id
 * @param {string} title - заголовок.
 * @param {string} description - описание.
 * @returns {ReactElement}
 */
const NewsBlockComponent: FC<INewsBlock> = ({ id, title, description }): ReactElement => {
    const dispatch = useAppDispatch();

    const handleClick = (e: MouseEvent) => {
        dispatch(setId(e.currentTarget.id));
    };

    return (
        <Article id={id} onClick={handleClick}>
            <Title>{title}</Title>
            <Description lang={'ru'}>{description}</Description>
        </Article>
    );
};

export default NewsBlockComponent;
