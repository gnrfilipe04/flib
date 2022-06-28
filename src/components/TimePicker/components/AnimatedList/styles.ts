import { Animated } from "react-native";
import styled from "styled-components/native";

interface ItemTextProps {
    color: string,
    fontSize: number
}

interface ItemContainerProps {
    itemSize: number;
}

export const ItemText = styled(Animated.Text)<ItemTextProps>`
    color: ${({color}) => color};
    font-size: ${({fontSize}) => fontSize}px;
`;

export const ItemContainer = styled.View<ItemContainerProps>`
    height: ${({itemSize}) => itemSize}px;
    justify-content: center;
    align-items: center;
`;