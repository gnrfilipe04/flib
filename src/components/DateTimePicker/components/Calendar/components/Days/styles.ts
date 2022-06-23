import styled, { css } from 'styled-components/native';

interface DayContainerProps {
    isCurrentMonth: boolean;
}

export const Container = styled.View`
    position: relative;
`;

export const Day = styled.Text<DayContainerProps>`
    
    font-weight: 400;
    font-size: 16px;
    text-align: center;

    ${({isCurrentMonth}) => {

    return isCurrentMonth 
        ?   css`
                color: black;
            `
        :   css`
                color: silver;
            `
        }   
    }
`;

export const DayContainer = styled.View`
    padding: 10px;
    border-radius: 100px;
    background-color: white;
    
`;
