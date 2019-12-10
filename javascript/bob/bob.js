const isSilence = message => message.trim().length === 0;

const isQuestion = message => message.slice(-1) === '?';

const isYelling = message => {

  message.split('');

  for (let i = 0; i < message.length; i++) {

    if (/[A-Z]/.test(message[i]) && /[A-Z]/.test(message[i + 1])) {

      if (message[i] + message[i + 1] === 'OK') {

        continue;

      } else if (message[i] + message[i + 1] + message[i + 2] === 'DMV') {

        return false;

      }

      return true;

    }
  }

  return false;

}

export const hey = (message) => {

  message = message.trim();

  if (isSilence(message)) return 'Fine. Be that way!'; // Saying nothing

  if (isQuestion(message)) {

    return isYelling(message) ? 'Calm down, I know what I\'m doing!' : 'Sure.';

  } else {

    return isYelling(message) ? 'Whoa, chill out!' : 'Whatever.';

  }

};