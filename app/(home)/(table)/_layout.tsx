import { Slot, Stack, Tabs } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';
export default function MainlayoutScreen() {
    return (<Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: "Chats",
                tabBarIcon: ({ size, color }) => (
                    <FontAwesome5 name="home" size={size} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: "profile",
                tabBarIcon: ({ size, color }) => (
                    <FontAwesome5 name="user-alt" size={size} color={color} />
                ),
            }}
        />
    </Tabs>)
}