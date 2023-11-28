import React, { useState } from 'react';
import './Envelope.css';

function Envelope() {
  const [openFlaps, setOpenFlaps] = useState([]);
  const [isImageSpinning, setIsImageSpinning] = useState(false);
  const [isImageShrunk, setIsImageShrunk] = useState(false);

  const handleFlapClick = (flap) => {
    if (!openFlaps.includes(flap)) {
      setOpenFlaps([...openFlaps, flap]);
    }
  };
  const handleImageClick = () => {
    if (!isImageShrunk) {
      setIsImageSpinning(!isImageSpinning);
    } else {
      setIsImageShrunk(false);
    }
  };

  const handleImageDoubleClick = () => {
    setIsImageShrunk(!isImageShrunk);
    setIsImageSpinning(false); // Ensure spinning is turned off when double-clicked
  };

  return (
    <div className="envelope">
      <div className={`flap topflap ${openFlaps.includes('topflap') ? 'open' : ''}`} onClick={() => handleFlapClick('topflap')}></div>
      <div className={`flap rightflap ${openFlaps.includes('rightflap') ? 'open' : ''}`} onClick={() => handleFlapClick('rightflap')}></div>
      <div className={`flap leftflap ${openFlaps.includes('leftflap') ? 'open' : ''}`} onClick={() => handleFlapClick('leftflap')}></div>
      <div className={`flap bottomflap ${openFlaps.includes('bottomflap') ? 'open' : ''}`} onClick={() => handleFlapClick('bottomflap')}></div>
      <div className='card'>
        <img 
          src={process.env.PUBLIC_URL + '/iron.png'}
          alt="Waffle iron" 
          className={`image ${isImageSpinning ? 'spin' : ''} ${isImageShrunk ? 'shrink' : ''}`}
          onClick={handleImageClick}
          onDoubleClick={handleImageDoubleClick}
        />
        <img
          src={process.env.PUBLIC_URL + '/note.png'}
          alt="Notes"
          className="image note"
        />
        <div className='inside-card'></div>
        </div>
    </div>
  );
}

export default Envelope;