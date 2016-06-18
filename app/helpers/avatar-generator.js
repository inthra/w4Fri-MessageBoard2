import Ember from 'ember';

export function avatarGenerator(params) {
  var avatar = params[0];
  var avatarAuthorName = avatar.get('author');

  var imageRobot = '<img src="https://cdn0.iconfinder.com/data/icons/characters-filled-1/60/robot-future-fiction-avatar-256.png" alt="Avatar image" class="img-responsive avatar">';

  var imageRandom1 = '<img src="http://forum.jdmstyletuning.com/image.php?u=2316&dateline=1311653750" alt="Avatar image" class="img-responsive avatar">';

  var imageRandom2 = '<img src="https://forum.maniaplanet.com/download/file.php?avatar=1956_1354901205.png" alt="Avatar image" class="img-responsive avatar">';

  var imageRandom3 = '<img src="http://www.gravatar.com/avatar/7805b3707380886a822056f3b0456839?s=96&d=http%3A%2F%2Fcommunity.playstarbound.com%2Fstyles%2Fsimplicity_gray%2Fxenforo%2Favatars%2Favatar_male_m.png" alt="Avatar image" class="img-responsive avatar">';

  if (avatarAuthorName = "Robot") {
    return Ember.String.htmlSafe(imageRobot);
  } else if (avatarAuthorName.length >= 6) {
    return Ember.String.htmlSafe(imageRandom1);
  } else if (avatarAuthorName.length >= 4) {
    return Ember.String.htmlSafe(imageRandom2);
  } else if (avatarAuthorName.length < 4) {
    return Ember.String.htmlSafe(imageRandom3);
  }
}

export default Ember.Helper.helper(avatarGenerator);
