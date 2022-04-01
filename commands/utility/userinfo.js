module.exports = {
name: "userinfo",
aliases: ['whois','uinfo','info'],
code: `
$author[1;$usertag[$get[u]]'s account info;$useravatar[$get[u]]]
$thumbnail[1;$useravatar[$get[u]]]
$color[1;$getservervar[color]]
$description[1;
<:reddot:953977080054415380> **Joined discord: \`$formatDate[$creationDate[$get[u];ms];L]\`**
<:reddot:953977080054415380> **Avatar: [download]($useravatar[$get[u]])**
<:reddot:953977080054415380> **Type: \`$replaceText[$replaceText[$isBot[$get[u]];true;bot];false;human]\`**
<:reddot:953977080054415380> **Presence:  $replaceText[$replaceText[$replaceText[$replaceText[$status[$get[u]];offline;⚫ Offline];online;🟢 Online];dnd;🔴 Do not disturb];idle;🟡 Idle]**
<:reddot:953977080054415380> **ID: \`$get[u]\`**
<:reddot:953977080054415380> **Tag: \`$usertag[$get[u]]\`**
<:reddot:953977080054415380> **Platform: \`$platform[$get[u]]\`**]
$let[u;$findUser[$message;yes]]`}