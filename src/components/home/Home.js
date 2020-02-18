import React, { useState } from "react"
import styled from "styled-components"
import { useUser } from "../../contexts/UserContext"
import Grid from "../ui/Grid"
import hairLong from "../../images/hair-long.png"
import hairMedium from "../../images/hair-medium.png"
import hairShort from "../../images/hair-short.png"
import hairPonyTail from "../../images/hair-ponytail.png"
import hairUpdo from "../../images/hair-updo.png"

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
`

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

const Home = () => {
  const { user, setPage } = useUser()
  const [card, setCard] = useState(undefined)

  return (
    <>
      <Grid
        items={[
          {
            title: "Him",
            imageUrl:
              "https://lh3.googleusercontent.com/proxy/-CTC7sxRfRYX09IBjCm1AQT_Hf_Poc4FUIZdf0SAlsSMWRofoookKoblUeAyKmt6342MxXDH6YxmhEb1N2Zc9SDgyiWZjs7WSgH4aPhrrjSWumN9wbaxPoCBlwHdSJXJ3D0",
            onClick: title => setPage(title),
          },
          {
            title: "Her",
            imageUrl:
              "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png",
            onClick: title => setPage(title),
          },
        ]}
      />
      <Grid
        items={[
          {
            title: "Short",
            imageUrl: hairShort,
            onClick: title => setPage(title),
          },
          {
            title: "Medium",
            imageUrl: hairMedium,
            onClick: title => setPage(title),
          },
          {
            title: "Long",
            imageUrl: hairLong,
            onClick: title => setPage(title),
          },
        ]}
      />
      <Grid
        items={[
          {
            title: "Ponytail",
            imageUrl: hairPonyTail,
            onClick: title => setPage(title),
          },
          {
            title: "Updo",
            imageUrl: hairUpdo,
            onClick: title => setPage(title),
          },
        ]}
      />
    </>
  )
}

export default Home
