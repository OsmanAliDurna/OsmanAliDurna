import "./scss/style.scss"
import {
  apiRequest
} from "./src/apiRequest.js"

const form = document.querySelector("header form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  getCoinData()
  e.target.reset()
})

const getCoinData = () => {
  const input = document.querySelector("header form input").value
  if (!input.trim()) {
    alert("Input can not be blank ")
  } else {
    apiRequest(input)
  }
}