// Sample Meghalaya Jobs Data
const sampleJobs = [
    {
        id: 1,
        title: "Assistant Manager (Finance)",
        department: "Meghalaya State Civil Service",
        category: "Meghalaya Government",
        advNo: "MSTC/2026/001",
        vacancies: 15,
        qualification: "Bachelor's in Commerce/Business Administration",
        ageLimit: "21-35 Years",
        salary: "₹50,000 - ₹80,000",
        lastDate: "2026-07-30",
        applyLink: "https://example.com/apply",
        officialWebsite: "https://meghalaya.gov.in",
        notificationPDF: "https://example.com/notification.pdf",
        featuredImage: "https://via.placeholder.com/400x200?text=Assistant+Manager+Finance",
        departmentLogo: "https://via.placeholder.com/80x80?text=MSTC",
        isFeatured: true
    },
    {
        id: 2,
        title: "Research Officer",
        department: "Meghalaya State Institute of Rural Development",
        category: "Meghalaya Government",
        advNo: "MSIRD/2026/002",
        vacancies: 8,
        qualification: "Master's in Economics/Sociology",
        ageLimit: "23-40 Years",
        salary: "₹45,000 - ₹75,000",
        lastDate: "2026-07-25",
        applyLink: "https://example.com/apply",
        officialWebsite: "https://meghalaya.gov.in",
        notificationPDF: "https://example.com/notification.pdf",
        featuredImage: "https://via.placeholder.com/400x200?text=Research+Officer",
        departmentLogo: "https://via.placeholder.com/80x80?text=MSIRD",
        isFeatured: true
    },
    {
        id: 3,
        title: "SSC Combined Graduate Level (CGL) Exam",
        department: "Staff Selection Commission",
        category: "SSC",
        advNo: "SSC/CGL/2026/001",
        vacancies: 5000,
        qualification: "12th Pass",
        ageLimit: "18-32 Years",
        salary: "₹25,500 - ₹81,100",
        lastDate: "2026-08-15",
        applyLink: "https://ssc.nic.in",
        officialWebsite: "https://ssc.nic.in",
        notificationPDF: "https://example.com/notification.pdf",
        featuredImage: "https://via.placeholder.com/400x200?text=SSC+CGL+Exam",
        departmentLogo: "https://via.placeholder.com/80x80?text=SSC",
        isFeatured: true
    },
    {
        id: 4,
        title: "Central Bank Recruitment - Probationary Officers",
        department: "Reserve Bank of India",
        category: "Central Government",
        advNo: "RBI/PO/2026/001",
        vacancies: 250,
        qualification: "Bachelor's Degree",
        ageLimit: "21-30 Years",
        salary: "₹60,000 - ₹1,50,000",
        lastDate: "2026-08-20",
        applyLink: "https://rbi.org.in",
        officialWebsite: "https://rbi.org.in",
        notificationPDF: "https://example.com/notification.pdf",
        featuredImage: "https://via.placeholder.com/400x200?text=RBI+Probationary+Officer",
        departmentLogo: "https://via.placeholder.com/80x80?text=RBI",
        isFeatured: false
    },
    {
        id: 5,
        title: "Software Developer (Private)",
        department: "Tech Solutions Pvt Ltd",
        category: "Private",
        advNo: "TECH/DEV/2026/001",
        vacancies: 20,
        qualification: "B.Tech in Computer Science",
        ageLimit: "21-28 Years",
        salary: "₹40,000 - ₹70,000",
        lastDate: "2026-07-20",
        applyLink: "https://techsolutions.com/careers",
        officialWebsite: "https://techsolutions.com",
        notificationPDF: "https://example.com/notification.pdf",
        featuredImage: "https://via.placeholder.com/400x200?text=Software+Developer",
        departmentLogo: "https://via.placeholder.com/80x80?text=Tech+Solutions",
        isFeatured: false
    },
    {
        id: 6,
        title: "Railway Recruitment - Technician Grade",
        department: "Indian Railways",
        category: "Railways",
        advNo: "RWY/TECH/2026/001",
        vacancies: 1500,
        qualification: "ITI or Diploma",
        ageLimit: "18-33 Years",
        salary: "₹25,000 - ₹55,000",
        lastDate: "2026-08-10",
        applyLink: "https://indianrailways.gov.in",
        officialWebsite: "https://indianrailways.gov.in",
        notificationPDF: "https://example.com/notification.pdf",
        featuredImage: "https://via.placeholder.com/400x200?text=Railway+Technician",
        departmentLogo: "https://via.placeholder.com/80x80?text=Railways",
        isFeatured: false
    },
    {
        id: 7,
        title: "Bank Clerk Recruitment",
        department: "State Bank of India",
        category: "Banking",
        advNo: "SBI/CLERK/2026/001",
        vacancies: 5000,
        qualification: "12th Pass",
        ageLimit: "20-28 Years",
        salary: "₹20,000 - ₹45,000",
        lastDate: "2026-08-05",
        applyLink: "https://sbi.co.in",
        officialWebsite: "https://sbi.co.in",
        notificationPDF: "https://example.com/notification.pdf",
        featuredImage: "https://via.placeholder.com/400x200?text=Bank+Clerk",
        departmentLogo: "https://via.placeholder.com/80x80?text=SBI",
        isFeatured: true
    },
    {
        id: 8,
        title: "UPSC Civil Services Examination",
        department: "Union Public Service Commission",
        category: "Central Government",
        advNo: "UPSC/CSE/2026/001",
        vacancies: 1000,
        qualification: "Bachelor's Degree",
        ageLimit: "21-32 Years",
        salary: "₹56,100 - ₹2,50,000",
        lastDate: "2026-09-15",
        applyLink: "https://upsc.gov.in",
        officialWebsite: "https://upsc.gov.in",
        notificationPDF: "https://example.com/notification.pdf",
        featuredImage: "https://via.placeholder.com/400x200?text=UPSC+CSE",
        departmentLogo: "https://via.placeholder.com/80x80?text=UPSC",
        isFeatured: false
    },
    {
        id: 9,
        title: "Market Research Analyst",
        department: "Business Analytics Corp",
        category: "Private",
        advNo: "BAC/MRA/2026/001",
        vacancies: 12,
        qualification: "Master's in Business/Marketing",
        ageLimit: "22-32 Years",
        salary: "₹35,000 - ₹60,000",
        lastDate: "2026-07-28",
        applyLink: "https://bac.com/careers",
        officialWebsite: "https://bac.com",
        notificationPDF: "https://example.com/notification.pdf",
        featuredImage: "https://via.placeholder.com/400x200?text=Market+Research",
        departmentLogo: "https://via.placeholder.com/80x80?text=BAC",
        isFeatured: false
    },
    {
        id: 10,
        title: "Teaching Staff (High School)",
        department: "Meghalaya State Board of Education",
        category: "Meghalaya Government",
        advNo: "MSBE/TEACH/2026/001",
        vacancies: 100,
        qualification: "B.Ed with Bachelor's Degree",
        ageLimit: "21-40 Years",
        salary: "₹32,000 - ₹68,000",
        lastDate: "2026-07-15",
        applyLink: "https://megedu.gov.in",
        officialWebsite: "https://megedu.gov.in",
        notificationPDF: "https://example.com/notification.pdf",
        featuredImage: "https://via.placeholder.com/400x200?text=Teaching+Staff",
        departmentLogo: "https://via.placeholder.com/80x80?text=MSBE",
        isFeatured: false
    }
];

