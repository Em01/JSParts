console.log('Before');

// getUser(1)
//   .then(user => getRepositories(user.gitHubUsername))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log('Commits', commits))
//   .catch(err => console.log('Error', err.message));

  console.log('After');

  //Async and Await approach
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  }
  catch(err) {
    console.log(err.message)
  }
}

displayCommits()

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('reading from a db')
      // reject(new Error('error'))
      resolve({ id: id, gitHubUsername: 'em' })
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

console.log('After');
