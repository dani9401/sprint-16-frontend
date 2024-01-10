import { apiKey, baseUrl } from "./constants";
import { checkResponse } from "./utils";

export const getDogList = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

//first get token - expires every 60 mins
export const getToken = (apiKey, apiSecret) => {
  fetch(
    `https://api.petfinder.com/v2/oauth2/token/grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  ).then(checkResponse);
};

//first get a token
fetch("https://api.petfinder.com/v2/oauth2/token", {
  body: "grant_type=client_credentials&client_id={CLIENT-ID}&client_secret={CLIENT-SECRET}",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  method: "POST",
});

//$ curl -d "grant_type=client_credentials&client_id=nGdyqINkeLAEGaVKXA0tMNgorKkOjvxIsk6eKsP7ofhEtKnhRx&client_secret=duIOBdWaW09bA17SeILKM1wlYkfm2rhw7aDVjozV" https://api.petfinder.com/v2/oauth2/token
//{"token_type":"Bearer","expires_in":3600,"access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJuR2R5cUlOa2VMQUVHYVZLWEEwdE1OZ29yS2tPanZ4SXNrNmVLc1A3b2ZoRXRLbmhSeCIsImp0aSI6IjE0ZWM3M2QyNWU0M2QwMGMzNWMwYWMzMGY4ZjZjYzhlMGU3YTVlZDExZTdjODVhNDY5NzU4MWJhZDRkMWQyNjllNzMzMWE4NTJmMmFkMzc3IiwiaWF0IjoxNzA0NzY4OTIzLCJuYmYiOjE3MDQ3Njg5MjMsImV4cCI6MTcwNDc3MjUyMywic3ViIjoiIiwic2NvcGVzIjpbXX0.pt2W8WJo9yejPqibHA4BY0RHdtBj3M8JikQAVqtiUOG7XJEEvk9sfZUnFNuc1NGeKzr3EnbjLDFeGExJXXJdPA1N5SKKkucZcxKwD8CFximPLmr-pYQmUjcPQ7GHOe1ErsfXt1_cmsrW0IXL2e-5D4R94b0gAg0S4d4ehLc-3A1Y3gcQSeU-HipwpbvONno3mixl-RoIn0hSKqWVs_0oRRyJavuyZRmG5m9H99LCZd-ZBYlI8E7HCM9a8vpvzfoACh-KUAaZTxfIsGKc5hBsdaV-zr-BWZlVMKacYlHusYp7G7mxqTRavo82kwTTJrigcidQbgr_WgLtOYke7AoYwg"}
