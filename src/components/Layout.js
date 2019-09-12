import React from "react"

export default ({ children }) => (
  <div>
    <div
      style={{ maxWidth: 400 }}
      class="column is-fullheight has-background-dark"
    >
      <aside
        style={{ margin: `8rem 1rem 10rem`, maxWidth: 650, padding: `0 1rem` }}
        class="menu"
      >
        <p class="menu-label">Menu</p>
        <ul class="menu-list">
          <li>
            <a>Cour et exercices</a>
          </li>
          <li>
            <a>Numérique et algorithmique</a>
          </li>
          <li>
            <a>Bret et Bac</a>
          </li>
        </ul>
      </aside>
    </div>
    {children}
  </div>
)
