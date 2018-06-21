import React from "react"
import * as containerStyles from "./container.module.css"

export default ({ children }: any) => (
  <div className={containerStyles.container}>{children}</div>
)