module.exports = {
name: "allowcc",
code: `
$color[1;$getservervar[color]]
$description[1;**<:Security_Enabled:954076572321742848> Succesfully enabled custom channels**]

$setServerVar[ccallow;yes]
$setServerVar[catid;$message]
$onlyIf[$message!=;**Specify a valid category id**]
$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage channel](https://top.gg/bot/$clientid) permission**}}]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage channel](https://top.gg/bot/$clientid) permission**}}]`
}