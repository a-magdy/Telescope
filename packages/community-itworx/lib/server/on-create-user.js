function setUserFirstAndLastNames (user) {

    var userNamesSplit = user.username.split('.');

   // Assigns first and last names to the newly created user object
   if(!_.isEmpty(userNamesSplit[0]))
   {
     user.profile.firstName = userNamesSplit[0];
   }

   if(!_.isEmpty(userNamesSplit[1]))
   {
     user.profile.lastName = userNamesSplit[1];
   }

   user.profile.name = user.username;

   user.services.password = user.services.password || {};
   // bcrypt password for "telescope" (set it so that on-login, it doesn't throw an error, that the user has no set password).
   user.services.password.bcrypt = "$2a$10$9KquKoW3OU1nct3V3lKXGee/yeFxS4KEwWq7i9/Xo0O4x1fTcP2Ri";

   //user.telescope.displayName = _.capitalize(user.username.replace('.', ' '));

   // TODO Set the display name to the username:
   //   1. Replace the '.' with space.
   //   2. Capitalize the Name using underscoe.

   // Returns the user object
   return user;
}

Telescope.callbacks.add("onCreateUser", setUserFirstAndLastNames);
