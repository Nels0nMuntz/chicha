const isEmpty = <T extends object>(obj: T) => {
    return !Object.values(obj).length
};

export default isEmpty;