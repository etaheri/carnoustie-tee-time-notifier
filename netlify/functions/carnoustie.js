import fetch from "node-fetch";
import FormData from "form-data";
import { XMLParser } from "fast-xml-parser";
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const handler = async (event, context) => {
  var formdata = new FormData();
  formdata.append("CourseID", "1");
  formdata.append("BookingDate", "2023-7-24");
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

  client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12183046412',
     to: '+17163596715'
   })
  .then(message => console.log(message.sid));

  return {
    statusCode: 200,
    body: JSON.stringify(jsonObj),
  };
};
