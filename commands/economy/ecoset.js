module.exports = {
name: "ecoset",
$if: "v4",
aliases: "ecosett",
usage: "ecoset [emote]",
code: `$if[$toLowerCase[$message[1]]==emote]
$getServerVar[check] **$username** Changed economy emote to ( $messageSlice[1] )
$setServerVar[symbol;$messageSlice[1]]
$argsCheck[>0;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < symbol >\`\`\`]
$endif

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]`}