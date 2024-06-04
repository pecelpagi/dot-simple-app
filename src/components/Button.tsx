import React from 'react'
import { styled } from '../stitches.config';

interface IButtonProps {
    value: string,
    type?: "submit" | "reset" | "button" | undefined,
    onClick?: () => void,
    outlined?: boolean
};

const StyledButton = styled('button', {
    background: '#000',
    color: '#FFF',
    fontSize: 16,
    padding: 10,
    outline: 'none',
    fontWeight: 'bold',
    border: '1px solid #000',
    variants: {
        outlined: {
            true: {
                backgroundColor: '#FFF',
                border: '2px solid #000',
                color: '#000',
            }
        }
    },
});


const Button = ({ type = "submit", value, onClick, outlined = false }: IButtonProps) => {
    return (
        <StyledButton type={type} onClick={onClick} outlined={outlined}>{value}</StyledButton>
    )
}

export default Button