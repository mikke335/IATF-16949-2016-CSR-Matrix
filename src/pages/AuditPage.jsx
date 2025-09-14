import React from 'react';
import ClauseCard from '../components/ClauseCard';
import CSRList from '../components/CSRList';
import AuditForm from '../components/AuditForm';
import clauses from '../data/clauses.json';


const AuditPage = () => (
  <div>
    <h2>Auditoría IATF + CSR</h2>
    {clauses.map(({ clause, description, csr }, index) => (
      <ClauseCard
        key={index}
        clause={clause}
        description={description}
        csr={csr}
      />
    ))}
    <AuditForm />
  </div>
);


export default AuditPage;