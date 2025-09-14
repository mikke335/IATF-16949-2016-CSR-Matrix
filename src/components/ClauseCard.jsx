import React from 'react';
import CSRList from './CSRList';
import AuditForm from './AuditForm';

const ClauseCard = ({ clause, description, csr }) => (
  <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
    <h4>Cláusula {clause}</h4>
    <p>{description}</p>
    {csr && <CSRList csr={csr} />}
    <AuditForm clause={clause} />
  </div>
);

export default ClauseCard;
