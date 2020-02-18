import React, { useState } from "react"
import styled from "styled-components"

import { SVG } from "../svg/svg"
import {
  Card,
  rocket,
  rocketColored,
  forward30,
} from "project-pillow-components"
import { useUser } from "../../contexts/UserContext"
import { PRIMARY, SURFACE, HIGH_EMPHASIS } from "../../constants/theme"

const Wrapper = styled.div`
  display: flex;
  background: ${SURFACE};
  padding: 1rem;
`
const CardWrapper = styled.div`
  width: 100%;
`;

const H1 = styled.h1`
  opacity: ${HIGH_EMPHASIS};
`
const P = styled.p`
  opacity: ${HIGH_EMPHASIS};
`
const Em = styled.em`
  color: ${PRIMARY};
  font-style: normal;
`
const SVGWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

const Home = () => {
  const { user, setPage } = useUser()
  const [card, setCard] = useState(undefined)

  return (
    <Wrapper>
      <CardWrapper>
      <Card
        title="Him"
        size="100%"
        onUpdate={value => setCard(value)}
      />
      </CardWrapper>
      <CardWrapper>
      <Card
        title="Her"
        size="100%"
        onUpdate={value => setCard(value)}
      />
      </CardWrapper>
    </Wrapper>
  )
}

export default Home
