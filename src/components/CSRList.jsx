import React from 'react';

const CSRList = ({ csr }) => (
  <ul>
    {Object.entries(csr).map(([cliente, detalle]) => (
      <li key={cliente}><strong>{cliente}:</strong> {detalle}</li>
    ))}
  </ul>
);

export default CSRList;