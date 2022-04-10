module.exports = {
name: "addbot",
code: `

$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]  **You have submitted your bot**]
$setuservar[clientid;$findUser[$message[2]]]

$channelsendMessage[$channelid;\`\`\`js
 Submitter: $usertag[$authorid]
 Bot name: $usertag[$findUser[$message[2];no]]
 Prefix: $message[1]
 Bot ID: $message[2]
 Description: $messageslice[2]\`\`\`

https://discord.com/api/oauth2/authorize?client_id=$message[2]&permissions=1479549643895&scope=bot%20applications.commands;no]


$onlyIf[$isbot[$message[2]]==true;$getServerVar[error] You provided an **invalid** botID]

$onlyIf[$message[2]!=;$getServerVar[error] Your command usage was invalid ( \`$getservervar[prefix]$commandname < prefix > < id > < description >\` )]

$onlyIf[$message[1]!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < prefix > < id > < description >**]

$onlyIf[$messageSlice[2]!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < prefix > < id > < description >**]

$onlyforChannels[$getServerVar[abc];$getServerVar[error] You can only add bots in <#$getservervar[abc]>

$onlyIf[$getservervar[abc]!=undefined;$getServerVar[error] Add bot channel has not been set yet]`
}