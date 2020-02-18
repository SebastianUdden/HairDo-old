import React from "./node_modules/react"
import styled from "./node_modules/styled-components"

const Wrapper = styled.a``

const Image = styled.img``

const Title = styled.h1`
  font-size: 50px;
  margin-left: 1rem;
`

const Product = ({ title, link, imageUrl }) => {
  return (
    <Wrapper href={link} target="_blank">
      <Image src={imageUrl} />
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default Product
