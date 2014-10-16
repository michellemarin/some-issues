
var myIssues = function () {
  $.getJSON('https://api.github.com/repos/michellemarin/jsfun/issues', function (data) {
    $('#issues').empty();
    setIssuesData(data);
  });
};

var setIssuesData = function (data) {
  _.each(data, function (issue) {
    var issuesTemplate = _.template($('#issueTemplate').html());
    $('#issues').append(issuesTemplate(issue));
  });
};



setInterval(myIssues , 1000);
