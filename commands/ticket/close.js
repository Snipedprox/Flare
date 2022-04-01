module.exports = {
name: "close",
$if: "v4",
code: `
$deleteChannel[$channelid]

$onlyIf[$getChannelVar[ticket]!=$channelID;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **This channel is not a ticket**}}]`}