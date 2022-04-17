module.exports = {
name: "plrename",
$if: "v4",
code: `
<:zeromusic:955637234290262057> **$username** Changed playlist name to $message
$setGlobalUserVar[plname;$message]


$argsCheck[>0;<:7103zerounderstand:955637255446364201> **$username** Your command usage was invalid ( \`$getservervar[prefix]$commandname < name >\` )]`}