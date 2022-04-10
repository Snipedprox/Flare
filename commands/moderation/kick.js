module.exports = {
name:"kick",
aliases: "boot",
usage: "kick < userID > < reason >",
code: ` $kick[$findMember[$message[1];yes];$guildID;0;$if[$messageslice[1]==;No reason provided;$messageslice[1]]]
$author[1;Member kicked;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** kicked user \`$userTag[$findMember[$message[1];yes]]\`
Reason: $if[$messageslice[1]==;No reason provided;$messageslice[1]]]

 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]];$getServerVar[error] **$username** You can't kick that user]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$authorID];$getServerVar[error] **$username** They have the same role as me]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]];$getServerVar[error] **$username** They have a higher role than you]

 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$clientID];$getServerVar[error] **$username** They have a higher role than me or the same role as me]

 $onlyIf[$findMember[$message[1];yes]!=$ownerID;$getServerVar[error] **$username** You can't kick the server owner]

 $onlyIf[$findMember[$message[1];yes]!=$authorID;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < reason >\`\`\`**]

 $onlyIf[$findMember[$message[1];yes]!=$clientID;$getServerVar[error] **$username** You can't kick me]




$onlyIf[$hasPerms[$guildid;$authorid;kick]==true;$getServerVar[error] **$username** You are missing **\`kick\`** permission]
$onlyIf[$hasPerms[$guildid;$clientid;kick]==true;$getServerVar[error] **$username** I am missing **\`kick\`** permission]

$argsCheck[>0;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < reason >\`\`\`]
`}