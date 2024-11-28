
## Modify User's Name

1. Ensure the UIKitProvider is initialized with `useUserInfo: true`.  
This will allow the UIKit to fetch and display user-specific information, such as nicknames, profile picures from Agora Chat.

  ```js
    <UIKitProvider
      initConfig={{
        appKey,
        useUserInfo: true, 
      }}
    >
      <ChatApp />
    </UIKitProvider>
  ```
2. Update User's Nickname in User Attributes
- Using REST API : https://docs.agora.io/en/agora-chat/restful-api/user-attributes-management?platform=web
- Using Client SDK: https://docs.agora.io/en/agora-chat/client-api/user-attributes


