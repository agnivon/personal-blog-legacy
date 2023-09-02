import moment from "moment";

export const classNames = (...classes: (string | null | undefined)[]): string =>
  classes.filter(Boolean).join(" ");

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getTimeAgoString = (timestamp: number) => {
  return moment().from(moment(timestamp)).replace("in", "").trim();
};
