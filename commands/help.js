const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Information about the bot",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["command", "commands", "cmd"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let Commands = client.commands.map(
      (cmd) =>
        `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
          cmd.name
        }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
    );

    let Embed = new MessageEmbed()
      .setAuthor(
        `Commands of ${client.user.username}`,
        client.botconfig.IconURL
      )
      .setColor(client.botconfig.EmbedColor)
      .setFooter(
        `To get info of each command type ${
          GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
        }help [Command]`
      )
      .setDescription("**Music:**\n`bump`,`clear`, `grab`, `loop`, `loopqueue`, `lyrics`, `move`, `nowplaying`, `pause`, `play`, `queue`, `remove`, `restart`, `resume`, `search`, `seek`, `shuffle`, `skip`, `skipto`, `volume`, `youtube`\n\n**Filters:**\n`bassboost`, `china`, `clearfilter`, `slowmo`, `vibrate`\n*more filters available [here](https://ayax-xyz.glitch.me/premium)*\n\n**Others:**\n`config`, `help`, `invite`, `stats`, `ping`\n\nAyax: v1\n[✨ Support Server](https://discord.gg/G3CCbbd4ds) | [🔰 Website](https://ayax-xyz.glitch.me) | By Petoco#9996")
    if (!args[0]) message.channel.send(Embed);
    else {
      let cmd =
        client.commands.get(args[0]) ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
      if (!cmd)
        return client.sendTime(
          message.channel,
          `❌ | Unable to find that command.`
        );

      let embed = new MessageEmbed()
        .setAuthor(`Command: ${cmd.name}`, client.botconfig.IconURL)
        .setDescription(cmd.description)
        .setColor("GREEN")
        //.addField("Name", cmd.name, true)
        .addField("Aliases", `\`${cmd.aliases.join(", ")}\``, true)
        .addField(
          "Usage",
          `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\``,
          true
        )
        .setFooter(
          `Prefix - ${
            GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
          }`
        );

      message.channel.send(embed);
    }
  },

  SlashCommand: {
    options: [
      {
        name: "command",
        description: "Get information on a specific command",
        value: "command",
        type: 3,
        required: false,
      },
    ],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */

    run: async (client, interaction, args, { GuildDB }) => {
      let Commands = client.commands.map(
        (cmd) =>
          `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
      );

      let Embed = new MessageEmbed()
      .setAuthor(
        `Commands of ${client.user.username}`,
        client.botconfig.IconURL
      )
      .setColor(client.botconfig.EmbedColor)
      .setFooter(
        `To get info of each command type ${
          GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
        }help [Command]`
      )
      .setDescription("**Music:**\n`bump`,`clear`, `disconnect`, `grab`, `loop`, `loopqueue`, `lyrics`, `move`, `nowplaying`, `pause`, `play`, `queue`, `remove`, `resume`, `search`, `seek`, `shuffle`, `skip`, `skipto`, `volume`, `youtube`\n\n**Filters:**\n`bassboost`, `china`, `clearfilter`, `slowmo`, `vibrate`\n*more filters available [here](https://ayax-xyz.glitch.me/premium)*\n\n**Others:**\n`config`, `help`, `invite`, `stats`, `ping`\n\nAyax Premium: v1\n[✨ Support Server](https://discord.gg/G3CCbbd4ds) | [🔰 Website](https://ayax-xyz.glitch.me) | By Petoco#9996")
      if (!args[0]) interaction.send(Embed);
      else {
        let cmd =
          client.commands.get(args[0].value) ||
          client.commands.find(
            (x) => x.aliases && x.aliases.includes(args[0].value)
          );
        if (!cmd)
          return client.sendTime(
            interaction,
            `❌ | Unable to find that command.`
          );

        let embed = new MessageEmbed()
          .setAuthor(`Command: ${cmd.name}`, client.botconfig.IconURL)
          .setDescription(cmd.description)
          .setColor("GREEN")
          //.addField("Name", cmd.name, true)
          .addField("Aliases", cmd.aliases.join(", "), true)
          .addField(
            "Usage",
            `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
              cmd.name
            }\`${cmd.usage ? " " + cmd.usage : ""}`,
            true
          )
          .setFooter(
            `Prefix - ${
              GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
            }`
          );

        interaction.send(embed);
      }
    },
  },
};
