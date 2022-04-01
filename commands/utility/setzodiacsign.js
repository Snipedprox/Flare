module.exports = {
name: "setzodiacsign",
$if: "v4",
aliases: ['setzodiac','zodiac'],
code: `
<:noted:953980420519768105> **$username** Your zodiac sign has been set to **$message**
$setGlobalUserVar[zodiac;$message]


$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [zodiac]\`**}}]
$onlyIf[$tolowercase[$checkContains[$message;aries;taurus;gemini;cancer;leo;virgo;libra;scorpio;sagittarius;capricorn;aquarius;pisces ]]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **Invalid zodiac sign**}}]`}