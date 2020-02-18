import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 50%;
`
const Image = styled.img``
const Title = styled.h2`
  font-size: 14px;
`

const Card = ({ title, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt={title} />
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default Card
