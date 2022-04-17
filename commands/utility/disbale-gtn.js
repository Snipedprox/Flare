module.exports = ({
name: "disable-gtn",
code: `
$author[1;Guess the number disabled;https://images-ext-1.discordapp.net/external/rJPv1FoZ6gwjfeM-caDcWryQFqx9-MkYvSSOJzPE3hQ/https/i.imgur.com/7EllBlG.png]
$color[1;$getServerVar[color]]
$description[1;Guess the number has been disabled]
$setservervar[gtntries;0]
$setservervar[guess_the_number_channel;Not set]
$setservervar[winning_number;0]
$suppressErrors
$onlyperms[managechannels;$getServerVar[error] **You are missing \`manage channels\` permission**]`
})
