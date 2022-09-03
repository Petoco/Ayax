const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");

module.exports = {
  name: "restart",
  description: "Restart the song",
  usage: "<time s/m/h>",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["forward"],
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
    if (!player.queue.current.isSeekable)
      return client.sendTime(
        message.channel,
        "❌ | **I'm not able to seek this song!**"
      );
    player.seek(0);
    message.react("✅");
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
                    const guild = client.guilds.cache.get(interaction.guild_id);
                    const member = guild.members.cache.get(interaction.member.user.id);
                    let player = await client.Manager.get(interaction.guild_id);
                    
                    if (!member.voice.channel) return client.sendTime(interaction, "❌ | **You must be in a voice channel to use this command.**");
                    if (guild.me.voice.channel && !guild.me.voice.channel.equals(member.voice.channel)) return client.sendTime(interaction, ":x: | **You must be in the same voice channel as me to use this command!**");
                    if (!player) return client.sendTime(interaction, "❌ | **Nothing is playing right now...**");
                    if (!player.queue.current.isSeekable) return client.sendTime(interaction, "❌ | **I'm not able to seek this song!**");
                    player.seek(0);
                    client.sendTime(interaction, "✅ | **Successfully restarted the song");
                },
    },
};
