console.log('Before');
getUser(1, function(user) {
  console.log('User', user);

  getRepositories(user.gitHubUsername, (repos) => {
    console.log("repos", repos)
  });
});

console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Getting user from the Database...');
    callback({ id: id, gitHubUsername: 'em' });
  }, 2000)
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('Getting repos..');

    callback(["repo1", "repo2", "repo3"])
  }, 2000)
}
