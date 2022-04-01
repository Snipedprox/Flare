module.exports = {
    Bot: {
    token: "OTU3MTk2NjkzMjk4ODk2OTA2.Yj7Q4w.E4rWi0UyOOiFZaVT33SDwoHqnis", //Add your token here
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