import React, { FC, ReactElement, useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setTitle } from '../../store/slices/titleSlice';
import InformationColumn from '../../components/InformationColumnComponent/InformationColumnComponent';
import NewsColumnComponent from '../../components/NewsColumnComponent/NewsColumnComponent';
import { Container, Section } from './AboutComponent.styles';

/**
 * @component AboutComponent - рендерит страницу [About].
 * @returns {ReactElement}
 */
const AboutComponent: FC = (): ReactElement => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTitle('ИНФОРМАЦИЯ О НАС'));
    }, []);

    return (
        <Section>
            <Container>
                <InformationColumn />
                <NewsColumnComponent />
            </Container>
        </Section>
    );
};

export default AboutComponent;
