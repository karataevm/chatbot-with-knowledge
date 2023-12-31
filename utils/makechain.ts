import { OpenAI } from 'langchain/llms/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { ConversationalRetrievalQAChain } from 'langchain/chains';

const CONDENSE_PROMPT = `Given the following conversation and a follow up question in russian, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;
// const CONDENSE_PROMPT = `Имея следующий разговор и последующий вопрос, перефразируйте последующий вопрос как отдельный вопрос.

// История чата:
// {chat_history}
// Последующий вопрос: {question}
// Самостоятельный вопрос:`;

const QA_PROMPT = `You are a helpful AI assistant. Use the following pieces of context to answer the question at the end.
If you don't know the answer, just say you don't know. DO NOT try to make up an answer.
If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.

{context}

Question: {question}
Helpful answer in markdown:`;
// const QA_PROMPT = `Вы полезный помощник ИИ. Используйте следующие фрагменты контекста, чтобы ответить на вопрос в конце.
// Если вы не знаете ответа, просто скажите, что не знаете. НЕ пытайтесь придумать ответ.
// Если вопрос не связан с контекстом, вежливо ответьте, что вы настроены только на ответы на вопросы, связанные с контекстом.

// {context}

// Вопрос: {question}
// Полезный ответ в разметке:`;

export const makeChain = (vectorstore: PineconeStore) => {
  const model = new OpenAI({
    temperature: 0, // increase temepreature to get more creative answers
    modelName: 'gpt-3.5-turbo', //change this to gpt-4 if you have access
    // streaming: true,
  });

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorstore.asRetriever(),
    {
      qaTemplate: QA_PROMPT,
      questionGeneratorTemplate: CONDENSE_PROMPT,
      returnSourceDocuments: true, //The number of source documents returned is 4 by default
    },
    
  );
  return chain;
};
