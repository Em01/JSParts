console.log('Before');

getUser(1, getRepositories(user.gitHubUsername, getCommits);

console.log('After');

function displayCommits(commits) {
  console.log(commits);
}

function getCommits(repos) {
  getCommits(repo, displayCommits)
}

function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

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
