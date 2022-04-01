module.exports = {
name: "transcript",
$if: "v4",
code: `
$tranScript
$onlyIf[$getChannelVar[ticket]!=$channelID;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <a:cross:953779059756789781> **Channel is not a ticket**}}]`}