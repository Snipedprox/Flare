module.exports = {
  name: "embed", 
  aliases: "quote",
  code: `
  $deleteCommand
$author[1;$replaceText[**Quoted text**;*;];$useravatar[$clientid]]
$color[1;$getServerVar[color]]
$description[1;**\`\`\`┏━━━━━━━━━━━━━━┓
$getEmbed[$message[1];$message[2];1;$message[3]]
┗━━━━━━━━━━━━━━━┛\`\`\`**]
$createFile[$getEmbed[$message[1];$message[2];1;$message[3]];quoted.txt]
$suppressErrors[No embed found. \`$getServerVar[prefix]embed channelID messageID type\`]
$onlyIf[$getEmbed[$message[1];$message[2];1;$message[3]]!=;Unable to fetch the embed's content.]
$onlyIf[$message[3]!=;No embed found. \`$getServerVar[prefix]embed channelID messageID type\`]`
}