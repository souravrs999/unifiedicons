export const formatSvgAttributesForReact = (svgString: string) => {
  // Go through the svg string and replace occurances of attributes
  // to react readable form.

  interface attributeType {
    [key: string]: string;
  }

  const replacableAttributes: attributeType = {
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-width': 'strokeWidth',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    class: 'className'
  };
  for (const key in replacableAttributes) {
    svgString.replace(key, replacableAttributes[key]);
  }

  return svgString;
};
