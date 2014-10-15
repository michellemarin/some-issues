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
    setInterval(function() {
    $('#theIssueTemplate').remove();
  }, 1000);
  });
};

myIssues();

var issueAmount = myIssues.length;
var interval = setInterval (function(myIssues) {
  issueAmount += 1;
  if (issueAmount === 2) {
    clearInterval(interval);
  }
}, 1000);



console.log(interval);
