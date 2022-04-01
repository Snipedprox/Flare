module.exports = {
name: "filter",
$if: "v4",
aliases: "filters",
code: `
$author[1;$replaceText[**Song filters**;*;];https://cdn.discordapp.com/emojis/946761779604766720.webp?size=56&quality=lossless]
$color[1;$getServerVar[color]]
$description[1;**bassonly, clarity, echo, flanger, deep, haas, nightcore, phaser, pitch, phone, pulsator, reverb, tempo, tremolo, subboost, vaporwave, vibrato , deeser**]


$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[djrole]]==true;{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**You do not have the <@&$findRole[$getServerVar[djrole]]> role**}}]


$onlyIf[$getServerVar[djrole]!={BLANKEDOUT};{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**DJ role needs to get set in order for the usage of thisa command**}}]`}
