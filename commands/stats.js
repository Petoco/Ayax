const { MessageEmbed } = require("discord.js");
require("moment-duration-format");
const cpuStat = require("cpu-stat");
const moment = require("moment");

module.exports = {
  name: "ping",
  description: "Get information about the bot",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["about", "info"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message) => {
    const { version } = require("discord.js");
    cpuStat.usagePercent(async function (err, percent, seconds) {
      if (err) {
        return console.log(err);
      }
      const duration = moment
        .duration(message.client.uptime)
        .format(" D[d], H[h], m[m]");

      const embed = new MessageEmbed();
      embed.setColor(client.botconfig.EmbedColor);
      embed.setTitle(`Ayax's stats`);
      embed.setDescription("Ayax is a high quality music bot with free volume control and audio effects!")
      embed.addFields(
        {
          name: "Server Count",
          value: client.guilds.cache.size,
          inline: true,
        },
        {
          name: "User Count",
          value: client.users.cache.size,
          inline: true,
        },
        {
          name: "Ping",
          value: Math.round(client.ws.ping) + "ms",
          inline: true,
        }
      );
      embed.addFields(
        {
          name: "Framework",
          value: "Node.js - Lavalink - Erela.js",
          inline: true,
        },
        {
          name: "Current Node",
          value: "Node-Europe, Spain",
          inline: true,
        },
        {
          name: "Version",
          value: "Ayax V.3",
          inline: true,
        }
      );

      return message.channel.send(embed);
    });
  },
  SlashCommand: {
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction) => {
      const { version } = require("discord.js");
      cpuStat.usagePercent(async function (err, percent, seconds) {
        if (err) {
          return console.log(err);
        }
        const duration = moment
          .duration(client.uptime)
          .format(" D[d], H[h], m[m]");

        const embed = new MessageEmbed();
        embed.setColor(client.botconfig.EmbedColor);
        embed.setTitle(`Stats from \`${client.user.username}\``);
        embed.setDescription("Ayax is a high quality music bot with free volume control and audio effects!")
        embed.addFields(
          {
            name: "Server Count",
            value: client.guilds.cache.size,
            inline: true,
          },
          {
            name: "User Count",
            value: client.users.cache.size,
            inline: true,
          },
          {
            name: "Ping",
            value: Math.round(client.ws.ping) + "ms",
            inline: true,
          }
        );
        embed.addFields(
          {
            name: "Framework",
            value: "Node.js - Lavalink - Erela.js",
            inline: true,
          },
          {
            name: "Current Node",
            value: "Node-Europe, Spain",
            inline: true,
          },
          {
            name: "Version",
            value: "Ayax V.3",
            inline: true,
          }
        );

        return interaction.send(embed);
      });
    },
  },
};
