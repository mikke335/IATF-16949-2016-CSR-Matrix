import React from 'react';

const CSRList = ({ csr }) => (
  <div>
    <h5>Requisitos específicos del cliente:</h5>
    <ul>
      {Object.entries(csr).map(([cliente, detalle], index) => (
        <li key={index}><strong>{cliente}:</strong> {detalle}</li>
      ))}
    </ul>
  </div>
);

export default CSRList;
