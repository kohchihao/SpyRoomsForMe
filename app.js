require('dotenv').config();
const Telegraf = require('telegraf');
const subscription = require('./subscription');

const room = {
  dr1: 'dr1 (COM1-B-14B)',
  dr2: 'dr2 (COM1-B-14A)',
  dr3: 'dr3 (COM1-B-07)',
  dr4: 'dr4 (COM1-B-06)',
  dr6: 'dr6 (COM2-02-12)',
  dr7: 'dr7 (COM2-03-14)',
  dr8: 'dr8 (COM2-03-30)',
  dr9: 'dr9 (COM2-04-06)',
  dr10: 'dr10 (COM2-02-24)',
  dr11: 'dr11 (COM2-02-23)',
  dr12: 'dr12 (COM1-02-20)',
  executiveclassrm: 'Executive Classroom (COM2-04-02)',
  mr1: 'mr1 (COM1-03-19)',
  mr2: 'mr2 (COM1-03-28)',
  mr3: 'mr3 (COM2-02-26)',
  mr4: 'mr4 (COM1-01-22)',
  mr5: 'mr5 (COM1-01-18)',
  mr6: 'mr6 (AS6-05-10)',
  mr7: 'mr7 (ICUBE-03-01)',
  mr8: 'mr8 (ICUBE-03-48)',
  mr9: 'mr9 (ICUBE-03-49)',
  videoconf: 'Video Conferencing Room (COM1-02-13)'
};
const config = {
	telegram: { webhookReply: false } // default true, but need to set false
};
const bot = new Telegraf(process.env.TELEGRAM_API_KEY, config);
const scraper = require('./scraper');

bot.telegram.setWebhook('https://spyroomsforme.herokuapp.com/secret-path')
bot.startWebhook('/secret-path', null, process.env.PORT || 5000)

var option = {
  parse_mode: 'html'
};

const getFormattedBookingData = (room, callback) => {
  scraper.getBookingDataFor(room, (error, data) => {
    let [timings, reasons] = data;
    let formattedString = `Booking info for ${room.bold()}:`;
    for (let i = 0; i < timings.length; i++) {
      formattedString += `\n${timings[i]} ~ ${reasons[i]}`;
    }
    callback(formattedString);
  });
}

bot.start((ctx) => ctx.reply('Welcome to Spy Rooms for Me where we spy computing rooms for you. This bot is built to help us snatch good rooms from others.'))

