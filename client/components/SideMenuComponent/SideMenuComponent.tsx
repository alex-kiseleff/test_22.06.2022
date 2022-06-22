import React, { FC, ReactElement, useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { IItemMenu } from '../../interfaces/interfaces';
import { fetchMenu } from '../../store/slices/fetchMenu';
import { setMessage } from '../../store/slices/messengerSlice';
import ItemMenuComponent from '../ItemMenuComponent/ItemMenuComponent';
import { Container, Wrapper } from './SideMenuComponent.styles';

/**
 * @component SideMenuComponent - рендерит тело "бургер" меню.
 * @returns {ReactElement}
 */
const SideMenuComponent: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { isMenuOpen } = useAppSelector((state) => state.burgerMenu);
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

    return (
        <Wrapper>
            <Container isMenuOpen={isMenuOpen}>{error ? null : menuItemsComponents}</Container>
        </Wrapper>
    );
};

export default SideMenuComponent;
