console.log('Before');

getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    })
  })
})

console.log('After')

function getUser(id) {
  return new Promise((resolve, reject => {
    setTimeout(() => {
      console.log('reading from a db')
      resolve({ id: id, gitHubUsername: 'em'})
    }, 2000);
  })
}


function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('calling api')
      resolve(['repo1', 'repo2', 'repo3'])
    }, 2000)
  })
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('calling api')
      resolve(['repo1', 'repo2', 'repo3'])
    }, 2000)
  })
}

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
