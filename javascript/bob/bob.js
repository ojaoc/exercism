const isSilence = message => message.trim().length === 0;

const isQuestion = message => message.slice(-1) === '?';

const isYelling = message => {

  message = message
    .split('')
    .filter(item => {

      return /[a-zA-Z]/.test(item);

    });

  if (message.length === 0) {

    return false;

  } else {

    return message.every(item => item.toUpperCase() === item);

  }

}

export const hey = message => {

  message = message.trim();

  if (isSilence(message)) return 'Fine. Be that way!'; // Saying nothing

  if (isQuestion(message)) {

    return isYelling(message) ? 'Calm down, I know what I\'m doing!' : 'Sure.';

  } else {

    return isYelling(message) ? 'Whoa, chill out!' : 'Whatever.';

  }

};