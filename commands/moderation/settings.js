module.exports = {
  name: 'settings',
  aliases: ['setting', 's'],
  code: `
  $author[1;My settings;$useravatar[$clientid]]
  $thumbnail[1;$userAvatar[$clientid]] $description[1;**To configure a setting \`$getservervar[prefix]config < setting > < true / false >\`**

\`\`\`js
Available settings\`\`\`

**\`$getServerVar[prefix]config antiswear\` / Block people from swearing*]
$color[1;$getServerVar[color]]
`
}