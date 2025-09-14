import React, { useState } from 'react';

const AuditForm = ({ clause }) => {
  const [hallazgo, setHallazgo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hallazgo registrado para cláusula ${clause}: ${hallazgo}`);
    setHallazgo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={hallazgo}
        onChange={(e) => setHallazgo(e.target.value)}
        placeholder="Describe el hallazgo..."
        rows={3}
        style={{ width: '100%' }}
      />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default AuditForm;