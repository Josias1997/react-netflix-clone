import React from 'react'
import { Container, Item, Inner, Pane, Title, SubTitle, Image } from './styles/jumbotron';

function Jumbotron({ children, direction = "row", ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronContainer({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}
Jumbotron.Title = function JumbotronContainer({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.SubTitle = function JumbotronContainer({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronContainer({ children, ...restProps }) {
    return <Image {...restProps} />
}
