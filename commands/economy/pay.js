module.exports = {
name:"donate",
aliases:"pay",
usage: "donate < amount > < user >",
code:`
$setUserVar[notif;$getUserVar[notif;$get[user]]\n$usertag[$authorid] paid you $numberSeparator[$get[amount];,]$getservervar[symbol];$get[user]]
$setUserVar[notif;$getUserVar[notif]\n<@$authorid> you paid $usertag[$get[user]] $numberSeparator[$get[amount];,]$getservervar[symbol]]




$sendmessage[$getServerVar[check] **$username** paid **$numberSeparator[$get[amount];,]**$getservervar[symbol] to <@$get[user]> with **$numberSeparator[$sub[$get[tax];$get[amount]];,]**$getservervar[symbol] tax;no]
$setUserVar[cash;$sub[$getUserVar[cash;$authorID];$get[amount]];$authorID]
$setUserVar[cash;$sum[$getUserVar[cash;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]>=10;$getServerVar[error] **$username** You need to pay atleast 10$getservervar[symbol]]
$onlyif[$checkcontains[$get[amount];-]==false;$getServerVar[error] **$username** You can't pay in negative numbers]
$onlyif[$get[amount]<=$getUserVar[cash;$authorID];$getServerVar[error] **$username** You can't pay more than what you have]
$onlyif[$isnumber[$get[amount]]==true;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount > < @user >\`\`\`]
$let[tax;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getUserVar[cash;$authorID];1];max;$getUserVar[cash;$authorID];1]]
$let[amount;$truncate[$sub[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getUserVar[cash;$authorID];1];max;$getUserVar[cash;$authorID];1];$multi[$divide[5;100];$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getUserVar[cash;$authorID];1];max;$getUserVar[cash;$authorID];1]]]]]
$onlyif[$get[user]!=$authorid;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount > < @user >\`\`\`]
$onlyif[$memberexists[$get[user]]==true;$getServerVar[error] **$username** Member doesn't exist]
$onlyIf[$getUserVar[casino;$get[user]]!=unset;$getServerVar[error] **$username** They don't have a casino]
$let[user;$findUser[$message[2];no]]
$onlyIf[$getUserVar[casino]!=unset;$getServerVar[error] **$username** You need to create a casino]
`}
