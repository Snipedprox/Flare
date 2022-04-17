module.exports = {
name: "setzodiacsign",
aliases: ['setzodiac','zodiac'],
code: `
<:7103zerounderstand:955637255446364201> **$username** Your zodiac sign has been set to **$message**
$setGlobalUserVar[zodiac;$message]


$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < zodiac >]
$onlyIf[$tolowercase[$checkContains[$message;aries;taurus;gemini;cancer;leo;virgo;libra;scorpio;sagittarius;capricorn;aquarius;pisces ]]==true;$getServerVar[error] You provided an **invalid** zodiac sign]`}