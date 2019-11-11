export const age = (planet, ageInSeconds) => {
  const EARTH_ORBITAL_SECONDS = 31557600;
  const ORBITAL_PERIOD = {
    mercury: 0.2408467,

    venus: 0.61519726,

    earth: 1,

    mars: 1.8808158,

    jupiter: 11.862615,

    saturn: 29.447498,

    uranus: 84.016846,

    neptune: 164.79132
  }

  const RESULT = ageInSeconds / (ORBITAL_PERIOD[planet] * EARTH_ORBITAL_SECONDS);

  return Math.round(RESULT * 100) / 100;
  // This will return the age in Earth years, rounded to two decimal places. 
};