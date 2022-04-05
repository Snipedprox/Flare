module.exports = {
name: "setcooldown",
code: `
<a:D_tick:953783189971816530> **Set the cooldown for \`work\` , \`beg\` , \`crime\` , \`slut\` to $message[1]$message[2]**
$setServerVar[ecd;$message[1]$message[2]]
$onlyIf[$tolowercase[$checkContains[$message[1];1;2;3;4;5;6;7;8;9;0]]==true;<:xelamhm:952137241336102912> **$username** Your cooldown must start with a number \`$getservervar[prefix]setcooldown < number > < s / m / h/ d / w >\`]
$onlyIf[$tolowercase[$checkContains[$message[2];s;h;w;d;m]]==true;<:xelamhm:952137241336102912> **$username** Your cooldown must start with a number \`$getservervar[prefix]setcooldown < number > < s / m / h / d / w >\`]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]]`}