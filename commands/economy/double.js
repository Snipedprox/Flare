module.exports = {
name: "double",
$if: "v4",
code: `
$if[$randomText[f;f;f;f;f;f;f;f;f;f;f;f;f;f;f;w;w;w;w;w;w;w;w;f;f;f;f;w]==w]
$setUserVar[cash;$sum[$getUserVar[cash];$getUserVar[cash]]]
**<:xelapresent:951923632811163689> You won double or nothing x$numberSeparator[$getUserVar[cash];,]$getServerVar[symbol]**

$else

$if[$randomText[f;f;f;f;f;f;f;f;f;f;f;f;f;f;f;w;w;w;w;w;w;w;w;f;f;f;f;w]==f]
$setUserVar[cash;0]
**<:xelapresent:951923632811163689> You lost double or nothing -$numberSeparator[$getUserVar[cash];,]$getServerVar[symbol]**
$endif
$endif
$onlyIf[$getUserVar[cash]>=1;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont have that much $getservervar[symbol]**}}]
$onlyIf[$getUserVar[casino]!=unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need to create a casino**}}]`}