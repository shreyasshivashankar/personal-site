import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.company}</a> - {data.position}</h4>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => {
        const colonIndex = point.indexOf(':');
        if (colonIndex > 0 && colonIndex < 60) {
          return (
            <li key={point}>
              <strong>{point.substring(0, colonIndex)}</strong>
              {point.substring(colonIndex)}
            </li>
          );
        }
        return <li key={point}>{point}</li>;
      })}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Job;
