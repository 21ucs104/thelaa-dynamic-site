import React, { useEffect, useState } from 'react';

function AboutPage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/about')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error('Error fetching about content:', error));
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
}

export default AboutPage;
