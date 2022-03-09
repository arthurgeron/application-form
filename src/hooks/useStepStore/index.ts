import create from 'zustand';

type State = {
  step: number;
  maxSteps: number;
  setStep: (step: number) => void;
  setMaxSteps: (maxSteps: number) => void;
  handleStepBackward: () => void;
  handleStepForward: () => void;
};

export const useStepStore = create<State>((set) => ({
  step: 0,
  maxSteps: 0,
  setStep: (step: number) => set({ step }),
  setMaxSteps: (maxSteps: number) => set({ maxSteps }),
  handleStepForward: () => {
    set(({ step, maxSteps }) => ({
      step: step + 1 <= maxSteps ? step + 1 : maxSteps,
    }));
  },
  handleStepBackward: () => {
    set(({ step }) => ({
      step: step - 1 >= 0 ? step - 1 : 0,
    }));
  },
  order: 0,
}));
