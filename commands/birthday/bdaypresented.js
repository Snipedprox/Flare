module.exports = {
name: "$alwaysExecute",
code: `
$if[$getServerVar[prefix]$toLowerCase[$stringStartsWith[$message;bday]]==true;

$setUserVar[bdayclaim;enabled]
$wait[$humanizeMS[$parsetime[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowerCase[$message];minute;m];day;d];week;w];year;y];seconds;s]]]]
$onlyIf[$hasroles[$guildid;$authorid;$getservervar[present]]==false;]
$onlyIf[$getServerVar[bdaychannel]!=0;]
$suppressErrors]`}