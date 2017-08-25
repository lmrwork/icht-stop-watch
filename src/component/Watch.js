import React from 'react';
import '../static/css/watch.css';

export const Watch = ({second, color}) => (
  <div className="watch" style={ color ? {...color} : {}}>
    <div className="fill">
      <div className="reference"></div>
      <div className="clock" id="utility-clock">
        <div className="centre">
          <div className="dynamic">
            <div className="anchor" style={{ transform: 'rotate(0deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(6deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(12deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(18deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(24deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(30deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(36deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(42deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(48deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(54deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(60deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(66deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(72deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(78deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(84deg)' }}><div className="element minute-line"></div></div>
            <div className="minute-text" style={{ top: 0, left: '2rem' }}>15</div>
            <div className="anchor" style={{ transform: 'rotate(90deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(96deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(102deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(108deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(114deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(120deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(126deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(132deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(138deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(144deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(150deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(156deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(162deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(168deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(174deg)' }}><div className="element minute-line"></div></div>
            <div className="minute-text" style={{ top: '2rem', left: 0 }}>30</div>
            <div className="anchor" style={{ transform: 'rotate(180deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(186deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(192deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(198deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(204deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(210deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(216deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(222deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(228deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(234deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(240deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(246deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(252deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(258deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(264deg)' }}><div className="element minute-line"></div></div>
            <div className="minute-text" style={{ top: 0, left: '-2rem' }}>45</div>
            <div className="anchor" style={{ transform: 'rotate(270deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(276deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(282deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(288deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(294deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(300deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(306deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(312deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(318deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(324deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(330deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(336deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(342deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(348deg)' }}><div className="element minute-line"></div></div>
            <div className="anchor" style={{ transform: 'rotate(354deg)' }}><div className="element minute-line"></div></div>
            <div className="minute-text" style={{ top: '-2rem', left: 0 }}>60</div>
          </div>
          <div className="expand round circle-1"></div>
          <div className="anchor second" style={ second ? { transform: `rotate(${second*6}deg)` } : { transform: `rotate(0)` } } >
            <div className="element second-hand"></div>
          </div>
          <div className="expand round circle-2"></div>
          <div className="expand round circle-3"></div>
        </div>
      </div>
    </div>
  </div>
);

