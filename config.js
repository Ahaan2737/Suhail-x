const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Nigeria,Osun,Oshogbo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Osun,Oshogbo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Empire_Md" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256709547277";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_11_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxLFxuICAgICAgICAxODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgODksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg0LFxuICAgICAgICA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMxLFxuICAgICAgICA1MixcbiAgICAgICAgNixcbiAgICAgICAgMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDY1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJIZzF5S0xGdk4ySmFmWW9IeGg5dnZnQjVLbW9YREZYS081TlVDQUxHN289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkR1ZDU0SkJJU3ZXUGkyX2pGRUE2d2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzY4ZGM0MDYtNDVhNS00NTM2LThiOWYtZWYxY2Y1NjVkYjIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDEwMCxcbiAgICAgIDE4NCxcbiAgICAgIDI2LFxuICAgICAgMCxcbiAgICAgIDE1NSxcbiAgICAgIDI1MCxcbiAgICAgIDEwOCxcbiAgICAgIDI0NyxcbiAgICAgIDEyMyxcbiAgICAgIDc2LFxuICAgICAgMjE1LFxuICAgICAgNTgsXG4gICAgICAxODIsXG4gICAgICA5NyxcbiAgICAgIDIyNSxcbiAgICAgIDEwMCxcbiAgICAgIDE3OCxcbiAgICAgIDY0LFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICAzNSxcbiAgICAgIDU4LFxuICAgICAgODQsXG4gICAgICAxNTYsXG4gICAgICAyMTksXG4gICAgICAxNzgsXG4gICAgICAyNDQsXG4gICAgICA2OSxcbiAgICAgIDIwNixcbiAgICAgIDIzOSxcbiAgICAgIDU0LFxuICAgICAgMjM4LFxuICAgICAgMTI3LFxuICAgICAgNjUsXG4gICAgICAyNDIsXG4gICAgICAxNzQsXG4gICAgICAxNTUsXG4gICAgICAxMDksXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSys3NjhJQ0VLZWorTGdHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwV1lHRGhuNVZuVjFlQWFDVHJyVFNDdkp3WkJLWU0ycXVpYUJKL1Q3LzNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRxaExXRXZmWDJHdVpWZ29CZWc0YmpPd0UzOFRtN0Q1UlBaYzJlWmk3bUZvSlpKUnA4a2hEc1lFdnNKOEhWWDdMRWVwdmk2aVpQWFBuWE9GTDBaekN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdha3ZjTHg5c21sbWs4bUhodm1XS0JtVEo2RUZINGcwOHZFak44VkNIWGx6Nys3RzE0Wjd3VVhzUzY4Mm84OWhPcURZb3VGTzZ3dXFpQ1FaNWJMVWlnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzA5NTQ3Mjc3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjgwMjA2MjcwODMzNjQ6MTJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3MDk1NDcyNzc6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMDIzODUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXdFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNd0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxSzJETnJxN1pUQUtTb3RuK2ZCMjNkRTVlRXBvc1l1cDlvcWhEKys4ZktRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY3NzA0MzYzMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXdFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUWtBbjA0NEdCNXNMMkRSUHZIQ3hSWlZPZzFqWjhwY0k1dVpibGFDL3daYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NzcwNDM2MzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjkyNjE2NjM3NjJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNd0YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjSHlKTzN3dzN3OVFOTHAvMW9GdVJhVXAxWHgvc1JHNGhoOVk2dDZVWlVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY3NzA0MzYzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXdHLmpzb24iOiAie1wia2V5RGF0YVwiOlwicU04QkR0a1RYUUZudE9aT3ZXQXN2ZmIyWU9RSmlIanhEd0haQ056SUUzVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NzcwNDM2MzEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU13SC5qc29uIjogIntcImtleURhdGFcIjpcInE2SllLUVpUUGZ0OUJIc2g5Y2J3N2JHQzQyS040SDJBUzZSM3dBaXlhNk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njc3MDQzNjMxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk3MTE3NjM1MzBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNd0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHWXlEMU5FOHJiQ2JmQlhIYVdNd2VvSmlVRlJRMEc5QWp6K3lnWC82Z3VNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY3NzA0MzYzMSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwMDIzNDM0MDI3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXdKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSGc0WGxWUlhPemNSMVZoUVYzVitSQjJpVEgxb0x0RnFFWWJFeHlHVVJ4UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NzcwNDM2MzEsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDAyMzY4MzAxOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ]彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Adrian 💕Md",
  ownername:process.env.OWNER_NAME|| "★彡[ᴏɴʟAdrian@ᴘɪʀᴇ]彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
