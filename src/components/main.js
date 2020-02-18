import React, { useEffect } from "react"
import styled from "styled-components"
import { useUser } from "../contexts/UserContext"
import SEO from "./seo"
import Home from "./home/Home"
import Signup from "./user/Signup"
import Login from "./user/Login"
import Settings from "./user/Settings"
import Footer from "./footer/footer"

import {
  LOGIN_FIELDS,
  SIGNUP_FIELDS,
  CATEGORY_PAGES,
} from "../constants/fields"
import Category from "./category/Category"

const Body = styled.div`
  margin-bottom: 10vh;
`

const getData = page =>
  CATEGORY_PAGES.find(categoryPage => categoryPage.title === page)

const checkIsCategoryPage = page => {
  if (
    page !== "home" &&
    page !== "signup" &&
    page !== "login" &&
    page !== "settings"
  ) {
    return true
  }
  return false
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
        {checkIsCategoryPage(page) && <Category {...getData(page)} />}
      </Body>
      <Footer />
    </>
  )
}

export default Main
