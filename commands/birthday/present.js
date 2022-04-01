module.exports = [{
name: "present",
code: `
$setUserVar[bdayclaim;disabled]
$setTimeOut[bdayrole;12h;{
"id" : "$authorid",
"gid" : "$guildid"}]
$giverole[$guildid;$authorid;$getservervar[present]]
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> Claimed the role \`$rolename[$getServerVar[present]]\` for 12h**]

$onlyIf[$getServerVar[present]!=0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Birthdya role has not been set yet**}}]
$onlyIf[$getuservar[bdayclaim]!=disabled;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Error while claiming ( it probaly is not your birthday )**}}]`
},{
type: "timeout",
name: "bdayrole",
code: `
$takeRole[$timeoutdata[gid];$timeoutdata[id];$getServerVar[present;$timeoutdata[gid]]]`}]