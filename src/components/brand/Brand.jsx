import React from 'react';
// import { FaBeer } from 'react-icons/fa';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { SiTelegram, SiCoinmarketcap } from 'react-icons/si';
// import { atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <a href="http://asas" target="_blank" rel="noopener noreferrer">
        <button className="btn" type="button">
          <strong><AiOutlineGithub /></strong>
          <div id="container-stars">
            <div id="stars">.</div>
          </div>
          <div id="glow">
            <div className="circle">.</div>
            <div className="circle">.</div>
          </div>
        </button>
      </a>
    </div>
    <div>
      <a href="http://asas" target="_blank" rel="noopener noreferrer">
        <button className="btn" type="button">
          <strong><AiOutlineTwitter className="twiiter" /></strong>
          <div id="container-stars">
            <div id="stars">.</div>
          </div>
          <div id="glow">
            <div className="circle">.</div>
            <div className="circle">.</div>
          </div>
        </button>
      </a>
    </div>
    {/* <div>
      <a href="http://asas" target="_blank" rel="noopener noreferrer">
        <button className="btn" type="button">
          <strong><SiInstagram className="instagram" /></strong>
          <div id="container-stars">
            <div id="stars">.</div>
          </div>
          <div id="glow">
            <div className="circle">.</div>
            <div className="circle">.</div>
          </div>
        </button>
      </a>
    </div> */}
    <div>
      <a href="http://asas" target="_blank" rel="noopener noreferrer">
        <button className="btn" type="button">
          <strong><SiTelegram className="telegram" /></strong>
          <div id="container-stars">
            <div id="stars">.</div>
          </div>
          <div id="glow">
            <div className="circle">.</div>
            <div className="circle">.</div>
          </div>
        </button>
      </a>
    </div>
    <div>
      <a href="http://asas" target="_blank" rel="noopener noreferrer">
        <button className="btn" type="button">
          <strong><SiCoinmarketcap className="marketcap" /></strong>
          <div id="container-stars">
            <div id="stars">.</div>
          </div>
          <div id="glow">
            <div className="circle">.</div>
            <div className="circle">.</div>
          </div>
        </button>
      </a>
    </div>
  </div>
);

export default Brand;
