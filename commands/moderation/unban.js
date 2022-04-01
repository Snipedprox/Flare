module.exports = {
name: "unban",
$if: "v4",
code: `
$unban[$findUser[$message;yes];$guildid]
$color[1;$getservervar[color]]
$description[1;**<:blacklist:954025323740143626> Unbanned user \`$username[$findUser[$message]]\`**]


$onlyIf[$isBanned[$findUser[$message;yes]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **That is is not banned**}}]

$if[$getServerVar[staffrole]=={NONE}]

$onlyIf[$hasPerms[$guildid;$authorid;ban]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [ban](https://top.gg/bot/$clientid) permission**}}]


$onlyIf[$hasPerms[$guildid;$clientid;ban]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I am missing the [ban](https://top.gg/bot/$clientid) permission**}}]

$else

$onlyIf[$hasPerms[$guildid;$clientid;ban]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I am missing the [manage server](https://top.gg/bot/$clientid) permission**}}]

$onlyForRoles[$getServerVar[staffrole];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have the staff role**}}]
$endif
`}