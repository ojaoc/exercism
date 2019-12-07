export const hey = (message) => {
  message = message.trim();
  if (message.length < 1) return 'Fine. Be that way!'; // Saying nothing
  const IS_QUESTION = message.slice(-1) === '?';

  message = message.split('');
  let isYelling = false;
  for (let i = 0; i < message.length; i++) {

    if (/[A-Z]/.test(message[i]) && /[A-Z]/.test(message[i+1])) {

      if (message[i] + message[i+1] === 'OK') {
        continue;
      } else if (message[i] + message[i+1] + message[i+2] === 'DMV') {
        break;
      }

      console.log(message[i]);
      isYelling = true;
      break;
    } 
  }

  if (IS_QUESTION) {
    return isYelling ? 'Calm down, I know what I\'m doing!' : 'Sure.';
  }

  return isYelling ? 'Whoa, chill out!' : 'Whatever.';
};