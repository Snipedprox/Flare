module.exports = {
name: "marriage",
aliases: ['mariage','married'],
code: `
$color[1;$getServerVar[color]]
$title[1;**$username[$mentioned[1;yes]] Marriage Stats**]
$description[1;**
$getServerVar[rdot] Married Status: [$getGlobalUserVar[marry;$mentioned[1;yes]]](https://top.gg/bot/$clientid)
$getServerVar[rdot] Married To: [$getGlobalUserVar[mar;$mentioned[1;yes]]](https://top.gg/bot/$clientid)
$getServerVar[rdot] Waiting Status: [$getGlobalUserVar[waiting;$mentioned[1;yes]]](https://top.gg/bot/$clientid)
$getServerVar[rdot] Acceptance Person: [$getGlobalUserVar[accept;$mentioned[1;yes]]](https://top.gg/bot/$clientid)
$getServerVar[rdot] Divorced: [$numberSeparator[$getGlobalUserVar[divorced;$mentioned[1;yes]]]](https://top.gg/bot/$clientid) Times
$getServerVar[rdot] Rejected: [$numberSeparator[$getGlobalUserVar[reject;$mentioned[1;yes]]]](https://top.gg/bot/$clientid) Times
$getServerVar[rdot] Rejector: [$numberSeparator[$getGlobalUserVar[rejector;$mentioned[1;yes]]]](https://top.gg/bot/$clientid) People**]`}