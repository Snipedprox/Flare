module.exports = {
name: "reseteco",
aliases: "reseteconomy",
usage: "reseteco",
code: `
$forEachMember[1;{};reset;]
$getServerVar[check] **$username** Resetting money for all user


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **$username** You are missing **\`manage server\`** permission]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl]==false;$getServerVar[error] **$username** You are economy blacklisted]`}