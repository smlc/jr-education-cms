import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => (

    <div class="flex items-stretch h-screen">
      <div class="bg-gray-200 w-2/12 border-r-2">
        <aside>
          <p class="text-3xl pl-8 pt-12 text-gray-800">Menu</p>
          <ul class="menu-list py-32 pl-8">
            <li class="py-8 text-gray-600 hover:text-gray-800">
              <Link to="/cours">Cour et exercices</Link>
            </li>
            <li class="py-8 text-gray-600 hover:text-gray-800">
              <a href="#top">Numérique et algorithmique</a>
            </li>
            <li class="py-8 text-gray-600 hover:text-gray-800">
              <a href="#top">Club informatique</a>
            </li>
          </ul>
        </aside>
      </div>
      <div class="w-5/6 bg-white">{children}</div>
    </div>
)
export default Layout
