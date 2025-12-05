// Implemation detail
const conversation = new Map<string, string>();
let lastResponseId: string | null = null;

export const conversationRepository = {
   getLastResponseId(conversationId: string) {
      return conversation.get(conversationId);
   },
   setLastResponseId(conversationId: string, responseId: string) {
      return conversation.set(conversationId, responseId);
   },
};
