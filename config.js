const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xBakdGUk5KQnluSGltZFVmbjlvNzZEYW1MTFBDOGRqb0xmRmdLSi9YWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjJNNnNWZ2dTSjl1ZXRKSEZ5bENSNFQ4cXdlOWxmYUV0Y3VQQU0wN08zaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQnd3WVZISW1zYkoyR1VqL1VwalQxUWYyc3RraVhCQytDelREKzJXd0U0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaVU1SUXkyQU1MRmxRVWhOTnlIZ085V01rWlVFMDk4RFR2allpaVp0akh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRHNHpSU1ZCRHEyK1RYamxkM2Y4ZjVPVkQ2WmU2VDB6WEswdkx3NmE2VlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFMaWt4Q0Q3ZzRzUTEyS2JQalArN0NqSGgzZStybEFpSHhqNm5JNFBOMEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xmVlIrRTlTdVZ0OGk0S1kyZVR2VzZscGlqUEsrR2IzdzhSckJpNUVuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FIMGxtOWloZFVmd29CTXE5c2FvS0pBM0d6aTFWb1F1TzY2eSsxVXhqdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZYUk96YXlZWjdma3RIQk1qYXJPV2dMb1NGNzBZSHVkRjBKUjRydm1mdldweHFuRDk5Y3k2Um9TNkk1RW1qaU1SenB2dlgydEF5SXRKVzEwdHV2Z0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6IkRUeXQweFRaTHAzSE9WUUlCSEFlWU5qYTQrVjZ2OGZxYkswMGlqRkNoS2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDczNjYwNDc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFGNjJEQkIyOTdFMEU4NDI2MkU2RjE1OTY1MkQ1QzVFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUwMTY4NDd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkZBVE42TTdHIiwibWUiOnsiaWQiOiI5MjMwNzM2NjA0Nzk6MzhAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMTA1MzU3OTg0Njg2MzM6MzhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMMjVxZjBFRUlmZDdjUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0YXhlN0RFdDNrQzJBV1UwcVpNeTZuNFFiSFhTUGZFZjlqREdQdzFsQ2hzPSIsImFjY291bnRTaWduYXR1cmUiOiI5N050ckhUTXJQbm13K1BndWQ4d0Zvd3FRa3RvUnZtVHlFa21MMHkyRnhtZXRscHVxeVZZR1JRUGNyK2hkN2RCVmNFWitBeXVkZVZsZVVDZThjeS9DZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRTNFN0dMNWV1bnVxaXhML0wvWVB1eUxtbmcrOUJ5V3BTWkVwQnFBTDlDdTdvaG1JMFdabXFIclBlZHU2d3hBMDNSTG1RUlpnWDNBR0lqZmg3Qys5REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNzM2NjA0Nzk6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUdzWHV3eExkNUF0Z0ZsTkttVE11cCtFR3gxMGozeEgvWXd4ajhOWlFvYiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MDE2ODQzLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUU2RiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𓆩𝙎𝙥𝙞𝙙𝙚𝙞ʬ𓆪 🇵🇰*",
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