// Sample Results Data
const sampleResults = [
    {
        id: 1,
        title: "MSTC Written Test Result 2026",
        link: "https://example.com/results",
        date: "2026-06-28"
    },
    {
        id: 2,
        title: "SSC CGL Tier I Result 2025",
        link: "https://ssc.nic.in/results",
        date: "2026-06-25"
    },
    {
        id: 3,
        title: "Bank Clerk Preliminary Result",
        link: "https://sbi.co.in/results",
        date: "2026-06-20"
    }
];

// Sample Admit Cards Data
const sampleAdmitCards = [
    {
        id: 1,
        title: "MSTC Main Exam Admit Card",
        link: "https://example.com/admit",
        date: "2026-06-27"
    },
    {
        id: 2,
        title: "Civil Service Exam Admit Card",
        link: "https://upsc.gov.in/admit",
        date: "2026-07-01"
    },
    {
        id: 3,
        title: "Railway Technician Admit Card",
        link: "https://indianrailways.gov.in/admit",
        date: "2026-06-30"
    }
];

// Sample Scholarships Data
const sampleScholarships = [
    {
        id: 1,
        title: "Merit Scholarship for Engineering Students 2026",
        link: "https://example.com/scholarships",
        date: "2026-06-29"
    },
    {
        id: 2,
        title: "Central Sector Scheme of Scholarship for College and University Students",
        link: "https://scholarships.gov.in",
        date: "2026-06-15"
    },
    {
        id: 3,
        title: "Post Matric Scholarship Scheme for SC/ST Students",
        link: "https://meghalaya.gov.in/scholarships",
        date: "2026-06-10"
    }
];

// Initialize localStorage with sample data if empty
function initializeData() {
    if (!localStorage.getItem('jobs')) {
        localStorage.setItem('jobs', JSON.stringify(sampleJobs));
    }
    if (!localStorage.getItem('results')) {
        localStorage.setItem('results', JSON.stringify(sampleResults));
    }
    if (!localStorage.getItem('admitCards')) {
        localStorage.setItem('admitCards', JSON.stringify(sampleAdmitCards));
    }
    if (!localStorage.getItem('scholarships')) {
        localStorage.setItem('scholarships', JSON.stringify(sampleScholarships));
    }
    if (!localStorage.getItem('nextJobId')) {
        localStorage.setItem('nextJobId', '11');
    }
}

