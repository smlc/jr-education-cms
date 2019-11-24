import React from "react"
import PropTypes from "prop-types"

/**
 * Représente les différent sujet aborté dpour une classe
 * @param {*} Les données d'un cour
 */
const Cour = ({ cour }) => (
  <div class="box">
    <h1 class="title has-text-centered">{cour.theme}</h1>
    {cour.methodes.map(methode => (
      <h1 class="has-text-left">{methode}</h1>
    ))}
    {cour.corrigerExercices.map(corrigerExercice => (
      <h1 class="has-text-right">{corrigerExercice}</h1>
    ))}
    {cour.activites.map(activite => (
      <h1 >{activite}</h1>
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
