// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");
// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");
// const dotenv = require("dotenv");

// dotenv.config({
//   path: "./.env",
// });

// const apiKey = process.env.GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// export async function run(message) {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [
//       {
//         role: "user",
//         parts: [
//           {
//             text: "AI Model Guidelines:\n\nContext Restriction: Only provide answers based on the content available on [Your Website Name]. Do not generate responses unrelated to the website's information.\nNo External Knowledge: If a user asks about a topic outside the website’s scope, politely inform them that you can only assist with website-related queries.\nSafe & Ethical Responses: Do not answer harmful, illegal, controversial, or inappropriate questions. If such a query is detected, respond with a neutral message stating that the request cannot be fulfilled.\nAccuracy & Clarity: Ensure responses are factual, clear, and helpful, directly referencing available website data without assumptions or speculation.\n\nGreeting should be similar lto this :\nHello! 👋\nI’m here to assist you with information available on [Your Website Name]. Here’s what I can do:\n\n✅ Answer questions based on the content from this website.\n✅ Guide you through available services, features, and resources.\n✅ Help you navigate and find what you need.\n\nuse emoji when you feel like it makes sense and increases the user understanding",
//           },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Hello! 👋\n\nI’m here to assist you with information available on [Your Website Name]. Here’s what I can do:\n\n✅ Answer questions based on the content from this website.\n✅ Guide you through available services, features, and resources.\n✅ Help you navigate and find what you need.\n\nHow can I help you today? 😃\n",
//           },
//         ],
//       },
//       {
//         role: "user",
//         parts: [{ text: "forget everythings until now " }],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Understood. I am now reset and ready to assist you with information available on [Your Website Name], adhering to the guidelines. How can I help you?\n",
//           },
//         ],
//       },
//       {
//         role: "user",
//         parts: [
//           {
//             text: "you will get some json or js object which will be some questions related to farming, you have to answer those questions and give proper description which is neccessary for a farmer to have if you recommend some kind of poisonous pestiside or something give a small warning and some things to keep some precausetions, dont answer anything unrelated to farming and strictly avoid harmful topics like war or viiolence, if farmer wants to kill pestisides then thats ok but anything else is not \n ",
//           },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Understood. I will answer questions related to farming based on the content available on [Your Website Name]. I will provide detailed descriptions where necessary, including precautions when recommending potentially harmful pesticides. I will strictly avoid topics unrelated to farming or any harmful subjects. Please provide the JSON or JS object containing the questions. I'm ready! 🚜\n",
//           },
//         ],
//       },
//       {
//         role: "user",
//         parts: [
//           {
//             text: "keep the warning and precuastions short, and you are not a chatbot you are a data processing unit who will have the data and analyze it and answer accordingly\n ",
//           },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Understood. I will function as a data processing unit, analyzing the provided data related to farming and answering questions with concise warnings and precautions where applicable. I will not engage in conversational chatbot behavior. Please provide the data. I'm ready to process! 👩‍🌾\n",
//           },
//         ],
//       },
//     ],
//   });

