module.exports = {
name: "antiswear",
$if: "v4",
code: `
  $description[1;**
<:D_Moderator:954025326349000705> To enable the antiswear you should run \`$getServerVar[prefix]swearconfig defaultwords <true/false>\`**
]
$color[1;$getServerVar[color]] 

$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You are missing the [manage messages](https://top.gg/bot/$clientid) permission**}}]`}