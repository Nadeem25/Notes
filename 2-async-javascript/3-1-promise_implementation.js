const fetchTaskData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ task: 1, status: "Fetch Task Data" })
        }, 2000)
    })
}

const fetchUserData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Use not found")
        }, 3000)
    })
}

const updateUserAccount = async (accountId, taskId) => {
    console.log(`Executed Successfully`);

}

const processUserTask = async () => {
    try {
        const [task, user] = await Promise.all([
            fetchTaskData(), fetchUserData()
        ])
        // console.log(`Result: ${JSON.stringify(result)}`);
        const account = await updateUserAccount(task?.taskId, user?.userId)

    } catch (error) {
        console.log(`Error: ${JSON.stringify(error)}`);

    }
}

const processUserTaskWithAllSettle = async () => {
    try {
        const [task, user] = await Promise.allSettled([
            fetchTaskData(), fetchUserData()
        ])
        console.log(`Result: ${JSON.stringify(task)} and ${JSON.stringify(user)}`);
        //const account = await updateUserAccount(task?.taskId, user?.userId)

    } catch (error) {
        console.log(`Error: ${JSON.stringify(error)}`);

    }
}

processUserTaskWithAllSettle()
//processUserTask()