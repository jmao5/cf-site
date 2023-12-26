import {
  AI,
  Back,
  BigData,
  Data,
  DevOps,
  Embedded,
  Free,
  Front,
  Game,
  Job,
  Question,
  Security,
} from "@assets/svg";

export const CHANNEL_MAP: {
  [title: string]: { title: string; Svg: typeof Question };
} = {
  "질문/답변": {
    title: "질문/답변",
    Svg: Question,
  },
  자유: {
    title: "자유",
    Svg: Free,
  },
  "취업/이직": {
    title: "취업/이직",
    Svg: Job,
  },
  프론트엔드: {
    title: "프론트엔드",
    Svg: Front,
  },
  백엔드: {
    title: "백엔드",
    Svg: Back,
  },
  게임: {
    title: "게임",
    Svg: Game,
  },
  데이터: {
    title: "데이터",
    Svg: Data,
  },
  AI: {
    title: "AI",
    Svg: AI,
  },
  빅데이터: {
    title: "빅데이터",
    Svg: BigData,
  },
  DevOps: {
    title: "DevOps",
    Svg: DevOps,
  },
  임베디드: {
    title: "임베디드",
    Svg: Embedded,
  },
  보안: {
    title: "보안",
    Svg: Security,
  },
};
