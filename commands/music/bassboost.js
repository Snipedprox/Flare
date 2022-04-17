module.exports = {
name: "bassboost",
code: `
$volume[350]

<:zeromusic:955637234290262057> **$username** Succesfully enabled bass boost ( 350% )



$cooldown[30s;<:ZeroWorried:955637230939033660> **$username** You are **still** on cooldown, \`%time\` left]
$onlyIf[$voiceID[$authorid]!=0;<:ZeroWorried:955637230939033660> **$username** You aren't in a voice channel]
$onlyIf[$voiceID[$authorid]!=undefined;<:ZeroWorried:955637230939033660> **$username** You aren't in a voice channel]
$onlyIf[$voiceID[$authorid]!=<:ZeroWorried:955637230939033660> **$username** You aren't in a voice channel]


$onlyIf[$voiceID[$clientid]!=;<:ZeroWorried:955637230939033660> **$username** I am not in a voice channel]
$onlyIf[$voiceID[$clientid]!=undefined;<:ZeroWorried:955637230939033660> **$username** I am not in a voice channel]
$onlyIf[$voiceID[$clientid]!=0;<:ZeroWorried:955637230939033660> **$username** I am not in a voice channel]
$onlyIf[$queueLenth!=0;<:ZeroWorried:955637230939033660> **$username** Queue is empty]
`}