import React, { FC, ReactElement } from 'react';
import { Container, Title } from './LazyLoaderComponent.styles';

/**
 * @component LazyLoaderComponent - рендерит простую строку
 * на время загрузки данных.
 * @returns {ReactElement}
 */
const LazyLoaderComponent: FC = (): ReactElement => {
    return (
        <Container>
            <Title>{'Идет загрузка...'}</Title>
        </Container>
    );
};

export default LazyLoaderComponent;
