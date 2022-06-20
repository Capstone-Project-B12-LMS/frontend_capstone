const splitMembers = (members , owner) => {
    if(members == undefined || owner == undefined) return false;

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