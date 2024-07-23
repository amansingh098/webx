const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Function to add custom claims to a user
exports.addAdminRole = functions.https.onCall(async (data, context) => {
  // Check if the request is made by an authenticated admin
  if (!context.auth.token.admin) {
    return { error: 'Request not authorized. Only admins can add other admins.' };
  }

  // Get the user by email
  const user = await admin.auth().getUserByEmail(data.email);

  // Set custom claims
  return admin.auth().setCustomUserClaims(user.uid, {
    admin: true,
  }).then(() => {
    return {
      message: `Success! ${data.email} has been made an admin.`,
    };
  }).catch(err => {
    return { error: err.message };
  });
});
