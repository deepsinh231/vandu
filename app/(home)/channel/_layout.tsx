import React from 'react'
import { Slot, Stack } from 'expo-router'

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name="[cid]" options={{ headerShown: false }}></Stack.Screen>
        </Stack>
    )
}

export default _layout