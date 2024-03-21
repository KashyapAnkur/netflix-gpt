import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constants";

const openai = new OpenAI({
    apiKey: OPEN_AI_KEY, // defaults to process.env['OPEN_API_KEY']
    dangerouslyAllowBrowser: true
});

export default openai;