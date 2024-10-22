import React, { useState } from 'react';
import './LayoutBuilder.css';

function LayoutBuilder() {
  const [components, setComponents] = useState([]);

  // Adding component by dragging and dropping
  const addComponent = (component) => {
    setComponents([...components, component]);
  };

  return (
    <div className="layout-builder">
      <div className="sidebar">
        <button onClick={() => addComponent('Header')}>Header</button>
        <button onClick={() => addComponent('TextBlock')}>Text Block</button>
        <button onClick={() => addComponent('ImageBlock')}>Image Block</button>
      </div>

      <div className="canvas">
        {components.map((component, index) => (
          <div key={index} className="component">{component}</div>
        ))}
      </div>

      <div className="properties-sidebar">
        <h3>Properties</h3>
        {/* Add design properties and customization here */}
      </div>
    </div>
  );
}

export default LayoutBuilder;
