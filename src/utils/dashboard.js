const areActiveClassUser = ( user , owner , status , members ) => {
    const { id , email } = user;
    const areStudent = members.some(member => member.id === id);
    return status === "ACTIVE" && (email  !== owner && areStudent)
}

export {
    areActiveClassUser
}