const splitMembers = (members , owner) => {
    const users = members.filter(member => member.email !== owner);
    const teacher = members.filter(member => member.email === owner);

    return{
        users,
        teacher
    }
}

export{
    splitMembers
}