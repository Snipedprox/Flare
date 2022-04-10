module.exports = {
name: "roleinfo",
code: `
$author[1;Role info;https://cdn.discordapp.com/emojis/946761781345406996.webp?size=56&quality=lossless]
$color[1;$getRoleColor[$get[id]]]
$description[1;**
• Role
<:spaced:946814778393903154>➥ Name » <@&$get[id]>
<:spaced:946814778393903154>➥ ID » $get[id]
<:spaced:946814778393903154>➥ Hex » $getRoleColor[$get[id]]
<:spaced:946814778393903154>➥ Creation » $creationDate[$get[id];time]
<:spaced:946814778393903154>➥ Position » $rolePosition[$get[id]]
• Members
<:spaced:946814778393903154>➥ Size » $numberSeparator[$gettextsplitlength;,]
<:spaced:946814778393903154>➥ Members » $usersWithRole[$findRole[$message];$guildID;mention; , ] 
• Permissions
<:spaced:946814778393903154>➥ Mentionable » $isMentionable[$get[id]]**]


$textSplit[$usersWithRole[$get[id];$guildID;mention;, ];, ]

$let[id;$findRole[$message]]`}