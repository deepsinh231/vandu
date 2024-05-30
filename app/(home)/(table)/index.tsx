import React from 'react'
import { ChannelList } from 'stream-chat-expo'
import { router } from 'expo-router'

const MainlayoutScreenIndex = () => {
  return (
    <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)} >
    </ChannelList>
  )
}

export default MainlayoutScreenIndex