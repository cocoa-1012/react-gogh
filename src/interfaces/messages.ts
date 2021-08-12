export interface MessagesModel {
  id: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
  isDeleted: boolean;
  sender: 1;
  companyId: string | null;
  userId: string | null;
  text: string;
  mediaFile: MediaFileModel[];
  chatMessageType: 1;
  chatAction: {};
  hasRead: boolean;
}

export interface MediaFileModel {
  url: string;
  mediaType: 1;
}

export interface GetConversationRootState {
  conversationUserId: String,
  conversationUserName: String,
  lastMessageAt: Date | String,
  text: String
}

export interface GetConversationsModel {
  count: Number,
  data: GetConversationRootState[],
  pageNumber: Number,
  pageSize: Number,
}