import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA, SKILLS, PROJECTS, EXPERIENCE } from '../data/constants';
import { debug, error as logError } from '../utils/logger';

declare const process: { env: { API_KEY: string } };

// Construct a system prompt based on the static data
const SYSTEM_INSTRUCTION = `
You are Nova, an AI Assistant for ${RESUME_DATA.name}'s portfolio website.
Your goal is to answer visitor questions about ${RESUME_DATA.name} based STRICTLY on the provided context.

CONTEXT:
Name: ${RESUME_DATA.name}
Title: ${RESUME_DATA.title}
Bio: ${RESUME_DATA.bio}
Location: ${RESUME_DATA.location}
Contact: ${RESUME_DATA.email}
Availability: ${RESUME_DATA.availability}

Skills: ${SKILLS.map(s => s.name).join(', ')}
Projects: ${PROJECTS.map(p => `${p.title} (${p.description})`).join('; ')}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description}`).join('; ')}

GUIDELINES:
- Be professional, enthusiastic, and concise.
- If asked about contact info, provide the email.
- If asked about skills or projects not listed, honestly say you don't have information on that but suggest asking about the listed skills.
- Keep answers under 3-4 sentences unless asked for detail.
- Act as an extension of ${RESUME_DATA.name}'s personal brand.
`;

let aiClient: GoogleGenAI | null = null;
const responseCache = new Map<string, string>();

export const initGemini = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (history: { role: 'user' | 'model'; text: string }[], newMessage: string) => {
  const client = initGemini();
  const cacheKey = newMessage.trim().toLowerCase();

  // Simple caching strategy: If exact message was asked before, return cached response
  // This saves API tokens and improves speed for common questions
  if (responseCache.has(cacheKey)) {
    debug('Serving from cache:', cacheKey);
    return responseCache.get(cacheKey)!;
  }

  try {
    const chat = client.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message: newMessage });
    const responseText = result.text || "I'm having trouble thinking right now.";
    
    // Store in cache
    responseCache.set(cacheKey, responseText);
    
    return responseText;
  } catch (error) {
    logError('Gemini API Error:', error);
    throw error;
  }
};