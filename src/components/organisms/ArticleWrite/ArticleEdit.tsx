import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { css } from "@emotion/react";
import MDEditor from "@uiw/react-md-editor";

import Flex from "@components/atoms/Flex";

import { useError } from "@hooks/useError";
import { useLoggedIn } from "@hooks/useLoggedIn";

import { getEditorStyle } from "@styles/getEditorStyles";

import { useThemeStore } from "@stores/theme.store";

import { AuthError } from "@utils/AuthError";

const ArticleEdit = () => {
  const location = useLocation();

  const { dispatchError } = useError();
  const { isLoggedIn } = useLoggedIn();
  const { theme } = useThemeStore();
  if (!isLoggedIn) dispatchError(new AuthError("로그인이 필요합니다."));

  return (
    <Flex
      direction="column"
      css={css`
        margin: 20px 20px 0 0;
      `}
    >
      <Helmet key={location.pathname}></Helmet>
      <MDEditor
        data-color-mode={theme.type === "LIGHT" ? "light" : "dark"}
        preview="live"
        height="calc(100vh - 270px)"
        highlightEnable={false}
        css={getEditorStyle(theme)}
      />
    </Flex>
  );
};

export default ArticleEdit;
