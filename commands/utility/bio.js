module.exports = {
name: "bio",
code: `
$image[1;$getGlobalUserVar[pimage;$get[u]]]
$author[1;$username[$get[u]]'s bio]
$color[1;$getGlobalUserVar[pcolor]]
$description[1;
📋 **Important**
$getServerVar[rdot] **Age: \`$if[$getGlobalUserVar[age;$get[u]]==Not set;$getGlobalUserVar[age;$get[u]];$getGlobalUserVar[age;$get[u]]y old]\`**
$getServerVar[rdot] **Name: \`$getGlobalUserVar[name;$get[u]]\`**
$getServerVar[rdot] **Birthday: \`$getGlobalUserVar[birthday;$get[u]]\`**
$getServerVar[rdot] **Country: \`$getglobaluservar[country;$get[u]]\`**
$getServerVar[rdot] **Gender: \`$getGlobalUserVar[gender;$get[u]]\`**
$getServerVar[rdot] **Nickname: \`$getGlobalUserVar[nickname;$get[u]]\`**
$getServerVar[rdot] **Zodiac sign: \`$getGlobalUserVar[zodiac;$get[u]]\`**

💬 **Extras**
$getServerVar[rdot] **Height: \`$getGlobalUserVar[height;$get[u]]\`**
$getServerVar[rdot] **Hobbies: \`$getGlobalUserVar[hobbies;$get[u]]\`**
$getServerVar[rdot] **Pronouns: \`$getGlobalUserVar[pronouns;$get[u]]\`**
$getServerVar[rdot]**Status: $status[$get[u]]**

📱 **Biography**
$getGlobalUserVar[bio;$get[u]]
$let[u;$findmember[$message;yes]]
`}