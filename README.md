# Simple Discord Bot Preset
This is a simple discord.js preset that can be used and customized however you want. In this case its basic goal is to send messages in response to what you say. The pre-determined responses are if a user says (Command - in this case (-)) 'ping' (-ping) the bot will reply 'pong'.

You can host your Discord bot on a Linux server using the following steps:

Connect to your server: Connect to your server using an SSH client such as Putty (Windows) or Terminal (Mac/Linux).

Install Node.js: You'll need to have Node.js installed on your server to run your Discord bot. To install Node.js, you can follow the instructions for your specific Linux distribution. For example, on Ubuntu, you can run the following commands:


curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
git clone https://github.com/cooperlinzb/simplediscordjs


Install dependencies: Once you have transferred your bot files, navigate to the directory containing your bot files in the Terminal and run the following command to install the dependencies:


npm install

 Start your bot: To start your bot, run the following command:

node index.js

Your bot should now be running on your Linux server and responding to messages in your Discord server.

Note: For production use, you may want to consider using a process manager such as PM2 to keep your bot running even if it crashes or if you disconnect from your server.
