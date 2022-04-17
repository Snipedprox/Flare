module.exports = {
    name: "avatar", 
    prototype: 'slash',
    type: 'interaction', 
    code: `$interactionReply[$memberAvatar[$guildID;$replaceText[$interactionData[options.data[0].value];undefined;$authorID]]]
    
$onlyBotPerms[embedlinks;{
    "content": "I need \`EMBED_LINKS\` permission.",
    "options":{
        "interaction" : true
        }
    }
]`
}