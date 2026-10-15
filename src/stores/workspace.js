import { create } from 'zustand';
export const useWorkspace = create((set) => ({ menuOpen: false, demoTool: 'listen', setMenuOpen: (menuOpen) => set({ menuOpen }), setDemoTool: (demoTool) => set({ demoTool }) }));
