module.exports = {
name: "ecoconfig",
code: `
$color[1;$getServerVar[color]]
$description[1;**
<:D_rightarrow:953778843389399131> Emote: $getServerVar[symbol]
<:D_rightarrow:953778843389399131> \`ecoset emote < emote >\` - Change the economy currency emote

When adding new messages to your \`work\`,\`crime\`,\`slut\`,\`beg\` command using \`{amount}\` displays how much they earned and using \`{symbol}\` displays the currency symbol**]


$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}