bot.command('/getdr1', (ctx) => {
  getFormattedBookingData('DR1', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});


bot.command('/getdr2', ctx => {
  getFormattedBookingData('DR2', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getdr3', ctx => {
  getFormattedBookingData('DR3', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getdr4', ctx => {
  getFormattedBookingData('DR4', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getdr5', ctx => {
  getFormattedBookingData('DR5', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getdr6', ctx => {
  getFormattedBookingData('DR6', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getdr7', ctx => {
  getFormattedBookingData('DR7', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getdr8', ctx => {
  getFormattedBookingData('DR8', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getdr9', ctx => {
  getFormattedBookingData('DR9', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getdr10', ctx => {
  getFormattedBookingData('DR10', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getdr11', ctx => {
  getFormattedBookingData('DR11', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getdr12', ctx => {
  getFormattedBookingData('DR12', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getexecutiveclassrm', ctx => {
  getFormattedBookingData('ExecutiveClassRm', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getmr1', ctx => {
  getFormattedBookingData('MR1', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getmr2', ctx => {
  getFormattedBookingData('MR2', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getmr3', ctx => {
  getFormattedBookingData('MR3', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getmr4', ctx => {
  getFormattedBookingData('MR4', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getmr5', ctx => {
  getFormattedBookingData('MR5', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getmr6', ctx => {
  getFormattedBookingData('MR6', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getmr7', ctx => {
  getFormattedBookingData('MR7', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getmr8', ctx => {
  getFormattedBookingData('MR8', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getmr9', ctx => {
  getFormattedBookingData('MR9', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/getvideoconf', ctx => {
  getFormattedBookingData('VideoConf', formattedString => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply(formattedString, option);
  });
});

bot.command('/subdr1', ctx => {
  subscription.subscribeTo('DR1', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for DR1 BRO');
    getFormattedBookingData('DR1', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubdr1', ctx => {
  subscription.unsubscribeTo('DR1', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for DR1 BRO.');
  });
});

bot.command('/subdr2', ctx => {
  subscription.subscribeTo('DR2', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for DR2 BRO');
    getFormattedBookingData('DR2', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubdr2', ctx => {
  subscription.unsubscribeTo('DR2', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for DR2 BRO.');
  });
});

bot.command('/subdr3', ctx => {
  subscription.subscribeTo('DR3', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for DR3 BRO');
    getFormattedBookingData('DR3', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubdr3', ctx => {
  subscription.unsubscribeTo('DR3', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for DR3 BRO.');
  });
});

bot.command('/subdr4', ctx => {
  subscription.subscribeTo('DR4', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for DR4 BRO');
    getFormattedBookingData('DR4', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubdr4', ctx => {
  subscription.unsubscribeTo('DR4', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for DR4 BRO.');
  });
});

bot.command('/subdr6', ctx => {
  subscription.subscribeTo('DR6', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for DR6 BRO');
    getFormattedBookingData('DR6', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubdr6', ctx => {
  subscription.unsubscribeTo('DR6', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for DR6 BRO.');
  });
});

bot.command('/subdr7', ctx => {
  subscription.subscribeTo('DR7', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for DR7 BRO');
    getFormattedBookingData('DR7', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubdr7', ctx => {
  subscription.unsubscribeTo('DR7', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for DR7 BRO.');
  });
});

bot.command('/subdr8', ctx => {
  subscription.subscribeTo('DR8', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for DR8 BRO');
    getFormattedBookingData('DR8', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubdr8', ctx => {
  subscription.unsubscribeTo('DR8', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for DR8 BRO.');
  });
});

bot.command('/subdr9', ctx => {
  subscription.subscribeTo('DR9', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for DR9 BRO');
    getFormattedBookingData('DR9', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubdr9', ctx => {
  subscription.unsubscribeTo('DR9', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for DR9 BRO.');
  });
});

bot.command('/subdr10', ctx => {
  subscription.subscribeTo('DR10', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for DR10 BRO');
    getFormattedBookingData('DR10', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubdr10', ctx => {
  subscription.unsubscribeTo('DR10', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for DR10 BRO.');
  });
});

bot.command('/subdr11', ctx => {
  subscription.subscribeTo('DR11', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for DR11 BRO');
    getFormattedBookingData('DR11', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubdr11', ctx => {
  subscription.unsubscribeTo('DR11', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for DR11 BRO.');
  });
});

bot.command('/subdr12', ctx => {
  subscription.subscribeTo('DR12', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for DR12 BRO');
    getFormattedBookingData('DR12', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubdr12', ctx => {
  subscription.unsubscribeTo('DR12', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for DR12 BRO.');
  });
});

bot.command('/subexecutiveclassrm', ctx => {
  subscription.subscribeTo('ExecutiveClassRm', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for ExecutiveClassRm BRO');
    getFormattedBookingData('ExecutiveClassRm', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubexecutiveclassrm', ctx => {
  subscription.unsubscribeTo('ExecutiveClassRm', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for ExecutiveClassRm BRO.');
  });
});

bot.command('/submr1', ctx => {
  subscription.subscribeTo('MR1', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for MR1 BRO');
    getFormattedBookingData('MR1', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubmr1', ctx => {
  subscription.unsubscribeTo('MR1', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for MR1 BRO.');
  });
});

bot.command('/submr2', ctx => {
  subscription.subscribeTo('MR2', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for MR2 BRO');
    getFormattedBookingData('MR2', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubmr2', ctx => {
  subscription.unsubscribeTo('MR2', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for MR2 BRO.');
  });
});

bot.command('/submr3', ctx => {
  subscription.subscribeTo('MR3', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for MR3 BRO');
    getFormattedBookingData('MR3', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubmr3', ctx => {
  subscription.unsubscribeTo('MR3', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for MR3 BRO.');
  });
});

bot.command('/submr4', ctx => {
  subscription.subscribeTo('MR4', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for MR4 BRO');
    getFormattedBookingData('MR4', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubmr4', ctx => {
  subscription.unsubscribeTo('MR4', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for MR4 BRO.');
  });
});

bot.command('/submr5', ctx => {
  subscription.subscribeTo('MR5', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for MR5 BRO');
    getFormattedBookingData('MR5', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubmr5', ctx => {
  subscription.unsubscribeTo('MR5', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for MR5 BRO.');
  });
});

bot.command('/submr6', ctx => {
  subscription.subscribeTo('MR6', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for MR6 BRO');
    getFormattedBookingData('MR6', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubmr6', ctx => {
  subscription.unsubscribeTo('MR6', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for MR6 BRO.');
  });
});

bot.command('/submr7', ctx => {
  subscription.subscribeTo('MR7', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for MR7 BRO');
    getFormattedBookingData('MR7', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubmr7', ctx => {
  subscription.unsubscribeTo('MR7', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for MR7 BRO.');
  });
});

bot.command('/submr8', ctx => {
  subscription.subscribeTo('MR8', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for MR8 BRO');
    getFormattedBookingData('MR8', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubmr8', ctx => {
  subscription.unsubscribeTo('MR8', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for MR8 BRO.');
  });
});

bot.command('/submr9', ctx => {
  subscription.subscribeTo('MR9', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for MR9 BRO');
    getFormattedBookingData('MR9', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubmr9', ctx => {
  subscription.unsubscribeTo('MR9', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for MR9 BRO.');
  });
});

bot.command('/subvideoconf', ctx => {
  subscription.subscribeTo('VideoConf', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('SUB DONE for VideoConf BRO');
    getFormattedBookingData('VideoConf', formattedString => {
      bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
      ctx.reply(formattedString, option);
    });
  });
});

bot.command('/unsubvideoconf', ctx => {
  subscription.unsubscribeTo('VideoConf', ctx.message.chat.id, () => {
    bot.telegram.sendChatAction(ctx.message.chat.id, "typing");
    ctx.reply('UNSUB DONE for VideoConf BRO.');
  });
});

//bot.startPolling();