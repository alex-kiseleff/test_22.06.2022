import React, { FC, ReactElement } from 'react';
import { Container, WrapImg } from './RightColumnComponent.styles';

/**
 * @component RightColumnComponent - рендерит правую колонку со схемой
 * местонахождения объекта на странице контактов.
 * @returns {ReactElement}
 */
const RightColumnComponent: FC = (): ReactElement => {
    return (
        <Container>
            <WrapImg>
                <picture>
                    <source srcSet={'/public/images/maps/address.webp'} />
                    <img src={'/public/images/maps/address.png'} />
                </picture>
            </WrapImg>
        </Container>
    );
};

export default RightColumnComponent;
