import { useRef } from "react";

import { css } from "@emotion/react";

import IconText from "@components/molecules/IconText";

import { Theme } from "@constants/theme";

import { Alert } from "@assets/svg";

import { getSidebarIconText } from "./Sidebar.styles";

type NotificationItemProps = {
  theme: Theme;
  channelIconSize: number;
  channelTextSize: number;
  channelColor: string;
};

const NotificationItem = ({
  theme,
  channelIconSize,
  channelTextSize,
  channelColor,
}: NotificationItemProps) => {
  const notificationRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={notificationRef}
      css={css`
        position: relative;
      `}
    >
      <IconText
        iconValue={{
          Svg: Alert,
          size: channelIconSize,
          fill: channelColor,
        }}
        textValue={{
          children: "알림",
          size: channelTextSize,
          color: channelColor,
        }}
        css={getSidebarIconText(theme)}
      />
    </div>
  );
};

export default NotificationItem;
