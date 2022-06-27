import styled from 'styled-components/native';

interface ContainerProps {
    maxHeight: number
}

export const Container = styled.View<ContainerProps>`
    flex: 1;
    max-height: ${({maxHeight}) => maxHeight}px;
`;
