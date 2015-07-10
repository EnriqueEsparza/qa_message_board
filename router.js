Message.Router.map(function(){
  this.resource('questions', {path: '/'});
  this.resource('recent-answers');
  this.resource('question', {path: 'question/:question_id'}, function() {
    this.resource('new-answer');
  });
  this.resource('new-question');
});
