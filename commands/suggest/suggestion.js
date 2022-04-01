module.exports = {
  name: "suggestion", 
  aliases: ['928828282828828abcaiwhs'], 
  usage: "\`=suggestion <note/approve/decline/delete> <message_id> <message>\`", 
  $if: "v4", 
  code: `
$if[$message[1]==note]
$editMessage[$message[2];{newEmbed:{field:Submitter:$get[field]}{field:Suggestion:$get[description]}{color:754Cf4}{footer:$get[footer]}{timestamp}{thumbnail:$get[thumbnail]}{field:Staff Note:  $replaceText[$replaceText[$message;$message[1];];$message[2];]}
{field:Staff Member:<:reddot:953977080054415380> **$userTag[$authorID]** \`[$authorID]\`}};$get[channelid]]
$onlyIf[$getEmbed[$get[channelid];$message[2];1;field3.value]==;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Suggestion has already been noted**}}]
$endif

$if[$message[1]==delete]
$deleteMessage[$message[2];$get[channelid]]
$wait[1s]
$sendMessage[Deleted the suggestion of $userTag[$replaceText[$replaceText[$replaceText[$replaceText[$get[footer];<:reddot:953977080054415380> ;];PENDING | ;];APPROVED | ;];REJECTED | ;]]**.**;no]
$wait[500ms]
$endif

$if[$message[1]==approve]
$clearReactions[$get[channelid];$message[2];all]
$editMessage[$message[2];{newEmbed:
{field:Results:
<:reddot:953977080054415380> **:** **$get[yes]**
<:reddot:953977080054415380> **:** **$get[no]**}
{field:Suggestion:$get[description]}{color:GREEN}{footer:$replaceText[$get[footer];PENDING;APPROVED]}{timestamp}{thumbnail:$get[thumbnail]}{field:Response#COLON#:  $replaceText[$replaceText[$message
;$message[1];];$message[2];]}
{field:Submitter:$get[field]}
{field:<:reddot:953977080054415380> Approved by#COLON#: <@$authorID> \`[$authorID]\`}};$get[channelid]]
$channelsendMessage[$channelid;**Successfully approved the suggestion of $userTag[$replaceText[$replaceText[$replaceText[$replaceText[$get[footer];<:reddot:953977080054415380> ;];PENDING | ;];APPROVED | ;];REJECTED | ;]].**;no]
$onlyIf[$checkContains[$get[footer];APPROVE;DECLINE]==false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **This suggestion has already been accepted / denied**}}]
$deletecommand
$let[no;$reactionCount[$get[channelid];$message[2];953987871319162890]]
$let[yes;$reactionCount[$get[channelid];$message[2];953987845696135188]]
$endif

$if[$message[1]==decline]
$clearReactions[$get[channelid];$message[2];all]
$editMessage[$message[2];{newEmbed:
{field:Results:
<:reddot:953977080054415380> **:** **$get[yes]**
<:reddot:953977080054415380> **:** **$get[no]**}
{field:Suggestion:$get[description]}{color:RED}{footer:$replaceText[$get[footer];PENDING;REJECTED]}{timestamp}{thumbnail:$get[thumbnail]}{field:Response#COLON#:  $replaceText[$replaceText[$message
;$message[1];];$message[2];]}
{field:Submitter:$get[field]}
{field:Rejected by#COLON# <@$authorID> \`[$authorID]\`}};$get[channelid]]
$let[no;$reactionCount[$get[channelid];$message[2];953987871319162890]]
$let[yes;$reactionCount[$get[channelid];$message[2];953987845696135188]]
$channelsendMessage[$channelid;**Successfully declined the suggestion of $userTag[$replaceText[$replaceText[$replaceText[$replaceText[$get[footer];<:reddot:953977080054415380> ;];PENDING | ;];APPROVED | ;];REJECTED | ;]].**;no]
$onlyIf[$checkContains[$get[footer];APPROVE;DECLINE]==false;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Suggestion has already been accepted / denied**}}]
$deletecommand
$endif

$let[footer;$getEmbed[$get[channelid];$message[2];1;footertext]]
$let[field;$getEmbed[$get[channelid];$message[2];1;field1.value]] 
$let[description;$getEmbed[$get[channelid];$message[2];1;field2.value]]
$let[thumbnail;$getEmbed[$get[channelid];$message[2];1;thumbnail]]
$onlyIf[$message[2]!=;]

$if[$checkContains[$toLowercase[$message[1]];decline;approve;note;delete]==false]
$sendMessage[{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [note/approve/decline/delete]\`**}};no]
$endif
$onlyIf[$messageExists[$message[2];$get[channelid]]==true;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [note/approve/decline/delete]\` ( invalid message id )**}}]
$onlyIf[$message[2]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [note/approve/decline/delete]\` [messagid] [message]**}}]
$suppressErrors

$let[channelid;$getServerVar[schannel]]

$onlyIf[$getServerVar[schannel]!=undefined;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **Suggestion channel has not been setup**}}]

$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage messages](https://top.gg/bot/$clientid) permission**}}]`
}