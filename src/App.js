// App.js
import React, { Component, useEffect } from "react";
import {
  UIKitProvider,
  Chat,
  // ConversationList,
  useClient,
  rootStore,
} from "agora-chat-uikit";
import "agora-chat-uikit/style.css";

const appKey = "61717166#1069763"; // your appKey
const user = "demo_user_3"; // your user ID
const agoraToken = "007eJxTYJj86Ovzxcc69Xd9ir+2JKj2G4e0mHDf3Qecs98vtizzXuGlwJCSbJySbJ6aaGCWYmFiYZpsmWxklmqelJhiYGJhnmRssvqpW3pDICNDsaIKEyMDKwMjEIL4KgzGpibJ5iaGBropiUlmuoaGqam6lhZJhromlikGFkaG5qbJJkkAaFUosQ=="; // agora chat token

const conversation = {
  chatType: "groupChat", // 'singleChat' || 'groupChat'
  conversationId: "251315614711817", // target user id or group id
  name: "Test Group", // target user nickname or group name
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
      {/* <div>
        <ConversationList />
      </div> */}
      <div>
        <Chat />
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <UIKitProvider
        initConfig={{
          appKey,
          useUserInfo: true
        }}
      >
        <ChatApp />
      </UIKitProvider>
    );
  }
}

export default App;
