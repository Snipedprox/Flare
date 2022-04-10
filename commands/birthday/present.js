module.exports = [{
name: "present",
aliases: "bdayclaim",
usage: "present",
code: `
$setUserVar[bdayclaim;disabled]
$setTimeOut[bdayrole;12h;{
"id" : "$authorid",
"gid" : "$guildid"}]
$giverole[$guildid;$authorid;$getservervar[present]]
$author[1;Claimed present;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username**  Claimed the role \`$rolename[$getServerVar[present]]\` for 12h]

$onlyIf[$getServerVar[present]!=0;$getServerVar[error] **$username** Birthday role has not been set yet]
$onlyIf[$getuservar[bdayclaim]!=disabled;$getServerVar[error] **$username** It is not your birthday]`
},{
type: "timeout",
name: "bdayrole",
code: `
$takeRole[$timeoutdata[gid];$timeoutdata[id];$getServerVar[present;$timeoutdata[gid]]]`}]