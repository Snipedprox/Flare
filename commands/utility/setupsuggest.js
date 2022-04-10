module.exports = {
name: "setupsuggest",
usage: "setupsuggest < #channel >",
code: `
$author[1;Suggestion channel set;https://images-ext-1.discordapp.net/external/yqI36lWljGkYOLAhmgc6u3YVk5zP--SgpOdwljSmdK4/https/i.ibb.co/5TCYr8h/success.png]
$color[1;$getServerVar[color]]
$description[1;**The suggestion channel has been set to <#$mentionedChannels[1;yes]>**]
$setServerVar[schannel;$mentionedChannels[1;yes]]

$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}