// Get all jobs
function getJobs() {
    initializeData();
    return JSON.parse(localStorage.getItem('jobs')) || [];
}

// Get results
function getResults() {
    return JSON.parse(localStorage.getItem('results')) || [];
}

// Get admit cards
function getAdmitCards() {
    return JSON.parse(localStorage.getItem('admitCards')) || [];
}

// Get scholarships
function getScholarships() {
    return JSON.parse(localStorage.getItem('scholarships')) || [];
}

// Display jobs in a grid
function displayJobs(jobs, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (jobs.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 40px 0;">No jobs available in this category.</p>';
        return;
    }

    container.innerHTML = jobs.map(job => `
        <div class="job-card">
            ${job.isFeatured ? '<div style="padding: 15px 20px; background: #fff5e6;"><span class="featured-badge">⭐ Featured</span></div>' : ''}
            <div class="job-card-header">
                <h3>${job.title}</h3>
                <p>${job.department}</p>
            </div>
            <div class="job-card-body">
                <div class="job-meta">
                    <div class="meta-item">
                        <strong>Vacancies</strong>
                        <span>${job.vacancies}</span>
                    </div>
                    <div class="meta-item">
                        <strong>Last Date</strong>
                        <span>${formatDate(job.lastDate)}</span>
                    </div>
                    <div class="meta-item">
                        <strong>Category</strong>
                        <span>${job.category}</span>
                    </div>
                    <div class="meta-item">
                        <strong>Salary</strong>
                        <span>${job.salary}</span>
                    </div>
                </div>
                <p><strong>Qualification:</strong> ${job.qualification}</p>
                <p><strong>Age Limit:</strong> ${job.ageLimit}</p>
            </div>
            <div class="job-card-footer">
                <button class="card-btn card-btn-primary" onclick="window.open('${job.applyLink}', '_blank')">Apply Now</button>
                <button class="card-btn card-btn-secondary" onclick="viewJobDetails(${job.id})">View Details</button>
            </div>
        </div>
    `).join('');
}

// Display notifications
function displayNotifications(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 40px 0;">No notifications available.</p>';
        return;
    }

    container.innerHTML = items.map((item, index) => `
        <div class="notification-card">
            <h4>${item.title}</h4>
            <p><small>${formatDate(item.date)}</small></p>
            <a href="${item.link}" target="_blank">View Full Details →</a>
        </div>
    `).join('');
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Load all sections on page load
function loadAllSections() {
    initializeData();
    const jobs = getJobs();
    const results = getResults();
    const admitCards = getAdmitCards();
    const scholarships = getScholarships();

    // Display latest jobs (limit to 6)
    displayJobs(jobs.slice(0, 6), 'latestJobsList');

    // Display featured jobs
    displayJobs(jobs.filter(j => j.isFeatured), 'featuredJobsList');

    // Display government jobs
    displayJobs(jobs.filter(j => j.category === 'Meghalaya Government'), 'meghalayaGovJobs');

    // Display central government jobs
    displayJobs(jobs.filter(j => j.category === 'Central Government' || j.category === 'SSC' || j.category === 'UPSC'), 'centralGovJobs');

    // Display private jobs
    displayJobs(jobs.filter(j => j.category === 'Private'), 'privateJobs');

    // Display notifications
    displayNotifications(results, 'resultsList');
    displayNotifications(admitCards, 'admitCardsList');
    displayNotifications(scholarships, 'scholarshipsList');
}

// Search jobs
function searchJobs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!searchTerm) {
        loadAllSections();
        return;
    }

    const jobs = getJobs();
    const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.department.toLowerCase().includes(searchTerm) ||
        job.category.toLowerCase().includes(searchTerm)
    );

    displayJobs(filtered, 'latestJobsList');
    document.getElementById('featuredJobsList').innerHTML = '';
    document.getElementById('meghalayaGovJobs').innerHTML = '';
    document.getElementById('centralGovJobs').innerHTML = '';
    document.getElementById('privateJobs').innerHTML = '';
}

// Filter by category
function filterByCategory(category) {
    const jobs = getJobs();
    const filtered = jobs.filter(job => job.category === category);
    displayJobs(filtered, 'latestJobsList');
    document.getElementById('featuredJobsList').innerHTML = '';
    document.getElementById('meghalayaGovJobs').innerHTML = '';
    document.getElementById('centralGovJobs').innerHTML = '';
    document.getElementById('privateJobs').innerHTML = '';
}

// View job details
function viewJobDetails(jobId) {
    const jobs = getJobs();
    const job = jobs.find(j => j.id === jobId);
    if (job) {
        alert(`Job Details: ${job.title}\nDepartment: ${job.department}\nVacancies: ${job.vacancies}\nSalary: ${job.salary}\n\nLast Date: ${formatDate(job.lastDate)}\n\nClick Apply Now to visit the official website.`);
    }
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllSections);
} else {
    loadAllSections();
}