export const transform = (oldObject) => {

  const newObject = {};

  for (let property in oldObject) {

    oldObject[property].forEach(value => {

      newObject[value.toLowerCase()] = Number(property); 

    });

  }

  return newObject;

};