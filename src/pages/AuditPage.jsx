import React from 'react';
import ClauseCard from '../components/ClauseCard';
import CSRList from '../components/CSRList';
import AuditForm from '../components/AuditForm';
import clauses from '../data/clauses.json';


const AuditPage = () => (
  <div>
    <h2>Auditoría IATF + CSR</h2>
    
{Array.isArray(clauses) && clauses.map(({ Cláusula, Descripción, CSR }, index) => (
  <ClauseCard
    key={index}
    clause={Cláusula}
    description={Descripción}
    csrList={<CSRList csr={CSR} />}
  />
))}

    <AuditForm />
  </div>
);

export default AuditPage;