require('dotenv').config()
const Telegraf = require('Telegraf')
const subscription = require('./subscription')

const room = {
  DR1: "DR1 (COM1-B-14B)",
  DR2: "DR2 (COM1-B-14A)",
  DR3: "DR3 (COM1-B-07)",
  DR4: "DR4 (COM1-B-06)",
  DR6: "DR6 (COM2-02-12)",
  DR7: "DR7 (COM2-03-14)",
  DR8: "DR8 (COM2-03-30)",
  DR9: "DR9 (COM2-04-06)",
  DR10: "DR10 (COM2-02-24)",
  DR11: "DR11 (COM2-02-23)",
  DR12: "DR12 (COM1-02-20)",
  ExecutiveClassRm: "Executive Classroom (COM2-04-02)",
  MR1: "MR1 (COM1-03-19)",
  MR2: "MR2 (COM1-03-28)",
  MR3: "MR3 (COM2-02-26)",
  MR4: "MR4 (COM1-01-22)",
  MR5: "MR5 (COM1-01-18)",
  MR6: "MR6 (AS6-05-10)",
  MR7: "MR7 (ICUBE-03-01)",
  MR8: "MR8 (ICUBE-03-48)",
  MR9: "MR9 (ICUBE-03-49)",
  VideoConf: "Video Conferencing Room (COM1-02-13)"
}

const bot = new Telegraf(process.env.TELEGRAM_API_KEY)
const scraper = require('./scraper')

var option = {
  "parse_mode": "html",
};

function getFormattedBookingData(room, callback) {
  scraper.getBookingDataFor(room, (error, data) => {
    let [timings, reasons] = data 
    let formattedString = `Booking info for ${room.bold()}:`
    for (let i = 0; i < timings.length; i++) {
      formattedString += `\n${timings[i]} ~ ${reasons[i]}`;
    
    }
    callback(formattedString)
  });
}

bot.command('/getDR1', (ctx) => {
  getFormattedBookingData("DR1", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getDR2', (ctx) => {
  getFormattedBookingData("DR2", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getDR3', (ctx) => {
  getFormattedBookingData("DR3", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getDR4', (ctx) => {
  getFormattedBookingData("DR4", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getDR5', (ctx) => {
  getFormattedBookingData("DR5", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getDR6', (ctx) => {
  getFormattedBookingData("DR6", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getDR7', (ctx) => {
  getFormattedBookingData("DR7", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getDR8', (ctx) => {
  getFormattedBookingData("DR8", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getDR9', (ctx) => {
  getFormattedBookingData("DR9", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getDR10', (ctx) => {
  getFormattedBookingData("DR10", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getDR11', (ctx) => {
  getFormattedBookingData("DR11", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getDR12', (ctx) => {
  getFormattedBookingData("DR12", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getExecutiveClassRm', (ctx) => {
  getFormattedBookingData("ExecutiveClassRm", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getMR1', (ctx) => {
  getFormattedBookingData("MR1", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getMR2', (ctx) => {
  getFormattedBookingData("MR2", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getMR3', (ctx) => {
  getFormattedBookingData("MR3", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getMR4', (ctx) => {
  getFormattedBookingData("MR4", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getMR5', (ctx) => {
  getFormattedBookingData("MR5", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getMR6', (ctx) => {
  getFormattedBookingData("MR6", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getMR7', (ctx) => {
  getFormattedBookingData("MR7", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getMR8', (ctx) => {
  getFormattedBookingData("MR8", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getMR9', (ctx) => {
  getFormattedBookingData("MR9", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.command('/getVideoConf', (ctx) => {
  getFormattedBookingData("VideoConf", (formattedString) => {
    ctx.reply(formattedString, option)
  })
})

bot.startPolling()
