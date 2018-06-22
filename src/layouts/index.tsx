import { Link } from "gatsby"
import React from "react"
import { rhythm } from "../utils/typography"

export interface ListLinkProps {
  to: string,
  children: any
}

class ListLink extends React.Component<ListLinkProps> {
  constructor(props: ListLinkProps) {
    super(props)
  }

  render() {
    return(
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={this.props.to}>
          {this.props.children}
        </Link>
      </li>
    )
  }
}

const MainLayout = ({ children }: { children: any }) => (
  <div
    style={{
      margin: `0 auto`,
      marginBottom: rhythm(1.5),
      marginTop: rhythm(1.5),
      maxWidth: 650,
      paddingLeft: rhythm(3 / 4),
      paddingRight: rhythm(3 / 4),
    }}
  >
    <ListLink></ListLink>
    <h3>MySweetSite</h3>
    {children}
  </div>
)

export default MainLayout
