import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  column: "selected-task",
  selectedTaskList: [],
}

const selectedTaskSlice = createSlice({
  name: "categoryTask",
  initialState,
  reducers: {
    getSelectedTask(state, action) {
      state.selectedTaskList = action.payload.newList
    },
    addSelectedTask(state, action) {
      if (
        state.selectedTaskList.findIndex(
          (stask) => stask.id === action.payload.newTask.id
        ) === -1
      ) {
        state.selectedTaskList.push(action.payload.newTask)
      } else {
        state.selectedTaskList = state.selectedTaskList.filter((stask) => {
          return stask.id !== action.payload.newTask.id
        })
      }
    },
    editSelectedTaskById(state, action) {
      state.selectedTaskList = state.selectedTaskList.map((stask) => {
        if (stask.id === action.payload.id) {
          return action.payload.newTask
        }
        return stask
      })
    },
    editSelectedTaskByIdx(state, action) {
      state.selectedTaskList[action.payload.idx] = action.payload.newTask
    },
    changeSelectedTaskPlaceByIdx(state, action) {
      state.selectedTaskList[action.payload.idx1] = action.payload.task2
      state.selectedTaskList[action.payload.idx2] = action.payload.task1
    },
    clearSelectedTaskList(state, action) {
      state.selectedTaskList = []
    },
    deleteSelectedTaskById(state, action) {
      state.selectedTaskList = state.selectedTaskList.filter((stask) => {
        return stask.id !== action.payload.id
      })
    },
    changeSelectedTaskById(state, action) {
      state.selectedTaskList = state.selectedTaskList.map((stask) => {
        if (stask.id === action.payload.newTask.id) {
          return action.payload.newTask
        }
        return stask
      })
    },
    recallSelectedTaskList(state, action) {
      const localData = JSON.parse(window.localStorage.getItem("todo"))
      if (localData) {
        state.selectedTaskList = localData
      } else {
        state.selectedTaskList = []
      }
    }
  },
})

export const selectedTaskActions = selectedTaskSlice.actions
export default selectedTaskSlice.reducer