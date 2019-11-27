import React from "react"
import PropTypes from "prop-types"

/**
 * Représente les différent sujet aborté pour une classe
 * Les données pour créer un cour sont récupéré depuis le **.md
 * @param {*} Les données d'un cour
 */
const Cour = ({ cour }) => (
  <div class="box">
    <h1 class="title has-text-centered">{cour.theme}</h1>
    <h4 class="title is-4 has-text-left">Méthodes</h4>
    {cour.methodes.map(element => (
      <ul>
        <li>
          <a href={element.methode.lien}>{element.methode.nom}</a>
        </li>
      </ul>
    ))}
    <h4 class="title is-4 has-text-left">Activitées</h4>
    {cour.activitees.map(element => (
      <ul>
        <li>
          <a href={element.activitee.lien}>{element.activitee.nom}</a>
        </li>
      </ul>
    ))}
    <h4 class="title is-4 has-text-left">Corrigés exercices</h4>
    {cour.corrigerexercices.map(element => (
      <ul>
        <li>
          <a href={element.corrigerexercice.lien}>
            {element.corrigerexercice.nom}
          </a>
        </li>
      </ul>
    ))}
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
