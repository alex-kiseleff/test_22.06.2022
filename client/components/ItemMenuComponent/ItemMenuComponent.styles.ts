import styled from 'styled-components';

const ListItem = styled.li`
    border-bottom: 1px solid transparent;

    .active {
        border-bottom: 1px solid #000;
    }
    @media (min-width: ${({ theme }) => theme.media.minWidthXS}) and (max-width: ${({ theme }) =>
            theme.media.maxWidthMD}) {
        &:not(:last-child) {
            padding-bottom: 1.5rem;
        }
    }
    @media (min-width: ${({ theme }) => theme.media.minWidthMD}) {
        &:not(:last-child) {
            &::after {
                content: '|';
                padding: 0 1vw;
            }
        }
    }
`;

export { ListItem };
