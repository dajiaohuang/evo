import { create } from 'zustand'
import { createTimelineSlice, type TimelineSlice } from './timelineSlice'
import { createMapSlice, type MapSlice } from './mapSlice'
import { createTreeSlice, type TreeSlice } from './treeSlice'
import { createFossilSlice, type FossilSlice } from './fossilSlice'

export type AppState = TimelineSlice & MapSlice & TreeSlice & FossilSlice

export const useAppStore = create<AppState>()((set, get) => ({
  ...createTimelineSlice(set, get),
  ...createMapSlice(set, get),
  ...createTreeSlice(set, get),
  ...createFossilSlice(set, get),
}))
