module.exports = {
name: "serverinfo",
code: `
$author[1;Server info;https://cdn.discordapp.com/emojis/946761781345406996.webp?size=56&quality=lossless]
$color[1;$getVar[color]]
$description[1;**
• Main
<:spaced:946814778393903154>➥ Name » [$servername](https://u.com)
<:spaced:946814778393903154>➥ ID » [$guildid](https://u.com)
<:spaced:946814778393903154>➥ Icon » [Download here]($servericon)
<:spaced:946814778393903154>➥ Member count » [$numberSeparator[$membersCount;,]](https://u.com)
⮑ Presence ⮐
<:spaced:946814778393903154>➥ Online » [$numberSeparator[$membersCount[$guildID;online;no];,]](https://u.com)
<:spaced:946814778393903154>➥ Offline » [$numberSeparator[$membersCount[$guildID;offline;no];,]](https://u.com)
<:spaced:946814778393903154>➥ Dnd » [$numberSeparator[$membersCount[$guildID;dnd;no];,]](https://u.com)
<:spaced:946814778393903154>➥ Idle » [$numberSeparator[$membersCount[$guildID;idle;no];,]](https://u.com)**]
`}