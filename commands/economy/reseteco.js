module.exports = {
name: "reseteco",
$if: "v4",
code: `
$forEachMember[1;{};reset;]
**Resetting money for all user**


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**You do not have the [manage server](https://u.com) permission**}}]`}