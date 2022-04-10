module.exports = {
name: "set-reward",
$if: "v4",
aliases: "set-levelrole",
code: `
$color[1;$getServerVar[color]]
$footer[1;Executed by $username#$discriminator[$authorID]]
$addTimestamp[1]

$if[$message[2]!=off]
$setServerVar[level$message[1];$findRole[$message[2]]]
$description[1;Successfully setted the role <@&$findRole[$message[2]]> as reward for level **$message[1]**!
When users level up to level **$message[1]** i'll give them that role
**If you want to remove the reward for certain level, just do $getServerVar[prefix]setreward 5 off** (example)]
$onlyIf[$roleExists[$findRole[$message[2]]]==true;**$username** please, type a valid role ID, mention or name, example: $getServerVar[prefix]setreward 5 @role]
$onlyIf[$message[2]!=;**$username** please, type a valid role ID, mention or name, example: $getServerVar[prefix]setreward 5 @role]
$else
$setServerVar[level$message[1];]
$description[Successfully removed the role reward for the level **$message[1]**!
When users level up to level **$message[1]** i won't give them any role]
$endif
$suppressErrors[example: $getServerVar[prefix]setreward 5 @role hhhh]
$onlyIf[$message[2]!=;**$username** please, type a valid role ID, mention or name, example: $getServerVar[prefix]setreward 5 @role]
$onlyIf[$checkContains[$message[1];3;5;10;20;30;40;50;60;70;80;90;100]==true;**$username** please, type a valid level from: **3, 5, 10, 20, 30, 40...100**, example: $getServerVar[prefix]setreward 5 @role]
$onlyPerms[manageroles;**$username** You need manage roles permissions to do this!]
$onlyBotPerms[manageroles;**$username** Sorry, but i need manage roles permissions to do this, make sure to give me that permission!]`

}