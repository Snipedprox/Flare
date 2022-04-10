module.exports = {
name: "userinfo",
aliases: ['whois','uinfo','info'],
code: `
$getServerVar[check] **Information about \`$usertag[$get[u]]\`**
$author[1;$usertag[$get[u]]'s account info;$getServerVar[suca]]
$thumbnail[1;$useravatar[$get[u]]]
$color[1;$userRoleColor[$get[u]]]
$description[1;
$getServerVar[rdot] **Joined discord: \`$formatDate[$creationDate[$get[u];ms];L]\`**
$getServerVar[rdot] **Avatar: [download]($useravatar[$get[u]])**
$getServerVar[rdot] **Type: \`$replaceText[$replaceText[$isBot[$get[u]];true;bot];false;human]\`**
$getServerVar[rdot] **Presence:  $replaceText[$replaceText[$replaceText[$replaceText[$status[$get[u]];offline;⚫ Offline];online;🟢 Online];dnd;🔴 Do not disturb];idle;🟡 Idle]**
$getServerVar[rdot] **ID: \`$get[u]\`**
$getServerVar[rdot] **Tag: \`$usertag[$get[u]]\`**
$getServerVar[rdot] **Platform: \`$platform[$get[u]]\`**
$getServerVar[rdot] **Nickname: $nickname[$get[u]]**
$getServerVar[rdot] **Perms: \`\`\`js
$userPerms[$get[u];,]\`\`\`**]
$let[u;$findUser[$message;yes]]`}