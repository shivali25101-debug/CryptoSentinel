import { create } from "zustand";

const useScenario = create((set) => ({
  selected: null,

  selectScenario: (scenario) =>
    set({
      selected: scenario.id,
    }),
}));

export default useScenario;