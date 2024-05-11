import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_KEY } from '../apiKey.ts';

const genAI = new GoogleGenerativeAI(API_KEY);

export default async function generateContent(prompt, images) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
  const result = await model.generateContent([prompt, ...images]);
  const responseData = await result.response;

  // Exiba o texto gerado
  const text = responseData.text();
  return text;
}
