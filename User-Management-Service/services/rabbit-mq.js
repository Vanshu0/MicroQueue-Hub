module.exports.MessageSender = (channel, queue, message) => {
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
};