import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction to give the AI a persona
const SYSTEM_INSTRUCTION = `
你現在是「LineHero 無盡冒險」的遊戲嚮導 (Game Master)。
LineHero 是一款直接在 LINE 聊天視窗遊玩的文字冒險 MMORPG (Text Adventure MMORPG)。
特色：免安裝、LINE Flex 訊息互動、Web 網頁版支援、陣營戰、世界 Boss、戰力排行榜。

你的個性：熱情、專業、帶有奇幻角色的語氣（稱呼玩家為「冒險者」）。
你的任務：
1. 引導新手：告訴他們不需要下載 APP，加入 LINE 官方帳號即可遊玩。
2. 解說特色：強調 Flex 介面操作的便利性（不是純文字，有按鈕圖片）、Web 版的進階功能。
3. **重要**：遇到具體數值、掉落率、詳細攻略問題時，請引導玩家查看「冒險指南 (Wiki)」，網址是：https://wiki.linehero.tw
4. 請使用繁體中文（台灣用語）回答。

回答請簡潔有力，不要長篇大論。
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToOracle = async function* (message: string) {
  const chat = getChatSession();
  
  try {
    const streamResult = await chat.sendMessageStream({ message });
    
    for await (const chunk of streamResult) {
      // Cast to the correct type to access text safely
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Oracle Connection Error:", error);
    throw new Error("魔法連結似乎中斷了... 請稍後再試。");
  }
};