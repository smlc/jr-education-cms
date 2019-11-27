import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => (
  <div class="columns is-fullheight">
    <div
      style={{ maxWidth: 400 }}
      class="column is-two-fifths has-background-dark is-sidebar-menu"
    >
      <aside
        style={{ margin: `8rem 1rem 10rem`, maxWidth: 650, padding: `0 1rem` }}
        class="menu"
      >
        <p class="menu-label">Menu</p>
        <ul class="menu-list">
          <li>
            <Link to="/cours">Cour et exercices</Link>
          </li>
          <li>
            <a href="#top">Numérique et algorithmique</a>
          </li>
          <li>
            <a href="#top">Brevet et Bac</a>
          </li>
        </ul>
      </aside>
    </div>
    <div class="column">{children}</div>
  </div>
)
export default Layout;