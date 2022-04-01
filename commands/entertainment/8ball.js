module.exports = {
  name: '8ball',
  code: `
  $author[1;:3;https://cdn.discordapp.com/emojis/946761781240561714.webp?size=128&quality=lossless]
$description[1;🎱 **Question:** $message 
**Answer: $randomText[Yes!;No.;Maybe!;Hmm.. Ask again later.;Yes! Yes Yes Yes!;No!;Maybe not..;Maybe yes!]**]
$color[1;$getServerVar[color]]
$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [question]\`**}}]
 `
}