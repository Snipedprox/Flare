module.exports = {
name: "role-cooldown",
aliases: "rcd",
usage: "role-cooldown < number > [m/h/d]",
code: `
$author[1;Role cooldown;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Set the cooldown for \`role income\` payout to $message[1]$message[2]]

$setServerVar[rolecd;$message[1]$message[2]]
$onlyIf[$tolowercase[$checkContains[$message[1];1;2;3;4;5;6;7;8;9;0]]==true;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < number > < m h d >\`\`\`]
$onlyIf[$tolowercase[$checkContains[$message[2];h;d;m]]==true;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < number > < m h d >\`\`\`]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **$username** You are missing **\`manage server\`** permission]`}