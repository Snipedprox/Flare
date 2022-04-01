module.exports = {
name: "$alwaysExecute",
$if: "v4",
code: `

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$createThread[$channelID;$username;MAX;public;$splitText[1];yes];1;];2;];3;];4;];5;];6;];7;];8;];9;];0;]

$textSplit[$sendMessage[<@$authorid>{newEmbed:{author:Thread created:$useravatar[$clientid]}
{color:$getservervar[color]}
{description:**<:idcard:953972368672452608> $username has created a thread and wanted to talk about **
||$message||}};yes]; ]

$onlyForChannels[$getServerVar[vchannel];]
$suppressErrors`}