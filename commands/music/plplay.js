module.exports = {
name: "plplay",
$if: "v4",
code: `
<:zeromusic:955637234290262057> **$username** $playTrack[youtube;$getGlobalUserVar[p$message]] from playlist

$onlyIf[$getGlobalUserVar[p$message]!=Not changed;<:ZeroWorried:955637230939033660> **$username** You provided an **empty** index]

$cooldown[30s;<:ZeroWorried:955637230939033660> **$username** You are **still** on cooldown, \`%time\` left]
$onlyIf[$voiceID[$authorid]!=0;<:ZeroWorried:955637230939033660> **$username** You aren't in a voice channel]
$onlyIf[$voiceID[$authorid]!=undefined;<:ZeroWorried:955637230939033660> **$username** You aren't in a voice channel]
$onlyIf[$voiceID[$authorid]!=<:ZeroWorried:955637230939033660> **$username** You aren't in a voice channel]


$onlyIf[$voiceID[$clientid]!=;<:ZeroWorried:955637230939033660> **$username** I am not in a voice channel]
$onlyIf[$voiceID[$clientid]!=undefined;<:ZeroWorried:955637230939033660> **$username** I am not in a voice channel]
$onlyIf[$voiceID[$clientid]!=0;<:ZeroWorried:955637230939033660> **$username** I am not in a voice channel]

$argscheck[>0;<:7103zerounderstand:955637255446364201> **$username** Your command usage was invalid ( \`$getservervar[prefix]$commandname < index >\` )]`}