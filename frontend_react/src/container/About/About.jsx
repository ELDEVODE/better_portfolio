import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const abouts = [
  {
    title: 'Frontend Development', description: 'I am a good Frontend developer.', imgUrl: ''
  },
  {
    title: 'Web Development', description: 'I am a good web developer.', imgUrl: ''
  }
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that 
        <span> Good Design</span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">

      </div>
    </>
  );
};
export default About;
