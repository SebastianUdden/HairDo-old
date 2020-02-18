import React, { useEffect } from "react"
import styled from "styled-components"
import { useUser } from "../contexts/UserContext"
import SEO from "./seo"
import Home from "./home/Home"
import Signup from "./user/Signup"
import Login from "./user/Login"
import Settings from "./user/Settings"
import Footer from "./footer/footer"

import { LOGIN_FIELDS, SIGNUP_FIELDS } from "../constants/fields"
import { FOOTER_MENU } from "../constants/menus"
import Category from "./category/Category"

const Body = styled.div`
  margin-bottom: 10vh;
`

const getData = page => {
  if (page === "Him") {
    return {
      title: page,
      imageUrl:
        "https://lh3.googleusercontent.com/proxy/-CTC7sxRfRYX09IBjCm1AQT_Hf_Poc4FUIZdf0SAlsSMWRofoookKoblUeAyKmt6342MxXDH6YxmhEb1N2Zc9SDgyiWZjs7WSgH4aPhrrjSWumN9wbaxPoCBlwHdSJXJ3D0",
    }
  } else if (page === "Her") {
    return {
      title: page,
      imageUrl:
        "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png",
    }
  }
}

const Main = () => {
  const { page, setPage, setUser } = useUser()

  useEffect(() => {
    setUser({
      username: localStorage.getItem("username") || "",
      email: localStorage.getItem("email") || "",
      password: localStorage.getItem("password") || "",
      loggedIn: localStorage.getItem("loggedIn") === "true",
    })
  }, [page])

  return (
    <>
      <SEO title="Home" />
      <Body>
        {page === "home" && <Home />}
        {page === "signup" && <Signup fields={SIGNUP_FIELDS} />}
        {page === "login" && <Login fields={LOGIN_FIELDS} />}
        {page === "settings" && <Settings />}
        {page === "Him" && <Category {...getData("Him")} />}
        {page === "Her" && <Category {...getData("Her")} />}
      </Body>
      <Footer
      // items={FOOTER_MENU.map(item => ({
      //   ...item,
      //   onClick: () => setPage(item.page),
      // }))}
      />
    </>
  )
}

export default Main
