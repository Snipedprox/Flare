module.exports = {
name: "autorole",
$if: "v4",
code: `
$if[$toLowerCase[$message[1]]==]
$color[1;$getServerVar[color]]
$description[1;
<:D_rightarrow:953778843389399131> **\`$getServerVar[prefix]autorole add < role >\`: adds a role to people who join the server.
<:D_rightarrow:953778843389399131> **\`$getServerVar[prefix]autorole remove\`: disabled auto role.
<:D_rightarrow:953778843389399131> **\`$getServerVar[prefix]autorole addbot < role >\`: adds a role to bots who join the server.
<:D_rightarrow:953778843389399131> **\`$getServerVar[prefix]autorole removebot < role >\`: disables autorole for bots.**]

$else

$if[$tolowercase[$message[1]]==add]
$color[1;$getservervar[color]]
$description[1;**<:checkmark:953987845696135188> <@&$get[id]> will be added to users who join the guild**]
$setServerVar[aru;$get[id]]
$setServerVar[ars;enabled]



$onlyIf[$roleExists[$findRole[$message[2]]]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Role doesnt exist**}}]

$let[id;$findrole[$message[2]]]

$else

$if[$tolowercase[$message[1]]==remove]
$color[1;$getservervar[color]]
$description[1;**<:reddx:953987871319162890> Auto role has been disabled**]
$setServerVar[ars;disabled]

$onlyIf[$getServerVar[ars]!=disabled;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Module already disabled**}}]

$else

$if[$tolowercase[$message[1]]==removebot]
$color[1;$getservervar[color]]
$description[1;**<:reddx:953987871319162890>**Auto role has been disabled for bots**]
$setServerVar[arsb;disabled]

$onlyIf[$getServerVar[ars]!=disabled;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Module already disabled**}}]

$else

$if[$tolowercase[$message[1]]==addbot]
$color[1;$getservervar[color]]
$description[1;**<:reddx:953987871319162890> <@&$get[id]> will be added to bots who join the guild**]
$setServerVar[arub;$get[id]]
$setServerVar[arsb;enabled]



$onlyIf[$roleExists[$findRole[$message[2]]]!=false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Role doesnt exist**}}]

$let[id;$findrole[$message[2]]]
$endif
$endif
$endif
$endif
$endif

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]

$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]`}
