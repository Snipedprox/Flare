module.exports = {
name: "asian",
code: `
$image[1;$djsEval[
const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = true);
const pussy = nsfw.getRandomInCategory('asian'); 
nsfw.getRandomInCategory('asian').url;yes]]
$color[1;$getservervar[color]]
$onlyIf[$channelNsfw==true;$getServerVar[error] **$username Channel needs to be \`nsfw\`**]`}