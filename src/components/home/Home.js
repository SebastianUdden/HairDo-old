import React, { useState } from "react"
import styled from "styled-components"
import { useUser } from "../../contexts/UserContext"
import { PRIMARY, SURFACE, HIGH_EMPHASIS } from "../../constants/theme"

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
`

const TileWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 23rem;
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
  font-size: 40px;
`

const Tile = ({ title, imageUrl, onClick }) => {
  return (
    <TileWrapper imageUrl={imageUrl} onClick={() => onClick(title)}>
      <Title>{title}</Title>
    </TileWrapper>
  )
}

const Home = () => {
  const { user, setPage } = useUser()
  const [card, setCard] = useState(undefined)

  return (
    <Wrapper>
      <Tile
        title="Him"
        imageUrl="https://lh3.googleusercontent.com/proxy/-CTC7sxRfRYX09IBjCm1AQT_Hf_Poc4FUIZdf0SAlsSMWRofoookKoblUeAyKmt6342MxXDH6YxmhEb1N2Zc9SDgyiWZjs7WSgH4aPhrrjSWumN9wbaxPoCBlwHdSJXJ3D0"
        onClick={title => setPage(title)}
      />
      <Tile
        title="Her"
        imageUrl="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
        onClick={title => setPage(title)}
      />
    </Wrapper>
  )
}

export default Home
