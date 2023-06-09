export type IStory = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export type IStoryProps = {
  id: number;
  isList?: boolean;
  updateComments?: boolean;
  setUpdateComments?: (value: boolean) => void;
};

export type IStoryStyles = {
  isList: boolean;
};
