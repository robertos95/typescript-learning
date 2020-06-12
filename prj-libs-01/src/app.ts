import axios from "axios";

const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address") as HTMLInputElement;

const GOOGLE_API_KEY = CENSORED;

type GoogleGeocodingResponse = {
  results: {
    geometry: { location: { latitude: number; longitude: number } };
  }[];
  status: string; // OK | ZERO_RESULTS | etc...
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  //send this to Google's API!
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )},+CA&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      console.log(response);
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;
    })
    .catch((err) => {
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
