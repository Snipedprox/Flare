module.exports = {
name: "lb-cash",
aliases: "lbcash",
usage: "lb-cash",
code: `
$getServerVar[check] **$servername's credits leaderboard**
$color[1;$getServerVar[color]]
$description[1;**
$userLeaderboard[$guildID;cash;asc;<:topggDotPink:960279787073589268> {top} → {tag} → {value}$getServerVar[symbol]]**]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]`}