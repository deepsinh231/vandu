import React, { PropsWithChildren } from 'react'
import { StreamChat } from 'stream-chat';
import { chatApiKey, chatUserId, chatUserName, chatUserToken } from '../chatConfig'
import { useEffect, useState } from "react";
import { Chat, OverlayProvider } from 'stream-chat-expo'
import { ActivityIndicator } from 'react-native';

const user = {
    id: chatUserId,
    name: chatUserName,
    // img: "https://i.imgur.com/fR9Jz14.png"
};
const chatClient = StreamChat.getInstance(chatApiKey);
const ChatProvider = ({ children }: PropsWithChildren) => {

    const [clientIsReady, setClientIsReady] = useState(false);
    useEffect(() => {
        const setupClient = async () => {
            try {
                chatClient.connectUser(user, chatUserToken);
                setClientIsReady(true);

                // connectUser is an async function. So you can choose to await for it or not depending on your use case (e.g. to show custom loading indicator)
                // But in case you need the chat to load from offline storage first then you should render chat components
                // immediately after calling `connectUser()`.
                // BUT ITS NECESSARY TO CALL connectUser FIRST IN ANY CASE.
            } catch (error) {
                if (error instanceof Error) {
                    console.error(`An error occurred while connecting the user: ${error.message}`);
                }
            }
            // const channel = chatClient.channel('messaging', 'the_park', {
            //     name: 'The Park'
            // })
            // await channel.watch();
        };

        // If the chat client has a value in the field `userID`, a user is already connected
        // and we can skip trying to connect the user again.
        if (!chatClient.userID) {
            setupClient();
        }
        return  ()=>{
            chatClient.disconnectUser();
            setClientIsReady(false);
        }

    },[])
    if (!clientIsReady) {
        return <ActivityIndicator />
    }
    return (
        <OverlayProvider>
            <Chat client={chatClient}>
                {children}
            </Chat>
        </OverlayProvider>
    )
}

export default ChatProvider