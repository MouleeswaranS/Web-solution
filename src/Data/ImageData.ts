// src/data/images.js
import craftingWebsites from '../Assets/web.png';
import digitalMarketing from '../Assets/digital.jpg';
import finalYearProject from '../Assets/finalyear.webp';
import videoEditing from '../Assets/Video-Editing.jpg';

const images = [
  {
    src: craftingWebsites,
    alt: 'Crafting Websites',
    title: 'Custom Web Solutions',
    description:
      'Delivering handcrafted websites tailored for modern businesses and engaging user experiences.',
    textColor: 'text-black', // dark for light background
  },
  {
    src: digitalMarketing,
    alt: 'Digital Marketing',
    title: 'Digital Marketing',
    description:
      'Boost your online presence with SEO, social media strategies, and performance-driven campaigns.',
    textColor: 'text-black',
  },
  {
    src: finalYearProject,
    alt: 'Final Year Projects',
    title: 'Student Projects',
    description:
      'Professional guidance and solutions for final year academic projects across all domains.',
    textColor: 'text-white',
  },
  {
    src: videoEditing,
    alt: 'Video Editing',
    title: 'Creative Video Editing',
    description:
      'Stunning edits, transitions, and storytelling visuals for promotional and personal content.',
    textColor: 'text-black',
  }
];

export default images;






