module.exports = {
name: "server",
$if: "v4",
code: `
$if[$toLowerCase[$message[1]]==icon]
$color[1;$getServerVar[color]]
$image[1;$servericon]
$else
$if[$toLowerCase[$message[1]]==info]
$author[1;$replaceText[**Server info**;*;];$useravatar[$clientid]]
$color[1;$getServerVar[color]]
$description[1;**┏━━━━━━━━━━━━━━┓


> Information
Name: $servername
ID: \`$guildID\`
Owner: <@$ownerID> ( \`$ownerID\` )
Roles: $numberSeparator[$rolecount;,]
Members: $numberSeparator[$memberscount;,]

📅 Creation
\`$creationdate[$guildid;date]\`
┗━━━━━━━━━━━━━━━┛**]
$else
$if[$toLowerCase[$message[1]]==settings]
$author[1;$replaceText[**Server settings**;*;];$useravatar[$clientid]]
$color[1;$getServerVar[color]]
$description[1;**┏━━━━━━━━━━━━━━┓
📊 Suggestions: ------ \`$getServerVar[prefix]setupsuggest #channel\`
💐 Welcome: ------ \`$getServerVar[prefix]welcome #channel\`
🍂 Leave set: ------ \`$getServerVar[prefix]leave #channel\`
┗━━━━━━━━━━━━━━━┛**]
$else
$author[1;$replaceText[**Error occured**;*;];$useravatar[$clientid]]
$color[1;$getServerVar[color]]
$description[1;**┏━━━━━━━━━━━━━━┓
Wrong usage! did you \`$getServerVar[prefix]server icon / info /settings\`
┗━━━━━━━━━━━━━━━┛**]
$endif
$endif
$endif`}
