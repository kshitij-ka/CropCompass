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
