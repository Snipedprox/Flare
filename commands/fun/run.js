module.exports = {
name: "run",
$if: "v4",
code: `
**$username** You have run $sum[1;$getUserVar[run];1]Km in total 
$setUserVar[run;$sum[$getUserVar[run];1]]
$globalCooldown[4m;<:ZeroWorried:955637230939033660> **$username** You are **still** on cooldown, \`%time\` left]

`
}
