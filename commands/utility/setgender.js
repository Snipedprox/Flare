module.exports = {
name: "setgender",
$if: "v4",
code: `
<:xelanoted:952137244821561357> **$username** Your gender has been set to **$message**
$setGlobalUserVar[gender;$message]


$onlyIf[$message!=;<:xelamhm:952137241336102912> **$username** You need to specify your gender]
$onlyIf[$tolowercase[$checkContains[$message;male;female]]==true;<:xelamhm:952137241336102912> **$username** Your gender can only be **male** or **female**]`}