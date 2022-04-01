module.exports = {
name: "marriage",
aliases: ['mariage','married'],
code: `
$color[1;$getServerVar[color]]
$title[1;**$username[$mentioned[1;yes]] Marriage Stats**]
$description[1;**
<:D_rightarrow:953778843389399131> Married Status: [$getGlobalUserVar[marry;$mentioned[1;yes]]](https://top.gg/bot/$clientid)
<:D_rightarrow:953778843389399131> Married To: [$getGlobalUserVar[mar;$mentioned[1;yes]]](https://top.gg/bot/$clientid)
<:D_rightarrow:953778843389399131> Waiting Status: [$getGlobalUserVar[waiting;$mentioned[1;yes]]](https://top.gg/bot/$clientid)
<:D_rightarrow:953778843389399131> Acceptance Person: [$getGlobalUserVar[accept;$mentioned[1;yes]]](https://top.gg/bot/$clientid)
<:D_rightarrow:953778843389399131> Divorced: [$numberSeparator[$getGlobalUserVar[divorced;$mentioned[1;yes]]]](https://top.gg/bot/$clientid) Times
<:D_rightarrow:953778843389399131> Rejected: [$numberSeparator[$getGlobalUserVar[reject;$mentioned[1;yes]]]](https://top.gg/bot/$clientid) Times
<:D_rightarrow:953778843389399131> Rejector: [$numberSeparator[$getGlobalUserVar[rejector;$mentioned[1;yes]]]](https://top.gg/bot/$clientid) People**]`}