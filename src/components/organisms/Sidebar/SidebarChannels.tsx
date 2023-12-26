import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";

import { useChannelsQuery } from "@hooks/api/useChannelsQuery";

import { CHANNEL_MAP } from "@constants/channel";
import { Theme } from "@constants/theme";

import {
  getSelectedSidebarIconText,
  getSidebarIconText,
  getSidebarText,
  sidebarChannelLogin,
  sidebarChannelLogout,
} from "./Sidebar.styles";

type SidebarChannelsProps = {
  theme: Theme;
  navigatePage: (page: string, channelID?: string) => void;
  channelIconSize: number;
  channelTextSize: number;
  isLoggedIn: boolean;
  myLocation: string;
};
const SidebarChannels = ({
  theme,
  navigatePage,
  channelIconSize,
  channelTextSize,
  isLoggedIn,
  myLocation,
}: SidebarChannelsProps) => {
  const channelColor = theme.TEXT300;
  // const channelList = [...useChannelsQuery().channels];
  const { channels: channelList } = useChannelsQuery();
  console.log("channelList : ", channelList);

  return (
    <>
      <Text size={12} css={getSidebarText}>
        CHANNELS
      </Text>
      <div css={isLoggedIn ? sidebarChannelLogin : sidebarChannelLogout}>
        {channelList.map(({ id, channelName }) => {
          return (
            <IconText
              key={id}
              iconValue={{
                // Svg: CHANNEL_MAP[id].Svg,
                Svg: CHANNEL_MAP[channelName].Svg,
                size: channelIconSize,
                fill: channelColor,
              }}
              textValue={{
                children: channelName,
                size: channelTextSize,
                color: channelColor,
              }}
              css={
                myLocation.includes(id)
                  ? getSelectedSidebarIconText(theme)
                  : getSidebarIconText(theme)
              }
              onClick={() => navigatePage("CHANNEL", id)}
            />
          );
        })}
      </div>
    </>
  );
};
export default SidebarChannels;
