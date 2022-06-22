import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { IPanelService } from '../../interfaces/interfaces';
import { PanelService } from './PanelServiceComponent.styles';

/**
 * @component PanelServiceComponent - рендерит панель-ссылку предоставляемой
 * услуги.
 * @param {string} title - заголовок.
 * @param {string} path - адрес страницы услуги.
 * @returns {ReactElement}
 */
const PanelServiceComponent: FC<IPanelService> = ({ title, path }): ReactElement => {
    return (
        <PanelService>
            <NavLink to={path}>{title.toUpperCase()}</NavLink>
        </PanelService>
    );
};

export default PanelServiceComponent;
