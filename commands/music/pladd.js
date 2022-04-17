module.exports = {
  name: "pladd", 
  $if: "v4", 
  code: `
<:zeromusic:955637234290262057> **$username** Added $messageSlice[1] to position $message[1] in your play list
$setGlobalUserVar[p$message[1];$messageSlice[1]]



$onlyIf[$isNumber[$message[1]]==true;<:ZeroWorried:955637230939033660> **$username** You provided an **invalid** number]
$argsCheck[>1;<:7103zerounderstand:955637255446364201> **$username** Your command usage was invalid ( \`$getservervar[prefix]$commandname < index > < song name >\` )]
$onlyIf[$replaceText[$message[1];-;]<=10;<:ZeroWorried:955637230939033660> **$username** You can't add more than 10 songs]`}