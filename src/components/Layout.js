import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => (

    <div className="flex items-stretch h-screen">
      <div className="bg-gray-200 w-2/12 border-r-2 h-full">
        <aside>
          <p className="text-3xl pl-8 pt-12 text-gray-800">Menu</p>
          <ul className="menu-list py-32 pl-8">
            <li className="py-8 text-gray-600 hover:text-gray-800">
              <Link to="/cours">Cour et exercices</Link>
            </li>
            <li className="py-8 text-gray-600 hover:text-gray-800">
              <a href="#top">Numérique et algorithmique</a>
            </li>
            <li className="py-8 text-gray-600 hover:text-gray-800">
              <a href="#top">Club informatique</a>
            </li>
          </ul>
        </aside>
      </div>
      <div className="w-5/6 bg-white h-full">{children}</div>
    </div>
)
export default Layout
