import React, { FC, MouseEvent, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { IUrlsPicture } from '../../interfaces/interfaces';
import { saveToSessionStorage } from '../../utilites/sessionStorage';
import { Container } from './OperatorCardComponent.styles';

/**
 *@component OperatorCardComponent - рендерит карточку оператора связи.
 * @param {string} webp - путь до репозитория изображения с форматом webp.
 * @param {string} png - путь до репозитория изображения с форматом png.
 * @param {string} path - адрес ссылки.
 * @returns {ReactElement}.
 */
const OperatorCardComponent: FC<IUrlsPicture> = ({ webp, png, path }): ReactElement => {
    const handlerGetUrlImage = (e: MouseEvent) => {
        const currentSrc = (e.target as HTMLImageElement).currentSrc;
        saveToSessionStorage('urlImage', currentSrc);
    };
    return (
        <Container onClick={handlerGetUrlImage}>
            <NavLink to={path}>
                <picture>
                    <source srcSet={webp} />
                    <img src={png} />
                </picture>
            </NavLink>
        </Container>
    );
};

export default OperatorCardComponent;
