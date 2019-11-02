//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
    const timeStamp = date.getTime() + 10 ** 12; 
    /* In the variable above, we have 10**12 instead of 10**9 because it is a "GigaMilisecond" and not a "GigaSecond" */
    return new Date(timeStamp);
};