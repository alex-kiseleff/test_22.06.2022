import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { IItemMenu } from '../../interfaces/interfaces';
import { ListItem } from './ItemMenuComponent.styles';

/**
 * @component ItemMenuComponent - создает пункт меню.
 * @param {string} path - адрес ссылки.
 * @param {string} name - название пункта меню.
 * @returns {ReactElement}
 */
const ItemMenuComponent: FC<IItemMenu> = ({ path, name }: IItemMenu): ReactElement => {
    return (
        <ListItem>
            <NavLink to={path}>{name.toUpperCase()}</NavLink>
        </ListItem>
    );
};

export default ItemMenuComponent;
