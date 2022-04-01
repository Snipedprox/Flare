module.exports = {
name: "poll",
code: `
$color[1;$getServerVar[color]] $author[1;$replaceText[**📊 $username's poll;*;];$useravatar[$clientid]] $description[1;**❔ Question: $splitText[1]

1️⃣ Choice: $splitText[2]

2️⃣ Choice: $splitText[3]**]
$addReactions[2️⃣;1️⃣]

$textSplit[$noMentionMessage;/]

$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [choice] / (choice 1) / (choice 2)\`**}}]

$onlyIf[$hasPerms[$guildID;$clientid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}