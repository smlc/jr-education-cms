import React from "react"
import "../mystyles.scss"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    <div class="columns">
      <div class="column is-half">
        <div class="box">
          <div class="content">
            <ul>
              <li>6eme</li>
              <li>5eme</li>
              <li>4eme</li>
              <li>3eme</li>
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
