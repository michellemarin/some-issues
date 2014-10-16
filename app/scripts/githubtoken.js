var token = 'd8f7165ccb82e322576430b269ed0e6ca3f7b283';

$.ajaxSetup({
    headers: {
      "Authorization": "token " + token
    }
});
