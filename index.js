const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: `on ${client.guilds.size} servers | !!help`, type: 0 }});
});

client.on('message', function(message) {
    var argss = message.content.split(" ");
    var cmd = argss[0];

    argss = argss.splice(1);

    switch (cmd) {
        case "!!realmeye":
           let user = argss.slice(0).join("");
           let rapii = "http://www.tiffit.net/RealmInfo/api/user?u=" + user + "&f=c;";
          
           message.delete();
           if(!user)
return message.channel.send("Please include a username after `!realmeye`.")
           
           snekfetch.get(rapii).then(r => {
let asdesc = r.body.description;
let asname = r.body.name
let asstars = r.body.rank
let aslocation = r.body.last_seen
let asfame = r.body.fame
let ascount = r.body.characterCount
let asacctfame = r.body.account_fame
let ascreated = r.body.created
let asskins = r.body.skins
let asguild = r.body.guild


           
           message.channel.send({embed: {
  color: 0xfbd27a,
  author: {
    name: "Realmeye Info for " + user,
    icon_url: client.user.avatarURL
  },
  fields: [
      {
      name: "Description",
      value: "Desc: " + asdesc,
      inline: true
    },
    {
      name: "Stars",
      value: "Stars: " + asstars,
      inline: true
    },
    {
      name: "Last-seen Location",
      value: "server: " + aslocation, 
      inline: true
    },
    {
      name: "Character Fame",
      value: "Fame: " + asfame, 
      inline: true
    },
           {
             name: "Account Fame",
             value: "Fame: " + asacctfame, 
             inlint: true
           },
           {
             name: "Account Created",
             value: "Date: " + ascreated,
             inline: true
           },
           {
             name: "Skin Count",
             value: "Skins: " + asskins,
             inline: true
           },
           {
             name: "Guild",
             value: "Guild:" + asguild,
             inline: true
           }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: "https://cdn.discordapp.com/avatars/160140367554019329/a423acbb3957e25bce788915eda9414a.png?size=2048",
    text: "~Droid~#5799"
  }//end
  }})
})

  break;
        
        case "!!rotmgchars":
            message.channel.send({
                embed: {
                    color: 0xff040b,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    thumbnail: {
                        url: 'https://steamuserimages-a.akamaihd.net/ugc/615025248066186198/CCF7A2CA7AAC3180249A4C8E8346C0DA68A4D839/'
                    },
                    title: "**Realm Characters**",
                    description: "These are all of the current Realm of the Mad God characters.",
                    fields: [{
                            name: "__**Rogue**__ : Uses a medium ranged dagger. Special ability is cloaking.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Archer**__ : Uses a long ranged bow. Special ability is shooting debuffs.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Wizard**__ : Uses a long ranged staff. Special ability is burst of damage within a range.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Priest**__ : Uses a long ranged wand. Special ability is AoE healing.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Warrior**__ : Uses a short ranged sword. Special ability is berserk mode.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Knight**__ : Uses a short ranged sword. Special ability is shield bash.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Paladin**__ : Uses a short ranged sword. Special ability is AoE buff.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Assassin**__ : Uses a medium ranged dagger. Special ability is throwing poisons that damage over time.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Necromancer**__ : Uses a long ranged staff. Special ability is lifesteal.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Huntress**__ : Uses a long ranged bow. Special ability is placing damaging traps.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Mystic**__ : Uses a long ranged staff. Special ability is stasising enemies.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Trickster**__ : Uses a medium ranged dagger. Special ability is sending out decoys.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Sorcerer**__ : Uses a long ranged wand. Special ability is damage dealt across enemies.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Ninja**__ : Uses a medium ranged katana. Special ability is shooting damaging shuriken.",
                            value: "\u200b"
                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                    }
                }
            });
            break;
        //SWITCH TO SECOND MESSAGE HANDLER
   /*   case "!!afkcheck":
        
        client.guild.channels.find("name", "raid-status").send('@here', {embed: {
  color: 0xfbd27a,
  author: {
    name: client.user.username,
    icon_url: client.user.avatarURL
  },
  title: "**An AFK-check has started!**",
  description: "React with 👍 to join or stay in raiding vc! You have 60 seconds to react!",
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
  }
}
})
.then(function (m) {
  m.react("👍")
          .then(setTimeout(function() {
                var people = client.guilds.channels.find('name', 'queue').members.array();

                var promises = [];
                people.forEach(person => {
                    promises.push(person.setVoiceChannel.guilds.channels.find('name', 'raiding'));
                });
                Promise.all(promises);
                client.guilds.channels.find("name", 'raid-status').send({
                embed: {
                    color: 0xfbd27a,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: "**The AFK-Check has ended!**",
                    description: "Please be patient and wait for the next afk-check",
                }
            })
                
            }, 60000))*/
        
        
    }
    });

const prefix = "!!"

const answers = [
  'Without a doubt', 'Extremely likely', 'Perhaps', 'Maybe', 'I\'ll have to think about that', 'Not a chance!'
]

client.on('message', msg => { // START MESSAGE HANDLER
  if (msg.author.bot) return;

  if (msg.content.startsWith(prefix + 'ping')) {
    msg.channel.send("Pinging... :signal_strength:").then(sent => {
      sent.edit(`:ping_pong: Pong! | Time Taken: ${sent.createdTimestamp - msg.createdTimestamp}ms`)
    })
  }
  
  
  
  //afkcheck
if (msg.content.startsWith(prefix + 'afkcheck')){
 msg.guild.channels.find("name", "raid-status").send('@here', {embed: {
  color: 0xfbd27a,
  author: {
    name: client.user.username,
    icon_url: client.user.avatarURL
  },
  title: "**An AFK-check has started!**",
  description: "React with 👍 to join or stay in raiding vc! You have 60 seconds to react!",
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
  }
}
})
.then(function (m) {
  m.react("👍")
          .then(setTimeout(function() {
                var people = msg.guild.channels.find('name', 'queue').members.array();

                var promises = [];
    const raiding = msg.guild.channels.find('name', 'raiding');
                people.forEach(person => {
                    promises.push(person.setVoiceChannel.raiding);
                });
                Promise.all(promises);
                msg.guild.channels.find("name", 'raid-status').send({
                embed: {
                    color: 0xfbd27a,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: "**The AFK-Check has ended!**",
                    description: "Please be patient and wait for the next afk-check",
                }
            })
                
            }, 60000)) 
})
     }
      //afk check ends here
      
      
      
  if (msg.content.startsWith(prefix + '8ball')) {
  let args = msg.content.split(" ").slice(1);
  let question = args[0]
  if (!msg.content.endsWith('?')) {
    return msg.channel.send('You must ask me a question first!')
} else {
  msg.channel.send(`:8ball: | ${answers[Math.floor(Math.random() * answers.length)]}`);
  }
}

if (msg.content.startsWith(prefix + 'help')) {
  msg.channel.send(":inbox_tray: | My commands have been sent to you via DM.")
  msg.author.send(`\`\`\`asciidoc
= General =
!!ping :: Hm. I wonder what this does? /sarcasm
!!8ball :: Ask the magic 8ball a question. Pretty self explanatory
!!help :: Brings up this menu
!!invite :: Shows the bot's invite URL\`\`\``)
  msg.author.send(`\`\`\`asciidoc
= Moderation =
!!ban :: Bans the user specified
!!kick :: Kicks the user specified
!!softban :: Softbans the specified user\`\`\``)
  msg.author.send(`\`\`\`asciidoc
= Droid Only Commands =
!restart :: Restarts Droid's Fun Bot :c
!eval :: Evaluates arbitrary JavaScript code
!say :: Outputs the inputted arguments (anything after !say), else, if there's no args, return\`\`\``)
  msg.author.send("For the moderation commands to log properly, a channel named `mod-logs` must be provided.")
}

let args = msg.content.split(" ").slice(1);

  if (msg.content.startsWith(prefix + 'ban')) {
    var reason = msg.content.split(' ').slice(2).join(' ');
    if (!msg.member.permissions.has("BAN_MEMBERS")) return msg.channel.send(":warning: Insufficient Permissions").catch(console.error);
    if (!msg.guild.member(client.user).permissions.has("BAN_MEMBERS")) return msg.channel.send(":warning: Bot has insufficient permissions").catch(console.error);

  if (msg.mentions.users.size === 0) return msg.channel.send("No user provided")

  if (msg.author.id === msg.mentions.members.first().user.id) return msg.channel.send("You can't ban yourself").catch(console.error);

  if (client.user.id === msg.mentions.users.first().id) return msg.channel.send(`Don't try to ban me, ${msg.author.username}`).catch(console.error);

  userToBan.ban()
    var user = msg.mentions.users.first()
    const embed = new Discord.RichEmbed()
    .setTitle(`:hammer: User Banned: ${user.tag} (${user.id})`)
    .setColor(0xd11212)
    .addField("Responsible Moderator:", `${msg.author.tag} (${msg.author.id})\n\nReason: ${reason}`)
    .setTimestamp(new Date(msg.createdTimestamp))

    msg.guild.channels.find("name", "mod-logs").send({embed});
  }

  if (msg.content.startsWith(prefix + 'kick')) {
    var reason = msg.content.split(' ').slice(2).join(' ');
    if (!msg.member.permissions.has("KICK_MEMBERS")) return msg.channel.send(":warning: Insufficient Permissions").catch(console.error);
    if (!msg.guild.member(client.user).permissions.has("KICK_MEMBERS")) return msg.channel.send(":warning: Bot has insufficient permissions").catch(console.error);

    if (msg.mentions.users.size === 0) return msg.channel.send("No user provided")

    if (!msg.guild.member(userToKick).kickable) return msg.channel.send("I can't kick that member!")

    if (msg.author.id === msg.mentions.members.first().user.id) return msg.channel.send("You can't kick yourself");

    if (client.user.id === msg.mentions.users.first().id) return msg.channel.send(`Don't try to kick me, ${msg.author.username}`).catch(console.error);

  userToKick.kick()
    var user = msg.mentions.users.first()
    const embed = new Discord.RichEmbed()
    .setTitle(`:hammer: User Kicked: ${user.tag} (${user.id})`)
    .setColor(0xf9a411)
    .addField("Responsible Moderator:", `${msg.author.tag} (${msg.author.id})\n\nReason: ${reason}`)
    .setTimestamp(new Date(msg.createdTimestamp))

    msg.guild.channels.find("name", "mod-logs").send({embed});
  }

  if (msg.content.startsWith(prefix + 'restart')) {
   if (msg.author.id !== '368756694114893825') return;
   msg.channel.send('Rebooting...').then(() => {
     client.destroy().then(() => {
       process.exit();
     })
   })
 }

 if (msg.content.startsWith(prefix + 'softban')) {
   var reason = msg.content.split(' ').slice(2).join(' ');
   if (!msg.member.permissions.has("BAN_MEMBERS")) return msg.channel.send(":warning: Insufficient Permissions").catch(console.error);
   if (!msg.guild.member(client.user).permissions.has("BAN_MEMBERS")) return msg.channel.send(":warning: Bot has insufficient permissions").catch(console.error);

     if (msg.mentions.users.size === 0) return msg.channel.send("No user provided")

     if (!msg.guild.member(userToSB).bannable) return msg.channel.send("I can't softban that member!").catch(console.error);

     if (msg.author.id === msg.mentions.members.first().user.id) return msg.channel.send("You can't softban yourself").catch(console.error);

     if (client.user.id === msg.mentions.users.first().id) return msg.channel.send(`Don't try to softban me, ${msg.author.username}`).catch(console.error);

   userToSB.ban().then(member => {msg.guild.unban(member.user.id)});
     var user = msg.mentions.users.first()
     const embed = new Discord.RichEmbed()
     .setTitle(`:hammer: User Softbanned: ${user.tag} (${user.id})`)
     .setColor(0xfffa00)
     .addField("Responsible Moderator:", `${msg.author.tag} (${msg.author.id})\n\nReason: ${reason}`)
     .setTimestamp(new Date(msg.createdTimestamp))

     msg.guild.channels.find("name", "mod-logs").send({embed});
  }

  if (msg.content.startsWith(prefix + 'eval')) {
  if(msg.author.id !== "368756694114893825") return;
  let evall = msg.content.split(' ')[0];
  let evalstuff = msg.content.split(" ").slice(1).join(" ")
  try {
      const code = msg.content.split(" ").slice(1).join(" ")
      let evaled = eval(code);

      if (typeof evaled !== 'string')
        evaled = require('util').inspect(evaled);

        msg.channel.send(`:inbox_tray: Input: \n \`\`\`${evalstuff}\`\`\` \n :outbox_tray: Output: \n  \`\`\`${clean(evaled)}\`\`\``)
    } catch (err) {
        msg.channel.send(`:inbox_tray: Input: \n \`\`\`${evalstuff}\`\`\` \n :outbox_tray: Output: \n  \`\`\`${clean(err)}\`\`\``)
    }
  }

  if (msg.content.startsWith(prefix + "say")) {
  let args = msg.content.split(" ").slice(1).join(" ")
  msg.delete()
  if(msg.author.id !== "368756694114893825") return;
  if (!args) {
    return msg.channel.send("Whoops, no args were involved. Try again")
  }
  msg.channel.send(`${args}`)
}

  if (msg.content.startsWith(prefix + "serverinfo")) {
    const embed = new Discord.RichEmbed()

    .setTitle(`${msg.guild.name}`)
    .setColor(0x17bec6)
    .addField(`Owner`, `${msg.guild.owner.user.tag} (${msg.guild.owner.id})`)
    .addField(`Members`, `${msg.guild.memberCount}`)
    .addField(`Region`, `${msg.guild.region}`)
    .addField(`ID`, `${msg.guild.id}`)
    .addField(`Channels`, `${msg.guild.channels.size}`)
    .addField(`Created at`, `Created at date: WIP`)

    msg.channel.send({embed});
  }
  
  if (msg.content.startsWith(prefix + "invite")) {
    msg.reply("https://discordapp.com/oauth2/authorize?client_id=442905823149293568&permissions=8&scope=bot")
  }
}); // END MESSAGE HANDLER

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.login(process.env.BOT_TOKEN);
