module.exports = {
name: "cprefix",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:D_rightarrow:953778843389399131> I changed your custom prefix to \`$replaceText[$message; ;]\`**]
$setGlobalUserVar[cprefix;$replaceText[$message; ;]]


$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [prefix]\`**}}]
`}