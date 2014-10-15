console.log('The Iron Yard Rocks');

var myIssues = function () {
$.getJSON('https://api.github.com/repos/michellemarin/jsfun/issues', function (data) {
  setIssuesData(data);
});
};

var setIssuesData = function (data) {
  _.each(data, function (issue) {
    var issuesTemplate = _.template($('#theIssueTemplate').html());
    $('#templateContainer').append(issuesTemplate(issue));
    console.log(issuesTemplate);
    console.log(issue);
  });
};

myIssues();
