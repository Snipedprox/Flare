module.exports = {
name: "soundcloud",
code: `
<:xelademonic:952137226203054080> **$playTrack[soundcloud;$message]**

$joinVc
$onlyIf[$voiceID[$authorid]!=0;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username You need to join a vc**}}]

$onlyIf[$voiceID[$authorid]!=undefined;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username You need to join a vc**}}]

$onlyIf[$voiceID[$clientid]!=0;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username I need to join your vc**}}]

$onlyIf[$voiceID[$clientid]!=0;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username I need to join your vc**}}]

$onlyIf[$message!=;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username Speicfy a song**}}]`}