module.exports = {
name: "prefix",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:D_rightarrow:953778843389399131> I changed the server prefix to \`$replaceText[$message; ;]\`**]
$setServerVar[prefix;$replaceText[$message; ;]]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]
$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [prefix]\`**}}]
`}