module.exports = {
name:"$alwaysExecute",
code:`$reactionCollector[$channelId;$splittext[1];everyone;10m;<:gifting:949696444015726632>;claim;yes;{};]



$textsplit[$sendmessage[**React to the <:gifting:949696444015726632> to earn up to $numberSeparator[$splittext[2];,]$getServerVar[symbol]**;yes]; ]
$textsplit[$getservervar[ra];/]
$onlyif[$random[1;69]==47;]

$onlyif[$checkcontains[$getservervar[rs];true]==true;]
$onlyif[$isbot[$authorid]==false;]`}