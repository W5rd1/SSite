const ClientID = "ffid0hjsu47c8dw5of4ejkt3grgrzy";
const ResponseType = "token+id_token";
const Scope = ["user_follows_edit", "openid"];
const RedirectUri = "localhost:3000";

let Scopes = Scope.join("%20");
let URL =
  "https://id.twitch.tv/oauth2/authorize?client_id=" +
  ClientID +
  "&redirect_uri=" +
  RedirectUri +
  "&response_type=" +
  ResponseType +
  "&scope=" +
  Scopes;
export default URL;
