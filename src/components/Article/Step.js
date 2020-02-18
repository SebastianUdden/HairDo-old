import React from "./node_modules/react"
import styled from "./node_modules/styled-components"

const Image = styled.img``

const Title = styled.h1`
  font-size: 50px;
  margin-left: 1rem;
`
const Description = styled.p``

const Step = ({ title, description, imageUrl }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Image src={imageUrl} />
      <Description>{description}</Description>
    </Wrapper>
  )
}

export default Step
