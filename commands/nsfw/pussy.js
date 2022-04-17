module.exports = {
name: "pussy",
code: `
$image[1;$djsEval[
const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = false);
const pussy = nsfw.getRandomInCategory('pussy', "gif"); 
nsfw.getRandomInCategory('pussy', "gif").url;yes]]
$color[1;$getServerVar[color]]


$onlyIf[$channelNsfw==true;$getServerVar[error] **$username Channel needs to be \`nsfw\`**]`}