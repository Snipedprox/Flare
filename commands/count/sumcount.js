module.exports = {
name: "sumcount",
$if: "v4",
code: `
$color[1;$getservervar[color]]
$description[1;**<:addition:954081541569511474> Successfully added $numberSeparator[$message[1];,] extra numbers**]
$setserverVar[lastcount;$sum[$getserverVar[lastcount];$message[1]]]


$onlyIf[$getServerVar[countchannel]!=0;*{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Counting channel has not been setupped yet**}}]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}