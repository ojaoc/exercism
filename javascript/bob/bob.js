export const hey = (message) => {
  message = message.trim();
  if (message.length < 1) return 'Fine. Be that way!'; // Saying nothing
  const IS_QUESTION = message.slice(-1) === '?';
  const IS_YELLING = message
      .split('')
      .every(item => {
        return item === item.toUpperCase();
      });
  if (IS_QUESTION) {
    return IS_YELLING ? 'Calm down, I know what I\'m doing!' : 'Sure.';
  } else {
    return IS_YELLING ? 'Whoa, chill out!' : 'Whatever.';
  }
};