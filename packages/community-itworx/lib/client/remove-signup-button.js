// Register a method to remove the sign-up button on user_menu template onRendered.
Template.user_menu.onRendered(function () {
    // remove the register button.
    this.$('.account-link.sign-up').remove();
});

// TODO reconfigure the register not to be shown based on a settings value.
