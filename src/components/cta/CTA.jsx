import React, { useEffect, useState } from 'react';
import './cta.css';
import 'animate.css';
import $ from 'jquery';

function CTA() {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = $('#your-section-id'); // Replace 'your-section-id' with the actual ID of your section
      const sectionOffset = section.offset().top;
      const sectionHeight = section.height();
      const windowHeight = $(window).height();
      const scrollTop = $(window).scrollTop();

      // Check if the section is within the viewport
      if (scrollTop > sectionOffset - windowHeight + sectionHeight / 2) {
        setIsSectionVisible(true);
      } else {
        setIsSectionVisible(false);
      }
    };

    // Attach the scroll event listener
    $(window).on('scroll', handleScroll);

    return () => {
      // Clean up the scroll event listener when the component is unmounted
      $(window).off('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // After 3 seconds, trigger the drop-down animation if the section is visible
    if (isSectionVisible) {
      setTimeout(() => {
        $('#your-section-id').slideDown(); // Replace 'your-section-id' with the actual ID of your section
      }, 0);
    }
  }, [isSectionVisible]);

  return (
    <div className="gpt3__cta" id="your-section-id" style={{ display: 'none' }}>

      <embed src="https://app.uniswap.org/#/swap" id="buy" style={{ width: '100%', height: '100vh' }} />
      {/* animate__animated animate__bounce */}
      {/* <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
      </div> */}
    </div>
  );
}

export default CTA;
