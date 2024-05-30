import { ActivityIndicator, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Channel, MessageInput, MessageList, useChatContext } from 'stream-chat-expo'
import { Channel as ChannelType } from 'stream-chat'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  const [channel, setchannel] = useState<ChannelType | null>(null)
  const { cid } = useLocalSearchParams<{ cid: string }>();
  const { client } = useChatContext()
  useEffect(() => {
    const fetchChanal = async () => {
      const channels = await client.queryChannels({ cid });
      setchannel(channels[0])
    }
    fetchChanal();
  }, [cid])
  if (!channel) {
    return <ActivityIndicator />
  }
  return (
    <Channel channel={channel}>
      <MessageList />
      <SafeAreaView edges={["bottom"]}>
        <MessageInput />
      </SafeAreaView>
    </Channel>
  )
}

export default index