module.exports = [{
name: "bday",
$if: "v4",
aliases: "setbday",
usage: "bday < time >",
code: `
$setTimeOut[bday;$humanizeMS[$parsetime[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowerCase[$message];minute;m];day;d];week;w];year;y];seconds;s]]];{
"id" : "$authorid",
"uid" : "$authorid",
"gid" : "$guildid"}]
$setUserVar[bday;$datestamp]

$author[1;Birthdate;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**$username**  You have set your birthday to\`$humanizeMS[$parsetime[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowerCase[$message];minute;m];day;d];week;w];year;y];seconds;s]]]\`]


$onlyIf[$hasroles[$guildid;$authorid;$getservervar[present]]==false;$getServerVar[error] **$username** You already claimed your present]
$onlyIf[$getServerVar[bdaychannel]!=0;$getServerVar[error] **$username** Birthday channel has not been set yet]
$onlyIf[$message!=;$getServerVar[error] **$username** You provided an **invalid** time]`
},{
type: "timeout",
name: "bday",
code: `
$if[$getUserVar[bdayclaim]==disabled;
$setUserVar[bdayclaim;enabled;$get[id]]

$channelSendMessage[$getServerVar[bdaychannel;$timeoutdata[gid]];<@$timeoutdata[id]> We would like to wish you a happy birthday


$let[id;$timeoutdata[uid]]]

`}] 