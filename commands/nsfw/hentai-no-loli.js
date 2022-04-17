module.exports = {
name: "hentai-no-loli",
code: `
$image[1;$djsEval[
const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = false);
const pussy = nsfw.getRandomInCategory('hentai-no-loli', "gif"); 
nsfw.getRandomInCategory('hentai-no-loli', "gif").url;yes]]
$color[1;$getServerVar[color]]


$onlyIf[$channelNsfw==true;$getServerVar[error] **$username Channel needs to be \`nsfw\`**]`}