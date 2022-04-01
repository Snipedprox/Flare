module.exports = {
name: "setheight",
$if: "v4",
code: `
<:noted:953980420519768105> **$username** Your height has been set to **$message**
$setGlobalUserVar[height;$message]


$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [beight]\`**}}]
$onlyIf[$tolowercase[$checkContains[$message;1;2;3;4;5;6;7;8;9;0;';ft;f;t]]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont have that height**}}]
`}