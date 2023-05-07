const speechifyApi = require("./index")
const path = require("path")

let getAudio = (index) => {
    return new Promise((resolve, reject) => {
        let start = (new Date()) / 1000
        speechifyApi.get({
            text: `This is a test ${index}?  YOu sure about "that"`,
            output: path.join(__dirname, `temp${index}.mp3`)
        }).then(() => {
            console.log(`Individual time taken for index ${index}: ${(new Date()) / 1000 - start}`)

            resolve()
        }).catch((err) => {
            reject(err)
        })
    })
};

(async () => {
    let durations = []
    for (let i = 0; i < 15; i++) {
        let start = (new Date()) / 1000

        await getAudio(i)
        durations.push(((new Date()) / 1000) - start)
    }

    let sum = durations[0]

    for (let i = 1; i < durations.length; i++) {
        sum = (sum + durations[i]) / 2
    }

    console.log(`Total time taken: ${sum}`)
})//();

getAudio(123)