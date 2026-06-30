function addJob() {

    let title = document.getElementById("title").value;
    let department = document.getElementById("department").value;
    let lastdate = document.getElementById("lastdate").value;

    if(!title || !department || !lastdate){
        alert("Please fill all fields");
        return;
    }

    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    jobs.push({
        title,
        department,
        lastdate
    });

    localStorage.setItem("jobs", JSON.stringify(jobs));

    displayJobs();

    document.getElementById("title").value="";
    document.getElementById("department").value="";
    document.getElementById("lastdate").value="";
}

function displayJobs(){

    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    let html = "";

    jobs.forEach((job,index)=>{

        html += `
        <div class="job-card">
            <h3>${job.title}</h3>
            <p>${job.department}</p>
            <p>Last Date: ${job.lastdate}</p>
        </div>
        `;
    });

    document.getElementById("joblist").innerHTML = html;
}

displayJobs();
