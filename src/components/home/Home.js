import React, { useState } from "react"
import styled from "styled-components"
import { useUser } from "../../contexts/UserContext"
import Grid from "../ui/Grid"
import hairLong from "../../images/hair-long.png"
import hairMedium from "../../images/hair-medium.png"
import hairShort from "../../images/hair-short.png"
import hairPonyTail from "../../images/hair-ponytail.png"
import hairUpdo from "../../images/hair-updo.png"
import { CATEGORY_PAGES } from "../../constants/fields"

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
        items={CATEGORY_PAGES.filter(
          page => page.title === "Him" || page.title === "Her"
        ).map(page => ({ ...page, onClick: title => setPage(title) }))}
      />
      <Grid
        items={CATEGORY_PAGES.filter(
          page =>
            page.title === "Short" ||
            page.title === "Medium" ||
            page.title === "Long"
        ).map(page => ({ ...page, onClick: title => setPage(title) }))}
        // items={[
        //   {
        //     title: "Short",
        //     imageUrl: hairShort,
        //     onClick: title => setPage(title),
        //   },
        //   {
        //     title: "Medium",
        //     imageUrl: hairMedium,
        //     onClick: title => setPage(title),
        //   },
        //   {
        //     title: "Long",
        //     imageUrl: hairLong,
        //     onClick: title => setPage(title),
        //   },
        // ]}
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
