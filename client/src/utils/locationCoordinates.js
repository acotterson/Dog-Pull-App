export const locationCoordinates = {
  "Albany, NY, USA": { x: 810, y: 700 }, // example coordinates; you should replace these with actual values
  "Sacramento, CA, USA": { x: 265, y: 720 },
};

export const getCoordinatesForLocation = (event) => {
  const key = `${event.town}, ${event.state}, ${event.country}`;
  return locationCoordinates[key] || { x: 0, y: 0 }; // return (0, 0) if the location is not found
};
