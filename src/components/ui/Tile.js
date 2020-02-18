import React from "react"
import styled from "styled-components"

const TileWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 10rem;
  background: ${p => `url(${p.imageUrl})`} no-repeat center;
  background-size: contain;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  :hover {
    h2 {
      border-bottom: 1px solid black;
      margin-bottom: 25px;
    }
  }
`

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
`

const Tile = ({ title, imageUrl, onClick }) => {
  return (
    <TileWrapper imageUrl={imageUrl} onClick={() => onClick(title)}>
      <Title>{title}</Title>
    </TileWrapper>
  )
}

export default Tile
