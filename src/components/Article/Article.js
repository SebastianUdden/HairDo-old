import React from "react"
import styled from "styled-components"
import Step from "./Step"
import Product from "./Product"

const Wrapper = styled.div``
const HeroImage = styled.img``

const Title = styled.h1`
  font-size: 50px;
  margin-left: 1rem;
`
const Description = styled.p``
const SubTitle = styled.h2``

const Article = ({ title, description, imageUrl, steps, products }) => {
  return (
    <Wrapper>
      <HeroImage src={imageUrl} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <SubTitle>{steps.title}</SubTitle>
      {steps.values.map(step => (
        <Step {...step} />
      ))}
      <SubTitle>{products.title}</SubTitle>
      {products.values.map(product => (
        <Product {...product} />
      ))}
    </Wrapper>
  )
}

export default Article
