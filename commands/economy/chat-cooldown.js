module.exports = {
name: "chat-cooldown",
aliases: "chat-cd",
usage: "chat-cooldown < number > [s/m/h/d/w]",
code: `
$getServerVar[check] **Set the cooldown for \`chattong\` to $message[1]$message[2]**
$setServerVar[chatcd;$message[1]$message[2]]
$onlyIf[$tolowercase[$checkContains[$message[1];1;2;3;4;5;6;7;8;9;0]]==true;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]chat-cooldown < number > < s / m / h/ d / w >\`\`\`]
$onlyIf[$tolowercase[$checkContains[$message[2];s;h;w;d;m]]==true;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]chat-cooldown < number > < s / m / h / d / w >\`\`\`]



$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing the \`manage messages\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managemessages]==true;$getServerVar[error] **I am missing the \`manage messages\` permission**]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]`}