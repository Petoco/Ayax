const {
  MessageEmbed
} = require(`discord.js`);
module.exports = {
  name: `clearfilter`,
  category: `👀 Filter`,
  aliases: [`cf`, `clearfilters`],
  description: `Clears the Equalizer`,
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

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    )
    return client.sendTime(
      message.channel,
      `:x: | **You must be in the same voice channel as me to use this command (<#${message.guild.me.voice.channel.id}>)! Want to listen music with another Ayax? Consider inviting [Ayax 2](https://ayax-xyz.glitch.me/invite/2)**`
    );
    
    let player = await client.Manager.get(message.guild.id);
    player.clearEQ();
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
    });
    player.set("eq", "💣 None");
    player.setVolume("100");
    player.set("filter", "💣 None");
    if (!message.channel) return;
    const embed = new MessageEmbed()
      .setColor(require("../botconfig").EmbedColor)
      .setDescription("All filters deleted")
    return message.channel.send(embed)
  }
};
