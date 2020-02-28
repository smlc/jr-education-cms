import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <div class="columns">
      <div class="column is-half">
        <div class="box">
          <h3 class="title is-3 has-text-middle">Collège</h3>
          <div class="content">
            <ul>
              <li><Link to="/sixieme">6eme</Link></li>
              <li><Link to="/cinquieme">5eme</Link></li>
              <li><Link to="/quatrieme">4eme</Link></li>
              <li><Link to="/troisieme">3eme</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column is-half">
        <div class="box">
          <div class="content">
            <ul>
              <li>1er</li>
              <li>2eme</li>
              <li>Terminal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
