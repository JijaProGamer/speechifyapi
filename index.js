const fs = require("fs")
const gaxios = require("gaxios");
let useragent = require('random-useragent');

module.exports = {
    get: (settings) => {
        return new Promise(async (resolve, reject) => {
            gaxios.request({
                url: `https://snd-audio-on-request-yksus6exbq-uc.a.run.app/?voice=%7B%22name%22%3A%22Matthew%22%2C%22engine%22%3A%22neural%22%2C%22languageCode%22%3A%22en-US%22%7D&content=${encodeURIComponent(settings.text)}&title=`,
                method: "GET",
                resourceType: 'fetch',
                headers: {
                    //'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
                    accept: 'application/json',
                    'content-type': 'application/json',
                    referer: 'https://soundbite.speechify.com/',
                    'sec-ch-ua-mobile': '?0',
                    'user-agent': useragent.getRandom(ua => ua.osName.toLowerCase() === 'windows'),
                    'sec-ch-ua-platform': '"Windows"',
                    origin: 'https://soundbite.speechify.com'
                  },
            }).then((data) => {
                gaxios.request({
                    url: data.data.mp3Url,
                    responseType: "stream",
                }).then((response) => {
                    if(typeof settings.output === "string") settings.output = fs.createWriteStream(settings.output)
    
                    response.data.pipe(settings.output, {end: true})
                    response.data.on("finish", resolve)
                }).catch((err) => {
                    reject(new Error(`Gaxios error: ${err}`))
                })
            }).catch((err) => {
                reject(new Error(`Gaxios error: ${err}`))
            })
        });
    }
}