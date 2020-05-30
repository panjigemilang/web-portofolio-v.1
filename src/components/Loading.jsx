import React from "react"

export default function Loading() {
  return (
    <div className="loader">
      <img src={require("../img/832.gif")} alt="loading.gif" />
      &nbsp;&nbsp;&nbsp;
      <h1>Loading . . .</h1>
    </div>
  )
}
