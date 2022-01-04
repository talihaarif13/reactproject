export default function reducer(state = [], action) {
    switch (action.type){
        case "SET_USER":
            const {users} = action;
            return [...state, users];
        default:
            return state;
    }
}
