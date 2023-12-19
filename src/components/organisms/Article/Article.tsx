import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";

import { useScrollToTop } from "@hooks/useScrollToTop";

import { articleOuterStyle } from "./Article.styles";

const Article = () => {
  const { articleId } = useParams();
  if (!articleId) {
    throw new Error("articleId is undefined");
  }

  useScrollToTop();

  return (
    <Flex direction="column" gap={20} css={articleOuterStyle}>
      <Helmet key={location.pathname}></Helmet>
      <div
        css={css`
          margin-top: 20px;
        `}
      ></div>
    </Flex>
  );
};

export default Article;
