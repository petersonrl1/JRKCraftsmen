import React from "react"
import { FaInstagram } from "react-icons/fa"

export const mainMenuItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/about",
    title: "about",
  },
  {
    path: "/projects",
    title: "projects",
  },
  {
    path: "/contact",
    title: "contact",
  }
]

export const socialMenuItems = [
  {
    icon: <FaInstagram size={45} />,
    url: "https://www.instagram.com/jrkcraftsmen",
    name: "Instagram",
  },
  
  // {
  //   icon: <FaLinkedin size={45} />,
  //   url: "https://www.linkedin.com/in/jonathan-kauffman-81561a80",
  //   name: "LinkedIn",
  // },
]

export const footerMenuItems = [
  // {
  //   path: "/privacy",
  //   title: "privacy",
  // },
  // {
  //   path: "/cookies",
  //   title: "cookies",
  // },
]
