import React, { FC, ReactElement, useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { IItemMenu } from '../../interfaces/interfaces';
import { fetchMenu } from '../../store/slices/fetchMenu';
import { setMessage } from '../../store/slices/messengerSlice';
import ItemMenuComponent from '../ItemMenuComponent/ItemMenuComponent';
import { NavList } from './MenuComponent.styles';

/**
 * @component MenuComponent - создает блок меню.
 * @returns {ReactElement}
 */
const MenuComponent: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { itemsMenu, error } = useAppSelector((state) => state.menu);
    let menuItemsComponents: Array<ReactElement> = [];

    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setMessage(error));
    }, [error]);

    const createContent = () => {
        menuItemsComponents = itemsMenu?.map((props: IItemMenu, index: number) => {
            return <ItemMenuComponent key={index} {...props} />;
        });
    };
    createContent();

    return <NavList>{error ? null : menuItemsComponents}</NavList>;
};

export default React.memo(MenuComponent);
