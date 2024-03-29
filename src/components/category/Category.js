import React from "react"
import styled from "styled-components"
import CardGrid from "./CardGrid"

const Wrapper = styled.div``
const Img = styled.img`
  width: 7rem;
`
const H1 = styled.h1`
  font-size: 30px;
  margin-left: 1rem;
`
const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Category = ({ title, imageUrl, articles }) => {
  return (
    <Wrapper>
      <FlexWrapper>
        <Img src={imageUrl} />
        <H1>{title}</H1>
      </FlexWrapper>
      <CardGrid items={articles} />
    </Wrapper>
  )
}

export default Category
