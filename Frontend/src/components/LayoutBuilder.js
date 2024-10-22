// src/components/LayoutBuilder.js
import React, { useState } from 'react';
import './LayoutBuilder.css';

const LayoutBuilder = () => {
    const [components, setComponents] = useState([]);

    const addComponent = (type) => {
        setComponents([...components, { type, id: Date.now() }]);
    };

    return (
        <div className="layout-builder">
            <div className="sidebar">
                <button onClick={() => addComponent('Header')}>Header</button>
                <button onClick={() => addComponent('TextBlock')}>Text Block</button>
                <button onClick={() => addComponent('ImageBlock')}>Image Block</button>
            </div>
            <div className="canvas">
                {components.map((component) => (
                    <div key={component.id} className={`component ${component.type}`}>
                        {component.type}
                    </div>
                ))}
            </div>
            <div className="properties-sidebar">
                <h3>Properties</h3>
                {/* Add design properties and customization here */}
            </div>
        </div>
    );
};

export default LayoutBuilder;
