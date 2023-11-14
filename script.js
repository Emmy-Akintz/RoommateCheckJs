const participantInfo = [
    ["Emmanuel", '2203827'],
    ["Miracle", '2203817'],
    ["Collins", '2203797'],
    ["Moses", '2203833']
]

function isMember(regno) {
    for (let i = 0; i < participantInfo.length; i++) {
        if (participantInfo[i][1] === regno) {
            return true
        }
    }
    return false
}

alert("This is to find out if you're a participant of Dorcas Hall E103.")
const userRegno = prompt("Enter your reg number: ")
document.write(`Here is your reg no ${userRegno}<br>`)
if (isMember(userRegno)) {
    document.write(`You're a member of Dorcas Hall room E103 and here are your room mates names:<br>`)
    for (let a = 0; a < participantInfo.length; a++) {
        document.write(`${participantInfo[a][0]}<br>`)
    }
} else {
    document.write(`You're not a member of Dorcas Hall room E103.<br>`)
}