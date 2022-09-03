<h1 align="center"><img src="https://media.discordapp.net/attachments/734844209839996960/1000123928238379128/Web_Ayax.png?width=700&height=700" width="30px"> Discord Music Bot <img src="https://media.discordapp.net/attachments/734844209839996960/1000123928238379128/Web_Ayax.png?width=700&height=700" width="30px"></h1>
<p align="center">A high quality music bot with free volume control, audio filters, DJ system and much more!</p>

<article class="md-content__inner md-typeset">
   <a href="https://github.com/sudhanplayz/discord-musicbot/blob/wiki/installation/windows.md" title="Edit this page" class="md-content__button md-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
         <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"></path>
      </svg>
   </a>
   <h1 id="installation-on-a-windows-computerserver">Installation on a Windows computer/server</h1>
   ## 🚧 Prerequisites

   - [Node.js 14+](https://nodejs.org/en/download/)
   - [discord.js@12.5.3](https://www.npmjs.com/package/discord.js/v/12.5.3)
   - [Lavalink Server](https://darrennathanael.com/post/how-to-lavalink/?utm_source=github-sudhanplayz&utm_medium=readme&utm_campaign=sudhanplayz&utm_content=lavalink-    prerequisites)
   <h3 id="create-a-discord-application">Create a Discord Application</h3>
   <ul>
      <li>go to the <a href="https://discord.com/developers/applications">Discord Developer portal</a></li>
      <li>create a new application + bot</li>
      <li>create a bot invitelink using it's client id <a href="https://discordapi.com/permissions.html">here</a></li>
      <li>save the bot token for later</li>
   </ul>
   <h3 id="install-nodejs-npm">Install nodejs &amp; npm</h3>
   <p>follow <a href="https://nodejs.org/en/download/">these</a> instructions</p>
   <h2 id="installation">Installation</h2>
   <ul>
      <li><a href="#configuration">Configuration</a></li>
      <li><a href="#lavalink">Lavalink</a></li>
      <li><a href="#final-steps">Final Steps</a></li>
   </ul>
   <h2 id="configuration">Configuration</h2>
   <ul>
      <li>Git clone the repository by opening command prompt or powershell and doing <code>git clone -b v5 https://github.com/SudhanPlayz/Discord-MusicBot</code></li>
      <li>Open your text editor and configure config.js there! </li>
   </ul>
   <h3 id="lavalink">lavalink</h3>
   <p>use <a href="https://lavalink-list.darrennathanael.com">public lavalink</a></p>
   <p>or <a href="https://darrennathanael.com/post/how-to-lavalink/">host your own</a></p>
   <h2 id="final-steps">Final steps</h2>
   <ul>
      <li>Open your preferred terminal (command prompt or powershell) and change the directory to your Music bot folder. </li>
      <li>Deploy your slash commands by doing <code>npm run deploy</code> to deploy globally or <code>npm run guild</code> if you want to deploy on a specific guild.</li>
      <li>Once done, type <code>npm run start</code> or <code>node index.js</code></li>
   </ul>
   <p>Now your bot is running!</p>
</article>

## 🌟 | Made with

- [Discord.js](https://discord.js.org/)
- [Lavalink](https://github.com/freyacodes/Lavalink) with erela.js
- [Express](https://expressjs.com/)
- [Next JS](https://nextjs.org/)
- [Next UI](https://nextui.org)
- [Material UI Icons](https://mui.com/material-ui/material-icons/)
