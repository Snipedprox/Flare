module.exports = [{
name: "bday",
$if: "v4",
code: `
$setTimeOut[bday;$humanizeMS[$parsetime[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowerCase[$message];minute;m];day;d];week;w];year;y];seconds;s]]];{
"id" : "$authorid",
"uid" : "$authorid",
"gid" : "$guildid"}]
$setUserVar[bday;$datestamp]

$color[1;$getservervar[color]]
$description[1;**<:cattybirthday:954086853043183626> Ive set your birthday to\`$humanizeMS[$parsetime[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowerCase[$message];minute;m];day;d];week;w];year;y];seconds;s]]]\`**]


$onlyIf[$hasroles[$guildid;$authorid;$getservervar[present]]==false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You shoudlnt be that greedy you already have your birthday role**}}]
$onlyIf[$getServerVar[bdaychannel]!=0;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Birthday channel has not been setupped yet**}}]
$suppressErrors[{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You need to specify time like \`1s , 1m , 1d , 1w\`**}}]`
},{
type: "timeout",
name: "bday",
code: `
$if[$getUserVar[bdayclaim]==disabled;
$setUserVar[bdayclaim;enabled;$get[id]]

$channelSendMessage[$getServerVar[bdaychannel;$timeoutdata[gid]];<@$timeoutdata[id]> {newEmbed: {color:$getServerVar[color]} {description:**Happy birthday**}}]


$let[id;$timeoutdata[uid]]]

`}] 