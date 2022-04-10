module.exports = {
  name: "suggestion", 
  aliases: ['928828282828828abcaiwhs'], 
  usage: "suggestion <note/approve/decline/delete> <message_id> <message>", 
  $if: "v4", 
  code: `
$if[$message[1]==note]
$editMessage[$message[2];{newEmbed:{field:Submitter:$get[field]}{field:Suggestion:$get[description]}{color:$getServerVar[color]}{footer:$get[footer]}{timestamp}{thumbnail:$get[thumbnail]}{field:Staff Note:  $replaceText[$replaceText[$message;$message[1];];$message[2];]}
{field:Staff Member:$getServerVar[rdot] **$userTag[$authorID]** \`[$authorID]\`}};$get[channelid]]

$onlyIf[$getEmbed[$get[channelid];$message[2];1;field3.value]==;$getServerVar[error] **Suggestion** Already Noted]
$endif

$if[$message[1]==delete]
$deleteMessage[$message[2];$get[channelid]]
$wait[1s]
$sendMessage[Deleted the suggestion of $userTag[$replaceText[$replaceText[$replaceText[$replaceText[$get[footer];$getServerVar[rdot] ;];PENDING | ;];APPROVED | ;];REJECTED | ;]]**.**;no]
$wait[500ms]
$endif

$if[$message[1]==approve]
$clearReactions[$get[channelid];$message[2];all]
$editMessage[$message[2];{newEmbed:
{field:Results:
$getServerVar[rdot] **:** **$get[yes]**
$getServerVar[rdot] **:** **$get[no]**}
{field:Suggestion:$get[description]}{color:GREEN}{footer:$replaceText[$get[footer];PENDING;APPROVED]}{timestamp}{thumbnail:$get[thumbnail]}{field:Response#COLON#:  $replaceText[$replaceText[$message
;$message[1];];$message[2];]}
{field:Submitter:$get[field]}
{field:$getServerVar[rdot] Approved by#COLON#: <@$authorID> \`[$authorID]\`}};$get[channelid]]
$channelsendMessage[$channelid;**Successfully approved the suggestion of $userTag[$replaceText[$replaceText[$replaceText[$replaceText[$get[footer];$getServerVar[rdot] ;];PENDING | ;];APPROVED | ;];REJECTED | ;]].**;no]
$onlyIf[$checkContains[$get[footer];APPROVE;DECLINE]==false;$getServerVar[error] **Suggestion** Already accepted / denied]
$deletecommand
$let[no;$reactionCount[$get[channelid];$message[2];961724963184865291]]
$let[yes;$reactionCount[$get[channelid];$message[2];953977080054415380]]
$endif

$if[$message[1]==decline]
$clearReactions[$get[channelid];$message[2];all]
$editMessage[$message[2];{newEmbed:
{field:Results:
$getServerVar[rdot] **:** **$get[yes]**
$getServerVar[rdot] **:** **$get[no]**}
{field:Suggestion:$get[description]}{color:RED}{footer:$replaceText[$get[footer];PENDING;REJECTED]}{timestamp}{thumbnail:$get[thumbnail]}{field:Response#COLON#:  $replaceText[$replaceText[$message
;$message[1];];$message[2];]}
{field:Submitter:$get[field]}
{field:Rejected by#COLON# <@$authorID> \`[$authorID]\`}};$get[channelid]]
$let[no;$reactionCount[$get[channelid];$message[2];961724963184865291]]
$let[yes;$reactionCount[$get[channelid];$message[2];953977080054415380]]
$channelsendMessage[$channelid;**Successfully declined the suggestion of $userTag[$replaceText[$replaceText[$replaceText[$replaceText[$get[footer];$getServerVar[rdot] ;];PENDING | ;];APPROVED | ;];REJECTED | ;]].**;no]
$onlyIf[$checkContains[$get[footer];APPROVE;DECLINE]==false;$getServerVar[error] **Suggestion** Already accepted / denied]
$deletecommand
$endif

$let[footer;$getEmbed[$get[channelid];$message[2];1;footertext]]
$let[field;$getEmbed[$get[channelid];$message[2];1;field1.value]] 
$let[description;$getEmbed[$get[channelid];$message[2];1;field2.value]]
$let[thumbnail;$getEmbed[$get[channelid];$message[2];1;thumbnail]]
$onlyIf[$message[2]!=;]

$if[$checkContains[$toLowercase[$message[1]];decline;approve;note;delete]==false]
$sendMessage[$getServerVar[error] **Correct usage: \`\`\`js
$tolowercase[$commandname] [note/approve/decline/delete] [messagid] [message]\`\`\`**];no]
$endif
$onlyIf[$messageExists[$message[2];$get[channelid]]==true;$getServerVar[error] **Correct usage: 
\`\`\`js
$tolowercase[$commandname] [note/approve/decline/delete] [messagid] [message] ( invalid message id )\`\`\`**]
$onlyIf[$message[2]!=;$getServerVar[error] **Correct usage: $tolowercase[$commandname] [note/approve/decline/delete] [messagid] [message]**]
$suppressErrors

$let[channelid;$getServerVar[schannel]]

$onlyIf[$getServerVar[schannel]!=undefined;$getServerVar[error] **Suggestion channel** has not been setup yet]

$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing the \`manage messages\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;$getServerVar[error] **I am missing the \`manage messages\` permission**]`
}