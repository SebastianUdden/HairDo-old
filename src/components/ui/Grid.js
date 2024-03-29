import React from "react"
import styled from "styled-components"
import Tile from "./Tile"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: ${p => (p.wrap ? "wrap" : "no-wrap")};
`

const Grid = ({ items, wrap }) => {
  return (
    <Wrapper wrap={wrap}>
      {items.map(item => (
        <Tile {...item} />
      ))}
    </Wrapper>
  )
}

export default Grid
