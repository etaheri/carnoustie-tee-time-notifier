import fetch from "node-fetch";
import FormData from "form-data";
import { XMLParser } from "fast-xml-parser";
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


const sendMessage = (message) => {
  client.messages
  .create({
     body: message,
     messagingServiceSid: 'MG347d4faefa44cb105b7b7e3304da34f6',
     to: '+17163596715'
   })
  .then(message => console.log(message.sid));
}


export const handler = async (event, context) => {
  var formdata = new FormData();
  formdata.append("CourseID", "1");
  formdata.append("BookingDate", "2023-7-16");
  formdata.append("NumberOfPlayers", "3");

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = await fetch(
    "https://www.carnoustiegolflinks.com/OnlineBooking3/php/ajax/Diary_SelectTimesByCriteria.xml.php",
    requestOptions
  );
  const data = await response.text();

  const parser = new XMLParser();
  let jsonObj = parser.parse(data);
  
  if(jsonObj?.Diary_SelectTimesByCriteria?.Results) {
    sendMessage(jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(jsonObj),
  };
};
