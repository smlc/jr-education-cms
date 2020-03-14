import React from "react"
import PropTypes from "prop-types"

/**
 * Représente les différent sujet aborté pour une classe
 * Les données pour créer un cour sont récupéré depuis le **.md
 * @param {*} Les données d'un cour
 */
const Cour = ({ cour }) => (
  <div>
    <h1 class="text-center text-gray-800 text-2xl mt-6">{cour.theme}</h1>

    <h4 class="text-left text-gray-700 text-xl font-bold mt-5 ml-4 mb-3">
      Méthodes
    </h4>
    <ul>
      {cour.methodes.map(element => (
        <li>
          <a
            class="no-underline text-blue-500 ml-4"
            href={element.methode.lien}
          >
            {element.methode.nom}
          </a>
        </li>
      ))}
    </ul>
    <h4 class="text-left text-gray-700 text-xl font-bold mt-5 ml-4 mb-3">
      Activitées
      {cour.activitees.map(element =>
        element.competencesevalueesactivite.map(el => (
          <div class="inline bg-transparent text-sm text-blue-700 font-semibold border border-blue-300 ml-2 px-3 py-1 rounded-full">
            {el}
          </div>
        ))
      )}
    </h4>
    <ul>
      {cour.activitees.map(element => (
        <li>
          <a
            class="no-underline text-blue-500 ml-4"
            href={element.activitee.lien}
          >
            {element.activitee.nom}
          </a>
        </li>
      ))}
    </ul>
    <h4 class="text-left text-gray-700 text-xl font-bold mt-5 ml-4 mb-3">
      Corrigés exercices
      {cour.corrigerexercices.map(element =>
        element.competencesevalueesexo.map(el => (
          <div class="inline bg-transparent text-sm text-blue-700 font-semibold border border-blue-300 ml-2 px-3 py-1 rounded-full">
            {el}
          </div>
        ))
      )}
    </h4>

    <ul>
      {cour.corrigerexercices.map(element => (
        <li>
          <a
            class="no-underline text-blue-500 ml-4"
            href={element.corrigerexercice.lien}
          >
            {element.corrigerexercice.nom}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

Cour.propTypes = {
  cour: PropTypes.shape({
    theme: PropTypes.string,
    methodes: PropTypes.array,
    corrigerExercices: PropTypes.array,
    activites: PropTypes.array,
  }),
}

export default Cour
