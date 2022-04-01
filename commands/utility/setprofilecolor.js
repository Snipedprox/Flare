module.exports = {
name: "setprofilecolor",
$if: "v4",
code: `
<:noted:953980420519768105> **$username** Your bio color has been set to **$message**
$setGlobalUserVar[pcolor;$message]


$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [#hex]\`**}}]
$onlyIf[$isValidHex[$message]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **Hex code is invalid**}}]`}