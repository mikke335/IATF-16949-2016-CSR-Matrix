import React from 'react';
import ClauseCard from '../components/ClauseCard';
import CSRList from '../components/CSRList';
import AuditForm from '../components/AuditForm';
import clauses from '../data/clauses.json';

const AuditPage = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Auditoría IATF + CSR</h1>
    {clauses.map(({ clause, description, csr }) => (
      <div key={clause}>
        <ClauseCard clause={clause} description={description} />
        <CSRList csr={csr} />
        <AuditForm clause={clause} />
        <hr />
      </div>
    ))}
  </div>
);

export default AuditPage;