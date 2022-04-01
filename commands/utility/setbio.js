module.exports = {
name: "setbio",
$if: "v4",
code: `
<:noted:953980420519768105> **$username** Your bio has been set to $message
$setGlobalUserVar[bio;$message]


$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [bio]\`**}}]`}