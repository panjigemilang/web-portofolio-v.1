import React, { lazy, Suspense } from "react"
import Loading from "./Loading"
const Content = lazy(() => import("./Content"))

export default class Landing extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Content />
      </Suspense>
    )
  }
}
