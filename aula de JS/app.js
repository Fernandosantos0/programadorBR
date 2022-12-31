const nome = (name) => {
    const sobrenome = function(lastname) {
        return lastname;
    };

    return name + sobrenome(' Santos')
};


console.log(nome('Fernando'));