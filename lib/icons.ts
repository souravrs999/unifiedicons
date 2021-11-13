import icons from '../utils/icons.json';

const allIcons = icons;

export const getAllIcons = () => {
  return allIcons;
};

export const getTotalIconCount = () => {
  return Object.keys(allIcons).length;
};
