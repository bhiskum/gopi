var getUser = (id, callback) => {
    var user ={
        id: id,
        name:'Abhi'
    } ;
    callback(user);
}

getUser(31,(userObject) => {
    console.log(userObject);
});