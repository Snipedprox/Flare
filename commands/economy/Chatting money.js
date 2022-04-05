module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `
$if[$getServerVar[chatchannel]!=undefined]
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[chatpayout]]]
$endif
$cooldown[$getServerVar[chatcd];]
$onlyIf[$channelid==$getservervar[chatchannel];]`
}