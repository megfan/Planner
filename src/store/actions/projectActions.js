export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to firebase
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authFirstName: 'Jo',
            authLastName: 'Ho',
            authId: 12345,
            createdAt: new Date()           
        }).then(() => {
            dispatch({ 
                type: 'CREATE_PROJECT',
                project: project
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR', 
                err
            });
        })
    }
};