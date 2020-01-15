export const score = (string) => {

    const scoreboard = {

        1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
        2: ['d', 'g'],
        3: ['b', 'c', 'm', 'p'],
        4: ['f', 'h', 'v', 'w', 'y'],
        5: ['k'],
        8: ['j', 'x'],
        10: ['q', 'z']

    }

    let splitString = string.split('');
    let finalScore = 0;

    for (let i in splitString) {

        if (/[a-zA-Z]/g.test(splitString[i])) {

            for (let n in scoreboard) {

                if (scoreboard[n].includes(splitString[i].toLowerCase())) {

                    finalScore += Number(n);

                }

            }

        }

    }

    return finalScore;

}