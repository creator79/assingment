import { ACTIONS } from './actions.js'

export function reducer(state, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return {
                ...state,
                activeTasks: [...state.activeTasks, newTodo(action.payload.value, action.payload.priority, action.payload.calendar , action.payload.description)]
            }
        case ACTIONS.DELETE_TODO:
            return {
                ...state,
                activeTasks: state.activeTasks.filter(
                    (task) => task.id !== action.payload.id
                ),
            }    
        case ACTIONS.COMPLETE_TODO:
            const completedTask = state.activeTasks.find(
              (task) => task.id === action.payload.id
            );
            const completedTaskWithDate = {
              ...completedTask,
              endDate: new Date(),
            };
            return {
              ...state,
              activeTasks: state.activeTasks.filter(
                (task) => task.id !== action.payload.id
              ),
              completedTasks: [...state.completedTasks, completedTaskWithDate],
            };
        case ACTIONS.EDIT_TODO:
            const updatedTasks = state.activeTasks.map((task) => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        value: action.payload.newValue,
                        priority: action.payload.newPriority,
                        calendar: action.payload.newCalendar,
                        description: action.payload.newDescription,
                    };
                }
                return task;
            });
            return {
                ...state,
                activeTasks: updatedTasks
            };
        case ACTIONS.SET_STATE:
            return action.payload;
        default:
            return state;
    }
}

function newTodo(value, priority, calendar , description){
    return{
        id: Date.now(),
        value: value,
        priority: priority,
        calendar: calendar,
        description: description,

    }
}