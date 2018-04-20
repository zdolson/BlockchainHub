var admin = require('firebase-admin');

var serviceAccount = {
  "type": "service_account",
  "project_id": "neo-market-8a303",
  "private_key_id": "47f1b8df8b963695c9193853ca0db0f6130bb3db",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCoGaYRU61de/E4\nBxfp2GaPaqNUGvouJtxdV4dniVb6xTalqk2kVgIiMERIfnXokuRc8+T3eB0j1JKv\nlM45GfaDqDOuDi6fJ06BrgrVQm2Dc2TeP8c7zs4CXevUDJGqjEIyUBECKOwvD14X\nzt17S0NpB1hYVPs/uMlOgxDDAnawHwsNHaT8sDVUBXrfZFMRFnunqR4a2tSlkwRD\n4lfqnS0f8jAxwzzC+Rf2klQ/O/TcF5TQ6lYEzoTr6TRo2frMScVVAhHvHn/K1dAq\n+oPK7hS7GMq0cMBl46+/+gzr70+4orcOITYa7CG2CF43TwnY5XMWrcIgkUKZTTQH\neQnTypu7AgMBAAECggEARXRDf0k5ijSZl/KmWMJGrd77mNaEo+j+h7qQgaDnRTmS\nuKRC7DF1NDcJH4LQqMV4gUdsRStlrtY3vUAYbNNjXUZ0A+hsLuoIr9//LdoCcZuO\nA54KbZWm3Kd9tuFylirZdvxJ6sCJxW/uCpw4OqcANTcJs4V5QfzRgBT7Kfesnlup\nGXdBXjn7v5OMow1dcdTOBtb/4xBU9NZ4pIWqSkG1AIXXQ9k9p+mhXxLCB722I3Hp\nb1qB3hUPXbLD9i0ORSK+rfMq9t7O3Hxvb7xzcNVtFf9wxwn5ZvLmWNTG87nwsQJT\nHy069+gR2tBAnuqMPXi8E7JD5b6H7uTlaNF3Laj20QKBgQDifOtZvhtRfkOztTSp\n18OJiqma0ToBKo/f5AqEilQeys6aO6Icnk+tHyd4bCqC5U0+NtYMJxRSucwZvx0Y\nzX+nta4s0g1+ARgRzM3xm7HqKiQvZ6OSc8A2Z/xezlQH++ehOVc+am+pHKlJCVOj\nyuzdCVpcbpB/kQzNKlUIfyP5/wKBgQC+AQ6WS+sJX0iv3TD/swjdPehmZSNGR+iP\n1wnPyMXbp/MWgNYQa2K+p84UR7J9FxECZB2KxdsyQ6P2LhFSvm9R0lzeJ6hB4AWY\nll7prh7lnOtkFUeM0bU54862wIMrC1eRx7N3Ghkvh2hQutaN5O5ENnK7cc4cBTMR\njVbUskPGRQKBgC0OyQuLhIfL5NAlppp7cE02ptND+JQu0XyrM2R22JFfq4aHgpLK\n8/LvFb0hV7u+voU4B5FXXPWwPOiKWtGKYHEO9d241DJTKWSxJ+9/GAAL7jL4HVSP\nbpfkTBLYXWNRPB2Y+MBUEG7GYu9Cyb72KfU3XSCyZlDanH9cgpo0IQYlAoGAQ+8M\n0CAEwS0YSAjF5CaXHMNtvG6c1hwPwp4YG/qlA4xhFcKqxuQeQhytSgL4hlEg+8Hf\n7iYf4TDeBr8h4nvEQXT9T1DOj/8RASWCefqPgXlBkF8rXeX87d3Novnh7Bn6DV1h\nhUwHhT7cxUCIReN8bVcqXmqqTsptH/FxAktagCECgYAEXC4qnRslRd81C7JIm2Cl\nvPe9/nlPyr5bP0amWRXaAhJAdTxQfrLvw1lhRmApbtvS8tkL4A2YZ34+xWdXGDma\nsSeVvsdAXeRhGTYGk/CHI+atExT0xU1rbloEjAgkoXtwq2MwIgbiVCa5zP3nuaU+\nDH2JpGQzNML/grR0TrFUvQ==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-n2c7w@neo-market-8a303.iam.gserviceaccount.com",
  "client_id": "107355461835086931225",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n2c7w%40neo-market-8a303.iam.gserviceaccount.com"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://neo-market-8a303.firebaseio.com"
});

function main() {
  var db = admin.database();
  var ref = db.ref("/Listings/");
  ref.once("value", function(snapshot) {
    console.log(snapshot.val());
  });
}

main();
