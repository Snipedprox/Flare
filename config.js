module.exports = {
    Bot: {
    token: "xxxxxxxxx", //Add your token here
    prefix: ["$getServerVar[prefix]","<@!$clientID>","<@$clientID>","$getUserVar[uprefix]","$getGlobalUserVar[cprefix]"],
    intents: "all",
    database: {
         type:'default',
        db:require('dbdjs.db'),
        path:"./db/",
        tables:["main"],
        promisify:false
    },

    respondOnEdit: {
        commands: true
    },
    suppressAllErrors: true
    }

} 
