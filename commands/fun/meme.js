module.exports = {
name: "meme",
code: `
$color[1;$getServerVar[color]]
$image[1;$jsonRequest[https://api.popcat.xyz/meme;image]]`}