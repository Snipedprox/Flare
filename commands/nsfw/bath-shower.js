module.exports = {
name: "bath-shower",
code: `
$image[1;$djsEval[
const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = false);
const pussy = nsfw.getRandomInCategory('bath-shower', "gif"); 
nsfw.getRandomInCategory('bath-shower', "gif").url;yes]]
$color[1;$getservervar[color]]

$onlyIf[$channelNsfw==true;$getServerVar[error] **$username Channel needs to be \`nsfw\`**]`}