module.exports = {
name: "nmabrole",
code: `
$setChannelVar[btn$message[1];$findRole[$message[2]];$channelid]
$setChannelVar[rbtn$message[1];$findRole[$message[2]];$channelid]
$deletecommand


$channelSendMessage[$channelid; {
 "content" : "**$messageSlice[2]**",
 "embeds" : "**$messageSlice[2]**",
 "components" : "{actionRow:{button:Click for role:primary:btn$message[1]}{button:Remove role:danger:rbtn$message[1]}}"
 };no]


$onlyIf[$isNumber[$message[1]]==true;$getServerVar[error] You provided an **invalid** number]


$onlyIf[$roleExists[$findRole[$message[2]]]!=false;$getServerVar[error] You provided an **invalid** role]


$argsCheck[>2;$getServerVar[error] **$tolowercase[$commandname] [index] [@role] [message]**]

$onlyIf[$hasPerms[$guildid;$authorid;manageroles]==true;$getServerVar[error] **You are missing the \`manage roles\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;manageroles]==true;$getServerVar[error] **I am missing the \`manage roles\` permission**]`}