/*
      Subscribe My YouTube Channel: @aftab_0_khan

Follow The Channel For More :https://youtube.com/@aftab_0_khan?si=SJ39gPHb1rCWpqCy

Contact Me: https://t.me/GlobalTechInc

GitHub: https://github.com/aftab2683

Credit Aftab khan
 

*/

global.prefa = ['','!','.',',','🐤','🗿'] 
// Setting Contact
global.namaown = "© Aftabkhan"
global.namabot = "Aftabofficial"
global.versisc = "9.0.0"
global.owner = ["923015326254 Aftab khan"]
global.tele = "https://chat.whatsapp.com/Lk5xkMyj70P1ZSgPtd1Fjr"
global.url = "https://youtube.com/@aftab_0_khan?si=SJ39gPHb1rCWpqCy"
global.namastore = "aftabkhan"

// Global Simbol
global.simbol = "ᯤ"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Global Respon
global.mess = {
    success: '𝗗𝗼𝗻𝗲 𝗕𝗿𝗼',
    admin: `\`[ # ]\`This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\`This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\`This Command Can Only Be Used By Owner !`,
    OnlyGrup: `\`[ # ]\`This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\`This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\`Wait a Moment`,
    notregist: `\`[ # ]\`You are not registered in the Bot Database. Please register first`,
    premium: `\`[ # ]\`Premium only" Want Premium? Chat Owner`,
    endLimit: `\`[ # ]\`Your Daily Limit Has Expired, The Limit Will Be Reset Every Hour 00:00 WIB`,
     bugrespon: `\`[ # ]\`𝙒𝙖𝙞𝙩 𝙖 𝙈𝙞𝙣𝙪𝙩𝙚\nCurrently Sending Virus Attack`,
     donebug: `\`[ # ]\` 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴\nVirus Has Been Sent`,
}


// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
