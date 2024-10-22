import React, { useEffect, useState } from 'react';

function ServicesPage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/services')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error('Error fetching services content:', error));
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div>
      <h1>{content.title}</h1>
      {content.services.map(service => (
        <div key={service.id}>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ServicesPage;
