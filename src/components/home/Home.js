import React, { useState } from "react"
import { useUser } from "../../contexts/UserContext"
import Grid from "../ui/Grid"
import { CATEGORY_DATA } from "../../constants/categoryData"

const Home = () => {
  const { user, setPage } = useUser()
  const [card, setCard] = useState(undefined)
  const categoryData = CATEGORY_DATA.map(page => ({
    ...page,
    onClick: title => setPage(title),
  }))
  return (
    <>
      <Grid
        items={categoryData.filter(
          page => page.title === "Him" || page.title === "Her"
        )}
      />
      <Grid
        items={categoryData.filter(
          page =>
            page.title === "Short" ||
            page.title === "Medium" ||
            page.title === "Long"
        )}
      />
      <Grid
        items={categoryData.filter(
          page => page.title === "Ponytail" || page.title === "Updo"
        )}
      />
    </>
  )
}

export default Home
