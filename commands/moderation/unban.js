module.exports = {
name: "unban",
aliases: "unsnap",
usage: "unban < userID>",
code: `
$unban[$findUser[$message;yes];$guildid]
$color[1;$getServerVar[color]]
$description[1;
**<:blacklist:954025323740143626> Unbanned user \`$username[$findUser[$message]]\`**]

$onlyIf[$isBanned[$findUser[$message;yes]]==true;$getServerVar[error] **$username** That user is not banned]



$onlyIf[$hasPerms[$guildid;$authorid;ban]==true;$getServerVar[error] **You are missing the \`ban\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;ban]==true;$getServerVar[error] **I am missing the \`ban\` permission**]


`}