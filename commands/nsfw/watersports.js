module.exports = {
name: "watersports",
code: ` $image[1;$djseval[const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = false);
const pussy = nsfw.getRandomInCategory('watersports', "gif"); 
nsfw.getRandomInCategory('watersports', "gif").url;yes]]
$color[1;$getServerVar[color]]


$onlyIf[$channelNsfw==true;$getServerVar[error] **$username Channel needs to be \`nsfw\`**]`}