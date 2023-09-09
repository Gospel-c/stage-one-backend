const express = require('express');
const moment = require('moment-timezone');

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
    const { slack_name, track } = req.query;

    const current_day = moment().tz('UTC').format('dddd');
    const currentUtcTime = moment().tz('UTC');
    const utc_time = currentUtcTime.format('YYYY-MM-DDTHH:mm:ss[Z]');

    const git_repo_url = "https://github.com/Gospel-c/stage-one-backend.git";
    const github_file_url = `${git_repo_url}/blob/main/index.js`;

    const response = {
        slack_name,
        current_day,
        utc_time: utc_time,
        track,
        github_file_url,
        git_repo_url,
        status_code: 200,
    }

    res.json(response);
});

app.listen(PORT, function() {
    console.log('Application has started at port 3000');
}); 

