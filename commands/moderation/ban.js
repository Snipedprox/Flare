module.exports = {
name:"ban",
aliases: ['thanos','snap','gtfo'],
usage: "ban < userID > < reason >",
code: ` $ban[$findMember[$message[1];yes];$guildID;0;$if[$messageslice[1]==;No reason provided;$messageslice[1]]]
$author[1;Member banned;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username** banned user \`$userTag[$findMember[$message[1];yes]]\`
Reason: $if[$messageslice[1]==;No reason provided;$messageslice[1]]]

 $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]];$getServerVar[error] **$username** You can't ban that user]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$authorID];$getServerVar[error] **$username** They have the same role as me]
 $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]];$getServerVar[error] **$username** They have a higher role than you]

 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$clientID];$getServerVar[error] **$username** They have a higher role than me or the same role as me]

 $onlyIf[$findMember[$message[1];yes]!=$ownerID;$getServerVar[error] **$username** You can't ban the server owner]

 $onlyIf[$findMember[$message[1];yes]!=$authorID;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < reason >\`\`\`**]

 $onlyIf[$findMember[$message[1];yes]!=$clientID;$getServerVar[error] **$username** You can't ban me]




$onlyIf[$hasPerms[$guildid;$authorid;ban]==true;$getServerVar[error] **You are missing the \`ban\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;ban]==true;$getServerVar[error] **I am missing the \`ban\` permission**]

$argsCheck[>0;$getServerVar[error] **Correct usage: \`\`\`js
$getservervar[prefix]$commandname < @user > < reason >\`\`\`**]
`}