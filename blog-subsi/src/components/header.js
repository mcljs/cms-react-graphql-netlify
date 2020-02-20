import { Link } from "gatsby"
import React from "react"
import ImageHeader from "./ImageHeader"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      /*marginBottom: `1.45rem`,*/
    }}
  >
    <div
      style={{
        /*margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,*/
      }}
    >
      <h1 /*style={{ margin: 0 }}*/>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <ImageHeader />
  </header>

)



export default Header