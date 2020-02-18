import React from "react"
import styled from "styled-components"
import Card from "./Card"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: ${p => (p.wrap ? "wrap" : "no-wrap")};
`

const CardGrid = ({ items, wrap = true }) => {
  return (
    <Wrapper wrap={wrap}>
      {items.map(item => (
        <Card title={item.title} imageUrl={item.imageUrl} />
      ))}
    </Wrapper>
  )
}

export default CardGrid
