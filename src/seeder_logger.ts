/**
 * problem 2
 * i need a way to track my commits
 * ok it would be simple to just jump on terminal but with this i need a visual representation
 * somehow github doesnt do a good job with this this
 * 
 * also with this i can incooperate alot like a simple todo instead of github project
 */


import { faker } from "@faker-js/faker"


interface todo__scheMa {
    id: string,
    status: string,
    todo: string
}

interface Server__Logs {
    id: string
    timestamp: Date,
    log_warn: string,
    log: string
}

interface git_Recent_Commits {
    author: string,
    commit: string,
    message: string
}


export const bunch_of_random_server_logs = (): Server__Logs => {
    const log_status: string[] = ["WARN", "SUCCESS", "ERROR", "DOWN"];
    return  {
        id: faker.string.uuid(),
        timestamp: faker.date.between({ from: '2024-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' }),
        log_warn: log_status[ Math.floor(Math.random() * log_status.length) ],
        log: faker.database.mongodbObjectId()
    }
}

export const todo__scheMa_fake_data = (): todo__scheMa => {
    const status: string[] = ["PROGRESS", "DONE", "HELD"];
    return  {
        id: faker.string.uuid(),
        status:  status[ Math.floor(Math.random() * status.length) ],
        todo: faker.database.mongodbObjectId()
    }
}

export const git_Recent_Commits_faker = (): git_Recent_Commits => {
    return {
        author: faker.internet.userName(),
        commit: faker.string.uuid(),
        message: faker.database.mongodbObjectId()
    }
}