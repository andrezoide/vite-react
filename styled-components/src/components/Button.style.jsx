import styled from "styled-components";
import { theme } from '../Theme'
import ButtonStyled from "./Button";

//exemplo styled component
export const StyledButton = styled.button`
background-color: ${(prop) => prop.backgroundColor ? prop.backgroundColor : 'pink'};
width: 100px;
height: ${({ theme }) => theme.size.xxl};

&:active {
  background-color: aqua;
}
`
//editando um componente Button criado passando ele aqui V
export const StyledButton2 = styled(ButtonStyled)`
background-color: ${({ theme}) => theme.color.secondary};
width: 100px;
height: 60px;

`