import React from 'react';

const ClauseCard = ({ clause, description }) => (
  <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
    <h3>Cláusula {clause}</h3>
    <p>{description}</p>
  </div>
);

export default ClauseCard;