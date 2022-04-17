module.exports = {
name: "aesthetic",
code: `
$image[1;$djsEval[
const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = true);
const pussy = nsfw.getRandomInCategory('aesthetic'); 
nsfw.getRandomInCategory('aesthetic').url;yes]]
$color[1;$getservervar[color]]
$onlyIf[$channelNsfw==true;$getServerVar[error] **$username Channel needs to be \`nsfw\`**]`}