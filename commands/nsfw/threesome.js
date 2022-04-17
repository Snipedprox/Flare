module.exports = {
name: "threesome",
code: `
$image[1;$djsEval[
const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = true);
const pussy = nsfw.getRandomInCategory('threesome'); 
nsfw.getRandomInCategory('threesome').url;yes]]
$color[1;$getServerVar[color]]


$onlyIf[$channelNsfw==true;$getServerVar[error] **$username Channel needs to be \`nsfw\`**]`}