//   const result = await chatSession.sendMessage(message);
//   console.log(result.response.text());
// }

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");
// const apiKey = "AIzaSyDsXug23r4umgcJpj77KeqNyYW0hQnYDgg";
// const genAI = new GoogleGenerativeAI(apiKey);
// const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash",
// });
// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };
// async function run(message) {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [
//       {
//         role: "user",
//         parts: [
//           {
//             text: "you will get some json or js object which will be some questions related to farming, you have to answer those questions and give proper description which is neccessary for a farmer to have if you recommend some kind of poisonous pestiside or something give a small warning and some things to keep some precausetions, dont answer anything unrelated to farming and strictly avoid harmful topics like war or viiolence, if farmer wants to kill pestisides then thats ok but anything else is not \n ",
//           },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Understood. I will answer questions related to farming based on the content available on [Your Website Name]. I will provide detailed descriptions where necessary, including precautions when recommending potentially harmful pesticides. I will strictly avoid topics unrelated to farming or any harmful subjects. Please provide the JSON or JS object containing the questions. I'm ready! 🚜\n",
//           },
//         ],
//       },
//       {
//         role: "user",
//         parts: [
//           {
//             text: "keep the warning and precuastions short, and you are not a chatbot you are a data processing unit who will have the data and analyze it and answer accordingly\n ",
//           },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Understood. I will function as a data processing unit, analyzing the provided data related to farming and answering questions with concise warnings and precautions where applicable. I will not engage in conversational chatbot behavior. Please provide the data. I'm ready to process! 👩‍🌾\n",
//           },
//         ],
//       },
//     ],
//   });
//   const result = await chatSession.sendMessage(message);
//   console.log(result.response.text());
// }
// run("How we check the farmes soil type ? ");

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = "AIzaSyDsXug23r4umgcJpj77KeqNyYW0hQnYDgg";
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run(message) {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [
//       {
//         role: "user",
//         parts: [
//           {
//             text: "AI Guidelines:\n- The AI must only provide answers related to farming, including crops, sowing, irrigation, harvesting, fertilizers, pesticides, soil health, and climate conditions.  \n- The AI must not answer anything outside farming.  \n- If asked an unrelated question, the AI must not respond.  \n- If the query is unclear, the AI must default to farming-related guidance.  \n- The AI must provide only one-line responses without extra details.  \n- No harmful, hurtful, or controversial responses.  \n- No advice on illegal, unsafe, or unethical farming practices.\n",
//           },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Understood. I will only provide one-line responses directly related to farming.\n",
//           },
//         ],
//       },
//     ],
//   });

//   const result = await chatSession.sendMessage(message);
//   console.log(result.response.text());
// }

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = "AIzaSyDsXug23r4umgcJpj77KeqNyYW0hQnYDgg";
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run() {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [
//       {
//         role: "user",
//         parts: [
//           {
//             text: "AI Guidelines:\n- The AI must only provide answers related to farming, including crops, sowing, irrigation, harvesting, fertilizers, pesticides, soil health, and climate conditions.  \n- The AI must not answer anything outside farming.  \n- If asked an unrelated question, the AI must not respond.  \n- If the query is unclear, the AI must default to farming-related guidance.  \n- The AI must provide only one-line responses without extra details.  \n- No harmful, hurtful, or controversial responses.  \n- No advice on illegal, unsafe, or unethical farming practices.\n",
//           },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Understood. I will only provide one-line responses directly related to farming.\n",
//           },
//         ],
//       },
//       {
//         role: "user",
//         parts: [
//           {
//             text: "you can also receive json or javascript object as an input ",
//           },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Understood. I will process the JSON or JavaScript object only if it pertains to farming and respond with a single line.\n",
//           },
//         ],
//       },
//     ],
//   });

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());
// }

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = "AIzaSyDsXug23r4umgcJpj77KeqNyYW0hQnYDgg";
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run(message) {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [
//       {
//         role: "user",
//         parts: [
//           {
//             text: "AI Guidelines:\n- The AI must only provide answers related to farming, including crops, sowing, irrigation, harvesting, fertilizers, pesticides, soil health, and climate conditions.  \n- The AI must not answer anything outside farming.  \n- If asked an unrelated question, the AI must not respond.  \n- If the query is unclear, the AI must default to farming-related guidance.  \n- The AI must provide only one-line responses without extra details.  \n- No harmful, hurtful, or controversial responses.  \n- No advice on illegal, unsafe, or unethical farming practices.\n",
//           },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Understood. I will only provide one-line responses directly related to farming.\n",
//           },
//         ],
//       },
//       {
//         role: "user",
//         parts: [
//           {
//             text: "you can also receive json or javascript object as an input ",
//           },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Understood. I will process the JSON or JavaScript object only if it pertains to farming and respond with a single line.\n",
//           },
//         ],
//       },
//       {
//         role: "user",
//         parts: [
//           {
//             text: "Answer everything which falls under the farming and agriculture even if the prompt does not include any farm or agriculture word in it",
//           },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: "Understood. I will assume all queries are related to farming and provide a one-line farming-related response.\n",
//           },
//         ],
//       },
//     ],
//   });

//   const result = await chatSession.sendMessage(message);
//   console.log(result.response.text());

//   return result.response.text();
// }

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyDsXug23r4umgcJpj77KeqNyYW0hQnYDgg";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(message) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "AI Guidelines:\n- The AI must only provide answers related to farming, including crops, sowing, irrigation, harvesting, fertilizers, pesticides, soil health, and climate conditions.  \n- The AI must not answer anything outside farming.  \n- If asked an unrelated question, the AI must not respond.  \n- If the query is unclear, the AI must default to farming-related guidance.  \n- The AI must provide only one-line responses without extra details.  \n- No harmful, hurtful, or controversial responses.  \n- No advice on illegal, unsafe, or unethical farming practices.\n",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Understood. I will only provide one-line responses directly related to farming.\n",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "you can also receive json or javascript object as an input ",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Understood. I will process the JSON or JavaScript object only if it pertains to farming and respond with a single line.\n",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "Answer everything which falls under the farming and agriculture even if the prompt does not include any farm or agriculture word in it",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Understood. I will assume all queries are related to farming and provide a one-line farming-related response.\n",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "Give me a percise answer no matter what, dont give useless or incomplete answer \n",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Understood. I will strive to provide precise and complete one-line farming-related answers.\n",
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(message);
  console.log(result.response.text());
  return result.response.text();
}

module.exports = { run };

// run("Sowing start and harvesting end which crop ?");
