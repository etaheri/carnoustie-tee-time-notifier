import fetch from "node-fetch";
import FormData from "form-data";

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
    "https://www.carnoustiegolflinks.com/OnlineBooking3/php/ajax/Diary_SelectTimesByCriteria.xml.php"
  );
  const data = await response.text();

  return {
    statusCode: 200,
    body: data,
  };
};
