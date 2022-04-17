module.exports = {
name: "femboy",
code: `
$image[1;$djsEval[
const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = false);
const femboy = nsfw.getRandomInCategory('lgbt-femboy', "png"); 
nsfw.getRandomInCategory('lgtbt-femboy', "png").url;yes]]
$color[1;$getServerVar[color]]


$onlyIf[$channelNsfw==true;$getServerVar[error] **$username Channel needs to be \`nsfw\`**]`}