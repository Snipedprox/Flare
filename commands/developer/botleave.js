module.exports = {
name: "botleave",
code: `

$botLeave[$message]

$onlyif[$charCount[$message]>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [guildID]\`**}}]

$onlyForIDs[$botOwnerID;896846485805744168;696698254770831421;]`}