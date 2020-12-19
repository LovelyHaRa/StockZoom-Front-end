export const skipText = (text, displayLength) =>
  text.length < displayLength ? text : `${text.slice(0, displayLength)}...`;

export default null;
