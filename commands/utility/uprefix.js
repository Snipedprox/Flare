module.exports = {
name: "uprefix",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:D_rightarrow:953778843389399131> I changed your local custom prefix to \`$replaceText[$message; ;]\`**]
$setUserVar[uprefix;$replaceText[$message; ;]]


$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [prefix]\`**}}]
`}