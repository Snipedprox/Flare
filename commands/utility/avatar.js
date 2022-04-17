module.exports = {
name: "avatar",
aliases: ['av','pfp'],
code: `
$replaceText[$replaceText[$userAvatar[$findUser[$message;yes]];.webp;.png];.jpg;.png]`}