export const age = (planet, ageInSeconds) => {
  let orbitalPeriod; //in Earth years!
  const EARTH_ORBITAL_SECONDS = 31557600;

  switch (planet) {
    case 'mercury':
      orbitalPeriod = 0.2408467;
      break;

    case 'venus':
      orbitalPeriod = 0.61519726;
      break;

    case 'earth':
      orbitalPeriod = 1;
      break;

    case 'mars':
      orbitalPeriod = 1.8808158;
      break;

    case 'jupiter':
      orbitalPeriod = 11.862615;
      break;

    case 'saturn':
      orbitalPeriod = 29.447498;
      break;

    case 'uranus':
      orbitalPeriod = 84.016846;
      break;

    case 'neptune':
      orbitalPeriod = 164.79132;
      break;

    default:
      throw new Error("Please enter a valid planet. Pluto is not a planet.");
  }

  const RESULT = ageInSeconds / (orbitalPeriod * EARTH_ORBITAL_SECONDS);
  return Math.round(RESULT * 100) / 100;
  // This will return the age in Earth years, rounded to two decimal places. 
};