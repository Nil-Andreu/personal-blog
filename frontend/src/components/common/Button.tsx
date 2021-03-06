import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
    children?: React.ReactNode;
}

function Button(props: ButtonProps) {
  return (
    <Container>{props.children}</Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius : 10px;
    width: 10rem;
    height: 3rem;
    background-color: ${props => props.theme.button};

    &:hover {
        background-color: ${props => props.theme.button_hover};
        cursor: pointer;
        border: 0.5px solid white;
        transform: scale(1.05);
    }

    p {
        color: ${props => props.theme.background};
    }
`


export default Button