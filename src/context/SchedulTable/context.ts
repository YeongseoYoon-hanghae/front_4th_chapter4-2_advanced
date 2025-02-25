import { createContext } from "react";
import { ScheduleTableContextType } from "./types";

export const ScheduleTableContext = createContext<ScheduleTableContextType>({
  schedules: [],
});
