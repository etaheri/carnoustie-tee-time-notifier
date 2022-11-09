import fetch from "node-fetch";
import FormData from "form-data";
import { XMLParser } from "fast-xml-parser";


const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendMessage = (message) => {
  client.messages
    .create({
      body: message,
      messagingServiceSid: "MG347d4faefa44cb105b7b7e3304da34f6",
      to: "+17163596715",
    })
    .then((message) => console.log(message.sid));
};

export const handler = async (event, context) => {
  // 24
  let formdata = new FormData();
  formdata.append("CourseID", "1");
  formdata.append("BookingDate", "2023-7-24");
  formdata.append("NumberOfPlayers", "3");

  let requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  let response = await fetch(
    "https://www.carnoustiegolflinks.com/OnlineBooking3/php/ajax/Diary_SelectTimesByCriteria.xml.php",
    requestOptions
  );
  let data = await response.text();

  let parser = new XMLParser();
  let jsonObj = parser.parse(data);

  if (jsonObj?.Diary_SelectTimesByCriteria?.Results) {
    sendMessage(jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
    console.log(jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
  } else {
    console.log('No results: ', jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
  }

  // 25
  formdata = new FormData();
  formdata.append("CourseID", "1");
  formdata.append("BookingDate", "2023-7-25");
  formdata.append("NumberOfPlayers", "3");

  requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  response = await fetch(
    "https://www.carnoustiegolflinks.com/OnlineBooking3/php/ajax/Diary_SelectTimesByCriteria.xml.php",
    requestOptions
  );
  data = await response.text();

  parser = new XMLParser();
  jsonObj = parser.parse(data);

  if (jsonObj?.Diary_SelectTimesByCriteria?.Results) {
    sendMessage(jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
    console.log(jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
  } else {
    console.log('No results: ', jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
  }

  // 26
  formdata = new FormData();
  formdata.append("CourseID", "1");
  formdata.append("BookingDate", "2023-7-26");
  formdata.append("NumberOfPlayers", "3");

  requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  response = await fetch(
    "https://www.carnoustiegolflinks.com/OnlineBooking3/php/ajax/Diary_SelectTimesByCriteria.xml.php",
    requestOptions
  );
  data = await response.text();

  parser = new XMLParser();
  jsonObj = parser.parse(data);

  if (jsonObj?.Diary_SelectTimesByCriteria?.Results) {
    sendMessage(jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
    console.log(jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
  } else {
    console.log('No results: ', jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
  }

  // 27
  formdata = new FormData();
  formdata.append("CourseID", "1");
  formdata.append("BookingDate", "2023-7-27");
  formdata.append("NumberOfPlayers", "3");

  requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  response = await fetch(
    "https://www.carnoustiegolflinks.com/OnlineBooking3/php/ajax/Diary_SelectTimesByCriteria.xml.php",
    requestOptions
  );
  data = await response.text();

  parser = new XMLParser();
  jsonObj = parser.parse(data);

  if (jsonObj?.Diary_SelectTimesByCriteria?.Results) {
    sendMessage(jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
    console.log(jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
  } else {
    console.log('No results: ', jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
  }

  // 28
  formdata = new FormData();
  formdata.append("CourseID", "1");
  formdata.append("BookingDate", "2023-7-28");
  formdata.append("NumberOfPlayers", "3");

  requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  response = await fetch(
    "https://www.carnoustiegolflinks.com/OnlineBooking3/php/ajax/Diary_SelectTimesByCriteria.xml.php",
    requestOptions
  );
  data = await response.text();

  parser = new XMLParser();
  jsonObj = parser.parse(data);

  if (jsonObj?.Diary_SelectTimesByCriteria?.Results) {
    sendMessage(jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
    console.log(jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
  } else {
    console.log('No results: ', jsonObj?.Diary_SelectTimesByCriteria?.Parameters?.BookingDate);
  }

  console.log("done");

  return {
    statusCode: 200,
  };
};
