module.exports = (client, guild) => {
  require("../util/RegisterSlashCommands")(client, guild.id);
  const config = require("../botconfig");
  const { MessageEmbed } = require("discord.js");

  const ayax = guild.channels.cache.find(
    (c) => c.type === "text" && c.permissionsFor(guild.me).has("SEND_MESSAGES")
  );
  const embed = new MessageEmbed()
  .setAuthor("Thanks for adding Ayax👋", config.IconURL)
  .setDescription("To get started, join a voice channel and type `/play` or`.play`. You can use song names, video links and playlist links. A full list of commands is available [here](https://ayax-xyz.glitch.me/#commands).\n\nIf you have any questions or need help with Ayax, [join the support server](https://ayax-xyz.glitch.me/discord)\n\nHere is a guide for how to use Ayax:\nhttps://ayax-xyz.glitch.me/guide\n\nHere are the features about Ayax:\nhttps://ayax-xyz.glitch.me/#features\n\nIf you want to invite me click [here](https://ayax-xyz.glitch.me/invite)")
  .setColor(config.EmbedColor);
  ayax.send(embed);
};
