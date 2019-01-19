const initState = {
    projects: [
        {id: '1', title: 'help me find shoes', content: 'Something overrated'},
        {id: '2', title: 'you will not get desert', content: 'Absolutely radicullous'},
        {id: '3', title: 'eggs are good', content: 'Something stupid'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default: 
            return state;
    }
};

export default projectReducer;