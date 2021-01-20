const initialState = {
    projects: [{
        title: 'IT-Dubai Bootcamp',
        dateStart: '02.09.20',
        dateEnd: '28.12.20',
        manager: 'Petya Petrov',
        admin: 'Ivan Ivanov'

    }]
}

export const projectsReducer = (state = initialState, action) =>{
    switch (action.type){
        default:
            return state
    }
}