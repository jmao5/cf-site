import { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CommentForm from "@components/molecules/CommentForm";

import { Article } from "@type/models/Article";

const meta = {
  title: "components/molecules/CommentForm",
  component: CommentForm,
  tags: ["autodocs"],
} satisfies Meta<typeof CommentForm>;

export default meta;

// Create a client
const queryClient = new QueryClient();

const CommentFormWarpper = () => {
  return <QueryClientProvider client={queryClient}></QueryClientProvider>;
};

export const Default: StoryObj<typeof meta> = {
  render: () => <CommentFormWarpper />,
  args: {
    width: "935px",
    article: null as unknown as Article,
  },
};
