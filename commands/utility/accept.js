module.exports = {
name: "accept",
aliases: "approve",
code: `
$giveRoles[$guildID;$findMember[$message[2];no];$getServerVar[brole]]
$giveRoles[$guildID;$findMember[$message[1];no];$getServerVar[arole]]

$channelSendMessage[$getServerVar[botLog];$getServerVar[check] <@$findMember[$message[1];no]> Your bot <@$findMember[$message[2];no]> has been accepted;no]

$argscheck[2;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < userID > < botID >**]

$onlyIf[$memberExists[$message[1]]==true;$getServerVar[error] You provided an **invalid** member]

$onlyIf[$memberExists[$message[2]]==true;$getServerVar[error] You provided an **invalid** botID]

$onlyIf[$isbot[$message[2]]==true;$getServerVar[error] You provided an **invalid** botID]

$onlyIf[$getServerVar[arole]!=undefined;$getServerVar[error]** Accepted role has not been set yet**]


$onlyIf[$getServerVar[brole]!=undefined;$getServerVar[error]** Bot role has not been set yet**]


$onlyIf[$getServerVar[botLog]!=undefined;$getServerVar[error] **Bot log has not been set yet**]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;<:ZeroWorried:955637230939033660> **$username** You are missing **\`manage server\`** permission]`}