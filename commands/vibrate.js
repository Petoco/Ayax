const { MessageEmbed } = require(`discord.js`);
module.exports = {
  name: `vibrato`,
  category: `👀 Filter`,
  aliases: [``],
  description: `Applies a Vibrato Filter`,
  usage: `vibrato`,
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["l", "repeat"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.get(message.guild.id);
    if (!player)
      return client.sendTime(
        message.channel,
        "❌ | **Nothing is playing right now...**"
      );
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **You must be in a voice channel to use this command!**"
      );
      if (
        message.guild.me.voice.channel &&
        message.member.voice.channel.id !== message.guild.me.voice.channel.id
      )
      return client.sendTime(
        message.channel,
        `:x: | **You must be in the same voice channel as me to use this command (<#${message.guild.me.voice.channel.id}>)! Want to listen music with another Ayax? Consider inviting [Ayax 2](https://ayax-xyz.glitch.me/invite/2)**`
      );
    player.node.send({
      op: "filters",
      guildId: message.guild.id,
      equalizer: player.bands.map((gain, index) => {
        var Obj = {
          "band": 0,
          "gain": 0,
        };
        Obj.band = Number(index);
        Obj.gain = Number(gain)
        return Obj;
      }),
      vibrato: {
        "frequency": 4.0, // 0 < x
        "depth": 0.75 // 0 < x ≤ 1
      },
      tremolo: {
        "frequency": 4.0, // 0 < x
        "depth": 0.75 // 0 < x ≤ 1
      },
    });
    player.set("filter", "💢 Vibrate");
    if (!message.channel) return;
    const embed = new MessageEmbed()
      .setColor(require("../botconfig").EmbedColor)
      .setDescription("Filter enabled: 💢 Vibrate")
    return message.channel.send(embed)
  }
};
