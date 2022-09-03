const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "To invite me to your server",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["inv"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "Invite " + client.user.tag + " to your server!",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `You can invite me by clicking [here](https://ayax-xyz.glitch.me/invite)`
      );
    message.channel.send(embed);
  },
  SlashCommand: {
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction, args, { GuildDB }) => {
      let embed = new MessageEmbed()
        .setAuthor(
          "Invite " + client.user.tag + " to your server!",
          client.user.displayAvatarURL()
        )
        .setColor("BLUE")
        .setDescription(
          `You can invite me by clicking [here](https://ayax-xyz.glitch.me/invite)`
        );
      interaction.send(embed);
    },
  },
};
