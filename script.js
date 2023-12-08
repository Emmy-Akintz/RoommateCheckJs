const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const participantInfo = [
    ["Emmanuel", '2203827'],
    ["Miracle", '2203817'],
    ["Collins", '2203797'],
    ["Moses", '2203833']
]

console.log("This is to find out if you're a participant of Dorcas Hall E103.")

rl.question('Enter your reg no: ', (answer) => {
    const userRegno = answer
    // console.log(`Here is your reg no ${userRegno}`)

    const index = getParticipantIndex(userRegno)

    if (index !== -1) {
        const removedUser = participantInfo.splice(index, 1)[0]
        console.log(`Welcome ${removedUser[0]}`);
        console.log(`You're a member of Dorcas Hall room E103, and here are your roommates' names:`);

        for (let a = 0; a < participantInfo.length; a++) {
            console.log(`${participantInfo[a][0]}`);
        }

        // console.log(`Removed user: ${removedUser}`);
    } else {
        console.log(`You're not a member of Dorcas Hall room E103`);
    }

    rl.close
})

function getParticipantIndex(regno) {
    for (let i = 0; i < participantInfo.length; i++) {
        if (participantInfo[i][1] === regno) {
            return i
        }
    }
    return -1
}