module.exports = {
name:"lrole",
$if: "v4",
code:`$if[$tolowercase[$message[1]]==add]
$setservervar[lrole;$getservervar[lrole]$findrole[$message[3]]/]
$setservervar[lroleorder;$getservervar[lroleorder]$message[2]/]
$color[1;$getservervar[color]]
$description[1;<:checkmark:953987845696135188>  Added **$rolename[$findrole[$message[3]]]** to the level **$message[2]**]
$onlyif[$roleexists[$findrole[$message[3]]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Role does not exist**}}]
$onlyif[$findtextsplitindex[$message[2]]==0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Role is already a level role**}}]
$onlyif[$isnumber[$message[2]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Enter a valid number**}}]
$textsplit[$getservervar[lroleorder];/]
$elseif[$tolowercase[$message[1]]==remove]
$setservervar[lrole;$replacetext[$getservervar[lrole];$advancedtextsplit[$getservervar[lrole];/;$findtextsplitindex[$message[2]]];;1]]
$setservervar[lroleorder;$replacetext[$getservervar[lroleorder];$splittext[$findtextsplitindex[$message[2]]];;1]]
$color[1;$getservervar[color]]
$description[1;<:checkmark:953987845696135188>  Removed the role for the level **$message[2]**]
$onlyif[$findtextsplitindex[$message[2]]!=0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Role not found **}}]
$onlyif[$isnumber[$message[2]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Enter a valid number**}}]
$textsplit[$getservervar[lroleorder];/]
$endelseif
$else
$sendmessage[{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [add/remove] [lvl] [@role]\`**}}]
$endif
$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]

$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Im missing the [manage roles](https://top.gg/bot/$clientid) permission**}}]`}