module.exports = {
  name: "mute",
  $if: "v4",
  code: `$author[1;Member muteed;$useravatar[$clientid]]
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> $username has muted <@$mentioned[1]>**]
$giveRole[$guildid;$mentioned[1];$getServerVar[muterole]]

$onlyIf[$mentioned[1]!={newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to mention a member**}}]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need a higher role**}}]

$onlyIf[$rolePosition[$highestRole[$clientid]]<$rolePosition[$highestRole[$mentioned[1]]];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **My role needs to be higher than theirs ( In position )**}}]
$if[$getServerVar[staffrole]=={NONE}]


$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]

$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> ** am missing the [manage s](https://top.gg/bot/$clientid) permission**}}]
$else

$onlyForRoles[$getServerVar[staffrole];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You nt have the staff role**}}]

$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **I am missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]

  $endif
  $onlyIf[$rolePosition[$highestRole[$clientid]]<$rolePosition[$getServerVar[muterole]];{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **My role needs to be higher than the mute role**}}]
  


$onlyIf[$getServerVar[muterole]!={NONE};{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **The must has not been set yet**}}]
`
}