import { PropsWithChildren, useMemo } from "react";
import { Schedule } from "../../types";
import { ScheduleTableContext } from "./context";

type ScheduleTableContextProviderProps = {
  schedules: Schedule[];
};

export function ScheduleTableContextProvider({
  schedules,
  children,
}: PropsWithChildren<ScheduleTableContextProviderProps>) {
  const contextValue = useMemo(() => ({ schedules }), [schedules]);

  return (
    <ScheduleTableContext.Provider value={contextValue}>
      {children}
    </ScheduleTableContext.Provider>
  );
}
