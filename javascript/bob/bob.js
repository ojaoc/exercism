export const hey = (message) => {
  message = message.trim();

  const IS_SILENCE = message.length === 0;
  if (IS_SILENCE) return 'Fine. Be that way!'; // Saying nothing

  const IS_QUESTION = message.slice(-1) === '?';

  const IS_YELLING = () => {
    message = message.split('');

    for (let i = 0; i < message.length; i++) {
  
      if (/[A-Z]/.test(message[i]) && /[A-Z]/.test(message[i+1])) {
  
        if (message[i] + message[i+1] === 'OK') {
          continue;
        } else if (message[i] + message[i+1] + message[i+2] === 'DMV') {
          break;
        }

        return true;
      } 
    }  
  }
  
  if (IS_QUESTION) {
    return IS_YELLING() ? 'Calm down, I know what I\'m doing!' : 'Sure.';
  }

  return IS_YELLING() ? 'Whoa, chill out!' : 'Whatever.';
};