module.exports = {
name: "marry",
code: `
**<a:1279_Flying_Hearts_Red:954040182905131038> <@$mentioned[1]> i think <@$authorid> would like to marry you, will you accept?**

$setGlobalUserVar[waiting;2;$authorID]

$setGlobalUserVar[waiting;2;$mentioned[1;yes]]

$setGlobalUserVar[accept;1;$mentioned[1]]

$onlyIf[$getGlobalUserVar[marry;$mentioned[1]]==single;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **They are already married**}}]
$onlyIf[$getGlobalUserVar[waiting;$authorID]<1;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are being waited to get married by somebody**}}]
$onlyIf[$getGlobalUserVar[marry;$authorID]==single;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are already married**}}]
$onlyIf[$authorID!=$mentioned[1];{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [@user]\`**}}]
$onlyIf[$mentioned[1]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [@user]\`**}}]`}