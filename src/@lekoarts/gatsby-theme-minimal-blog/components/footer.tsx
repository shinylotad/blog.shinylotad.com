/** @jsx jsx */
import { jsx, Link } from "theme-ui"

const Footer = () => {

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
      Made with love by VINCENT MORENO &copy; All rights reserved.
      </div>
      <div>
      </div>
    </footer>
  )
}

export default Footer
