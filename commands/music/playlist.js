module.exports = {
  name: "playlist", 
  $if: "v4", 
  code: `
$author[1;$getGlobalUserVar[plname];https://cdn.discordapp.com/emojis/946761779604766720.webp?size=56&quality=lossless]
$color[1;$getServerVar[color]]
$description[1;**
1 → \`$getGlobalUserVar[p1]\`
2 → \`$getGlobalUserVar[p2]\`
3 → \`$getGlobalUserVar[p3]\`
4 → \`$getGlobalUserVar[p4]\`
5 → \`$getGlobalUserVar[p5]\`
6 → \`$getGlobalUserVar[p6]\`
7 → \`$getGlobalUserVar[p7]\`
8 → \`$getGlobalUserVar[p8]\`
9 → \`$getGlobalUserVar[p9]\`
10 → \`$getGlobalUserVar[p10]\`**]`}