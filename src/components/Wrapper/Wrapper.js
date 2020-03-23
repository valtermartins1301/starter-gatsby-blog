import React from "react"
import styles from './wrapper.styles'
import { styled } from "@creditas/stylitas"

const WrapperRaw = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
)

const Wrapper = styled(WrapperRaw)`
  ${styles}
`

export {Wrapper}