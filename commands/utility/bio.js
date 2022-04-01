module.exports = {
name: "bio",
code: `
$image[1;$getGlobalUserVar[pimage;$get[u]]]
$author[1;$username[$get[u]]'s bio]
$color[1;$getGlobalUserVar[pcolor]]
$description[1;
📋 **Important**
<:reddot:953977080054415380> **Age: \`$if[$getGlobalUserVar[age;$get[u]]==Not set;$getGlobalUserVar[age;$get[u]];$getGlobalUserVar[age;$get[u]]y old]\`**
<:reddot:953977080054415380> **Name: \`$getGlobalUserVar[name;$get[u]]\`**
<:reddot:953977080054415380> **Birthday: \`$getGlobalUserVar[birthday;$get[u]]\`**
<:reddot:953977080054415380> **Country: \`$getglobaluservar[country;$get[u]]\`**
<:reddot:953977080054415380> **Gender: \`$getGlobalUserVar[gender;$get[u]]\`**
<:reddot:953977080054415380> **Nickname: \`$getGlobalUserVar[nickname;$get[u]]\`**
<:reddot:953977080054415380> **Zodiac sign: \`$getGlobalUserVar[zodiac;$get[u]]\`**

💬 **Extras**
<:reddot:953977080054415380> **Height: \`$getGlobalUserVar[height;$get[u]]\`**
<:reddot:953977080054415380> **Hobbies: \`$getGlobalUserVar[hobbies;$get[u]]\`**
<:reddot:953977080054415380> **Pronouns: \`$getGlobalUserVar[pronouns;$get[u]]\`**
<:reddot:953977080054415380> **Status: $status[$get[u]]**

📱 **Biography**
$getGlobalUserVar[bio;$get[u]]
$let[u;$findmember[$message;yes]]
`}