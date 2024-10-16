console.log('Before');

//Promise-based approach
// getUser(1)
//     .then(user => getRepositories(user.githubuser))
//     .then(repositories => console.log(repositories))
//     .catch(err => console.log('Error'), err.message)

//async and await approach
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.githubuser);
        console.log(repos)
    }
    catch (err) {
        console.log('Error', err.message)
    }
}

displayCommits()


function displayUser(user) {
    console.log('User', user);
    getRepositories(user.githubuser, displayRepositories);
}

function displayRepositories(array) {
    console.log(array)
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: id, githubuser: 'melaniaift' })
        }, 2000)
    })
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(['repo1', 'repo2', 'repo3'])
            reject(new Error('cannot'))
        }, 2000)
    })
}
console.log('After')