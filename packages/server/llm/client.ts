import OpenAI from 'openai';

const client = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

type GenerateTextOptions = {
   model?: string;
   prompt: string;
   instructions?: string;
   max_tokens?: number;
   temperature?: number;
   previous_response_id?: string;
};

type GenerateTextResult = {
   response_id: string;
   text: string;
};

export const llmClient = {
   async generateText({
      model = 'gpt-4o-mini',
      prompt,
      instructions,
      temperature = 0.2,
      max_tokens = 300,
      previous_response_id,
   }: GenerateTextOptions): Promise<GenerateTextResult> {
      const response = await client.responses.create({
         model,
         input: prompt,
         instructions,
         temperature,
         max_output_tokens: max_tokens,
         previous_response_id: previous_response_id,
      });
      return { response_id: response.id, text: response.output_text };
   },
};
