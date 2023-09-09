const express = require('express');
const moment = require('moment-timezone');

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
    const { slackName, track } = req.query;

    const currentDay = moment().tz('UTC').format('dddd');
    const currentUtcTime = moment().tz('UTC');
    const utcTimeStr = currentUtcTime.format('YYYY-MM-DDTHH:mm:ss[Z]');

    const gitRepoUrl = "https://github.com/Gospel-c/stage-one-backend.git";
    const githubFileUrl = `${gitRepoUrl}/blob/main/index.js`;

    const response = {
        slackName,
        currentDay,
        utcTime: utcTimeStr,
        track,
        gitRepoUrl,
        githubFileUrl,
        statusCode: 200,
    }

    res.json(response);
});

app.listen(PORT, function() {
    console.log('Application has started at port 3000');
}); 

