import React, { FC, ReactElement } from 'react';
import {
    Container,
    Header,
    Img,
    Picture,
    TextLeft,
    TextRight,
} from './FirstHeaderComponent.styles';

/**
 * @component FirstHeaderComponent - создает первый [header] сайта.
 * @returns {ReactElement}
 */
const FirstHeaderComponent: FC = (): ReactElement => {
    return (
        <Header>
            <Container>
                <TextLeft>{'Bank Of $crooge'}</TextLeft>
                <Picture>
                    <source
                        srcSet={'/public/images/header/scrooge_mc_duck/webp/scrooge_mc_duck.webp'}
                        type="image/webp"
                    />
                    <Img
                        src={'/public/images/header/scrooge_mc_duck/png/scrooge_mc_duck.png'}
                        alt={'Скрудж МакДак'}
                    />
                </Picture>
                <TextRight>{'McDuke $ $ $'}</TextRight>
            </Container>
        </Header>
    );
};

export default FirstHeaderComponent;
