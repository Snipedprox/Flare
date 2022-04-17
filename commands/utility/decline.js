module.exports = {
name: "decline",
code: `
$channelSendMessage[$getServerVar[botLog];<@$findMember[$message[1];no]> {newEmbed: {description:**
Your bot \`$usertag[$getuservar[clientid;$findMember[$message[1];no]]]\` has been declined
Reason: $messageSlice[1]**} {color:$getServerVar[color]}};no]


$argscheck[>2;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < userID > < reason >**]
$onlyIf[$memberExists[$message[1]]==true;$getServerVar[error] You provided an **invalid** membert]
$onlyIf[$getServerVar[arole]!=undefined;$getServerVar[error] Accepted role has not been set yet]
$onlyIf[$getServerVar[brole]!=undefined;$getServerVar[error] Bot role has not been set yet]
$onlyIf[$getServerVar[botLog]!=undefined;$getServerVar[error] Bot log has not been set yet]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing \`manage server\` permission**]`}