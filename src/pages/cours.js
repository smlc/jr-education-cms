import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <div class="h-full flex flex-col bg-gray-400 ">
      <div class="text-2xl bg-gray-400 pl-6 py-3">Les Cours</div>
      <div class="flex-1 flex text-gray-700 text-left bg-gray-400 pt-2 mx-6 border-t-2">
        <div class="flex-1 mt-6">Collège</div>
        <div class="flex-1 flex-wrap mt-6">
          <Link
            to="/sixieme"
            class="inline-block text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-56 py-2 px-4 mx-4 border border-blue-500 hover:border-transparent rounded"
          >
            6 eme
          </Link>
          <Link
            to="/cinquieme"
            class="inline-block text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-56 py-2 px-4 mx-4 border border-blue-500 hover:border-transparent rounded"
          >
            5 eme
          </Link>
          <Link
            to="/quatrieme"
            class="inline-block text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-56 py-2 px-4 mx-4 mt-4 border border-blue-500 hover:border-transparent rounded"
          >
            4 eme
          </Link>
          <Link
            to="/troisieme"
            class="inline-block text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-56 py-2 px-4 mx-4 mt-4 border border-blue-500 hover:border-transparent rounded"
          >
            3 eme
          </Link>
        </div>
      </div>
      <div class="flex-1 flex text-gray-700 text-left bg-gray-400 pt-2 mx-6 border-t-2">
        <div class="flex-1 mt-6">Lycée</div>
        <div class="flex-1 flex-wrap mt-6">
          <Link
            to="#"
            class="inline-block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-56 py-2 px-4 mx-4 border border-blue-500 hover:border-transparent rounded"
          >
            Seconde
          </Link>
          <Link
            to="#"
            class="inline-block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-56 py-2 px-4 mx-4 border border-blue-500 hover:border-transparent rounded"
          >
            Permière
          </Link>
          <Link
            to="#"
            class="inline-block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-56 py-2 px-4 mx-4 mt-4 border border-blue-500 hover:border-transparent rounded"
          >
            Terminale
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)
