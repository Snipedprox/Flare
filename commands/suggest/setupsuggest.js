module.exports = {
name: "setupsuggest",
code: `
<:reddot:953977080054415380>**The suggestion channel has been set to <#$mentionedChannels[1;yes]>**
$setServerVar[schannel;$mentionedChannels[1;yes]]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}