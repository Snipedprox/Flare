module.exports = {
name: "setprofileimage",
$if: "v4",
aliases: ['setbanner','setbannerimage','setprofilebanner'],
code: `
<:noted:953980420519768105> **$username** Your profile banner has been set
$image[1;$message]
$setGlobalUserVar[pimage;$message]


$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [image linl]\`**}}]
$onlyIf[$isValidLink[$message]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **Invalid image link**}}]`}