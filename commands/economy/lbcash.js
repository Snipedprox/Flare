module.exports = {
name: "lb-cash",
code: `
$color[1;$getServerVar[color]]
$description[1;**
$userLeaderboard[$guildID;cash;asc;<:D_rightarrow:953778843389399131> {top} → {tag} → {value}$getServerVar[symbol]]**]
$onlyIf[$getUserVar[casino]!=unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need to create a casino**}}]`}