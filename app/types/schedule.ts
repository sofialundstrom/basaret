export type DayColor =
  | "bla"
  | "ljusrosa"
  | "lila"
  | "gron"
  | "beige"
  | "rosa";

export type ScheduleActivity = {
  header: string;
  time: string;
  location: string;
  alcohol: boolean;
  description: string;
};

export type ScheduleDay = {
  date: string;
  weekday: string;
  color: DayColor;
  activities: ScheduleActivity[];
};
