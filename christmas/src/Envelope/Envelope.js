import React from 'react';
import './Envelope.css';

function Envelope() {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <div className="envelope" onClick={toggleOpen}>
        <div className={`flap ${isOpen ? "open" : ""}`}></div>
        <div className={`envelope ${isOpen ? "open" : ""}`}></div>
        {isOpen && (
          <div className="card">
            Your message here
          </div>
        )}
      </div>
    );
  }

export default Envelope