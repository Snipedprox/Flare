module.exports = ({
name: "disable-gtn",
code: `
$color[1;$getServerVar[color]]
$description[1;<:876127257867993138:946761779969667112> Disabled. . .]
$color[1;$getServerVar[color]]
$setservervar[gtntries;0]
$setservervar[guess_the_number_channel;Not set]
$setservervar[winning_number;0]
$suppressErrors
$onlyperms[managechannels;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage channels](https://top.gg/bot/$clientid) permission**}}]`
})
