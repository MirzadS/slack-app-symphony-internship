const typesOfRoles = (member: any): string => {
    if (member.is_primary_owner) {
        return 'Primary Owner';
    }
    if (member.is_owner) {
        return 'Owner';
    }
    if (member.is_admin) {
        return 'Admin';
    }
    if (member.is_bot) {
        return 'Bot';
    }

    return 'Member';
};

export default typesOfRoles;
