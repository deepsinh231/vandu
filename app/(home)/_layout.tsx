import { Stack } from "expo-router";
import ChatProvider from "../providers/ChatProvider";

export default function HomeLayout() {
    return (
        <ChatProvider>
            <Stack>
                <Stack.Screen name="(table)" options={{ headerShown: false }}></Stack.Screen>
            </Stack>
        </ChatProvider>
    )
}