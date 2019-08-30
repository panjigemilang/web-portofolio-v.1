import React, { lazy, Suspense } from "react"
import Loading from "./Loading"
const Content = lazy(() => import("./Content"))

export default class Landing extends React.Component {
  render() {
    // const Loading = (
    //   <div class="loader">
    //     <img src={require("../img/832.gif")} alt="loading.gif" />
    //     &nbsp;&nbsp;&nbsp;
    //     <h1>Loading. . .</h1>
    //   </div>
    // )

    return (
      <Suspense fallback={<Loading />}>
        <Content />
      </Suspense>
    )
  }
}
