module.exports = {
  name: "remind-me", 
  aliases: ['remindme','reminder'], 
  code: `

$sendDm[🔔 **Reminder alert** 🔔

$messageslice[1];$authorid]

$wait[$message[1]]

$sendMessage[**I will remind you in \`$message[1]\` with the reminder**
$messageslice[1]]




$onlyif[$isnumber[$replacetext[$replacetext[$replacetext[$replacetext[$message[1];s;;1];m;;1];h;;1];d;;1]]==true;$getServerVar[error] **$username Invalid time \`unit\`**]
$onlyif[$checkcontains[$message[1];s;h;m;d]==true;$getServerVar[error] **$username Invalid time \`unit\` ( expected: \`s\`,\`m\`,\`h\`,\`d\` )**]
$onlyIf[$messageSlice[1]!=;$getservervar[error] **Correct usage:
\`\`\`js
$getServerVar[prefix]$commandname < time > < reminder >\`\`\`**]
$onlyIf[$isUserDMenabled[$authorid]==true;$getServerVar[error] **$usertag You need to enable your dms**]`}