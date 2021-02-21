const line = require('@line/bot-sdk');

//LINEアクセストークン設定
const client = new line.Client({
  channelAccessToken: process.env.ACCESS_TOKEN
});

exports.handler = async event => {
  console.log('◆EVENT:', event);
  const event_data = JSON.parse(event.body);
  console.log('◆EVENT.BODY:', JSON.stringify(event_data));
  const messageData = event_data.events && event_data.events[0];
  console.log("◆TEXT:" + JSON.stringify(messageData.message.text)); //メッセージ内容表示


  const postData = {
    "type": "text",
    "text": messageData.message.text
  }
  const postData2 = {
    "type": "text",
    "text": "さよなら"
  }

  try {
    if (JSON.stringify(messageData.message.text) == "おはよう") {
      await client.replyMessage(messageData.replyToken, postData2);
    }
    await client.replyMessage(messageData.replyToken, postData);
  } catch (error) {
    console.log(error)
  }
};
