function loadJobs(){

    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    let html = "";

    jobs.forEach(job => {

        html += `
        <div class="job-card">
            <h3>${job.title}</h3>
            <p>${job.department}</p>
            <p>Last Date: ${job.lastdate}</p>
        </div>
        `;

    });

    document.getElementById("jobs").innerHTML = html;
}

loadJobs();
