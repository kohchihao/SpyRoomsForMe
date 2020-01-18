require('dotenv').config()
const Telegraf = require('Telegraf')

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

const bot = new Telegraf(process.env.BOT_TOKEN)