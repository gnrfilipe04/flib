import styled, { css } from 'styled-components/native';

interface DayProps {
    isCurrentMonth: boolean;
    isSelected: boolean;
}

interface DayContainerProps {
    isSelected: boolean;
}

export const Container = styled.View`
`;

export const Day = styled.Text<DayProps>`
    
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

    ${({isSelected}) => {

    return isSelected 
        &&   css`
                color: white;
            `
        }   
    }

`;

export const DayContainer = styled.TouchableOpacity<DayContainerProps>`
    border-radius: 100px;
    margin: 0px 10px;
    padding: 2px 0;
    

    ${({isSelected}) => {

    return isSelected 
        ?   css`
                background-color: #cc3764;
            `
        :   css`
                background-color: white;
            `
        }   
    }
`;
