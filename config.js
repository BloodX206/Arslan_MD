const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR094ZUdaeE9UNlZ1dnhFbncrV3BOYTVRR2pBQ1B1NEkrVEJ4V0pzVWRHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBYWmJpYzcxNmlhL3hiMTI1OTFRS3hqN0EzWVdma0MrTWtnTWRXNVdVUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSXZwRTAwRW9xc1c2WjV5bmFNeWxGQW9NNjNyR0JBa01sNHE2T3p4ZTNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwenkwRiswSVZpdHNMN0wzc0o0TXBIQzZxeVdZb0QvS2lIS3BQTHpjUUNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPbmw2WmRPWWJTSFRyRmpvK01XeUNHWVZKQStIWWEwcXBSbzg3dm1QRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYwQ2RxQjZIdHN0TWEyUlpHR09sZTFOT0NBUm1ZZG03dkN6ZkszWVRwM009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0d5ak8vQ2lhUExLOUhLalc0Ky9NR2FrRDQ1Qzc4dVVyZzVuU3EvdVVrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzlvdkR5WlF3cXpoYXIvaDdKQnZJUHN4dTh2ZCtrMzRSNmZDOFFRc214OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5qZ2srNFE1YXNLOTBEelE0RmVneGE1VTdyWkJhUm9xdE5SeEVkVjh5M2Y5VlpjVitHUnhHcUdYem00RStkR1luUVA3NEZpa1NodTFNTGpkTElwZ2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiI2WktZeHgxOVVubmFqYm94WkhtQWtWMEZKY1Z6UlR1c0psUXp1ckw2VjdVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJWSFRGQ1ZLViIsIm1lIjp7ImlkIjoiOTIzMDczNjYwNDc5OjM5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTEwNTM1Nzk4NDY4NjMzOjM5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDY1cWYwRUVJSFQ5c1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNGF4ZTdERXQza0MyQVdVMHFaTXk2bjRRYkhYU1BmRWY5akRHUHcxbENocz0iLCJhY2NvdW50U2lnbmF0dXJlIjoib0lBcStDVnZSSm9veGViUGtGSUU4Y3VmUktCVFVVWEFoY3BCVUVqeUh4bVFDc2Vyb0NwQzcvK2hzSlgyVXBWM2lYOGo5anFzQVczdjdCdWFrdVFMQkE9PSIsImRldmljZVNpZ25hdHVyZSI6Ink4eEJPWThFZk9lQ1JVdzRndGpXcWU2cGJrZFVNTW00KzZJTmZ4SWpaQVhkb1lYOVFrNTFIcStZR2VCOWovSjM1TDM2Q0RpSGxkd2NjWjNVSG5BeWl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDczNjYwNDc5OjM5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVHc1h1d3hMZDVBdGdGbE5LbVRNdXArRUd4MTBqM3hIL1l3eGo4TlpRb2IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTE2MzAxMiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝐘𝐎𝐔𝐑 𝐒𝐓𝐀𝐓𝐔𝐒 𝐒𝐄𝐄𝐍 𝐈𝐍 5𝐆 𝐒𝐏𝐄𝐄𝐃 > 𝐒𝐏𝐈𝐃𝐄𝐈 𝐁𝐎𝐓 𝐙𝐎𝐍𝐄",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/hybyf5.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𓆩𝙎𝙥𝙞𝙙𝙚𝙞ʬ𓆪",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "𓆩𝙎𝙥𝙞𝙙𝙚𝙞ʬ𓆪",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923073660479",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𓆩𝙎𝙥𝙞𝙙𝙚𝙞ʬ𓆪",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 SpIdiEe*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://https://files.catbox.moe/ksci8e.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*𓆩𝙎𝙥𝙞𝙙𝙚𝙞ʬ𓆪*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923073660479",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
