import React from 'react'
import PropTypes from 'prop-types'

/**
 * Représente les différent sujet aborté dpour une classe
 * @param {*} Les données d'un cour 
 */
const Cour = ({ data }) => (
<div class="box">
{data.map(cour => (
    <h1 class="title">${cour.theme}</h1>
))}

</div>
);

Cour.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        theme: PropTypes.string,
        methodes: PropTypes.array,
        corrigerExercices: PropTypes.array,
        activites: PropTypes.array,
      })
    ),
  }