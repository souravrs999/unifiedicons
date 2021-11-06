import heroIcons from '../utils/HeroIcons.json';
import fontAwesomeIcons from '../utils/FontAwesomeIcons.json';

export const getAllIcons = () => {
  const allIcons = [...heroIcons, ...fontAwesomeIcons];
  return allIcons;
};
