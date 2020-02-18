import React from "react"
import styled from "styled-components"
import Tile from "./Tile"

const Wrapper = styled.div`
  display: flex;
`
const Item = styled.div`
  height: 10rem;
  flex-grow: 1;
  border: 1px solid green;
`

const Grid = ({ items }) => {
  return (
    <Wrapper>
      {items.map(item => (
        <Tile {...item} />
      ))}
    </Wrapper>
  )
}

export default Grid
