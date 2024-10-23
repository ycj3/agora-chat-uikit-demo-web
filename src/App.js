// App.js
import React, { Component, useEffect } from "react";
import {
  Provider,
  Chat,
  ConversationList,
  useClient,
  rootStore,
} from "agora-chat-uikit";
import "agora-chat-uikit/style.css";

const appKey = "you app key"; // your appKey
const user = ""; // your user ID
const agoraToken = ""; // agora chat token

const conversation = {
  chatType: "singleChat", // 'singleChat' || 'groupChat'
  conversationId: "agora", // target user id or group id
  name: "Agora", // target user nickname or group name
  lastMessage: {},
};

const ChatApp = () => {
  const client = useClient();
  useEffect(() => {
    client &&
      client
        .open({
          user,
          agoraToken,
        })
        .then((res) => {
          console.log("get token success", res);
          // create a conversation
          rootStore.conversationStore.addConversation(conversation);
        });
  }, [client]);

  client.addEventHandler("chatdemo", {
    onConnected: () => {
      rootStore.conversationStore.setCurrentCvs(conversation)
    }}) 

  return (
    <div>
      <div>
        <ConversationList />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Provider
        initConfig={{
          appKey,
        }}
      >
        <ChatApp />
      </Provider>
    );
  }
}

export default App;
