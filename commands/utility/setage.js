module.exports = {
name: "setage",
$if: "v4",
code: `
<:noted:953980420519768105> **$username** Your age has been set to **$messagey**
$setGlobalUserVar[age;$message]

$onlyIf[$isNumber[$message]!=false;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **Age must be a number**}}]
$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [age]\`**}}]
$onlyIf[$message<101;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You can not be older than \`100y\`**}}]`}