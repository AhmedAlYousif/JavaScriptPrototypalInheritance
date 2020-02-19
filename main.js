/*
Start of User Class
*/
function User(email, username) { // User Constractor
    this.email = email;
    this.username = username;
    this.isOnline = false;
    this.isDisable = false;
}
User.prototype.login = function(password){
    this.isOnline = true;
    console.log(this.username + ' has logged in.');
}
User.prototype.logout = function(){
    this.isOnline = false;
    console.log(this.username + ' has logged out.');
}
/*
End of User Class
*/
var user = new User('user@mail.com', 'user');
console.log(user);
/*
Start of Admin Class
*/
function Admin(email, username){ // Admin Constractor
    User.call(this, email, username);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.disableUser = function(user){
    user.isDisable = true;
    console.log(this.username + ' has disabled: ' + user.username);
}
Admin.prototype.enableUser = function(user){
    user.isDisable = false;
    console.log(this.username + ' has enabled: ' + user.username);
}
/*
End of Admin Class
*/
var admin = new Admin('admin@mail.com', 'admin');
console.log(admin);