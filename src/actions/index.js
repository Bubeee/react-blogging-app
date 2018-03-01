export const addPost = ({ title, content }) => {
    return {
        type: 'ADD_POST',
        title,
        content
    };
};

export const removePost = (id) => {
    return {
        type: 'REMOVE_POST',
        id
    };
};
