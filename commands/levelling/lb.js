module.exports = {
name: "lb",
aliases: "lvllb",
usage: "lb",
code: `
$getServerVar[check] **$servername's levels leaderboard**
$author[1;$servername's leaderboard;https://cdn.discordapp.com/emojis/946761781345406996.webp?size=56&quality=lossless]
$color[1;$getServerVar[color]]
$description[1;**
$userLeaderboard[$guildID;level;asc;<:topggDotPink:960279787073589268> {top} - {tag} → {value};10]**]`}

