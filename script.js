// Sample Meghalaya Jobs Data
const sampleJobs = [
    {
        id: 1,
        title: "Research Associate (Contractual)",
        department: "Directorate of Employment & Craftsmen Training (DECT), Meghalaya",
        category: "Meghalaya Government",
        advNo: "DECT/2025/001",
        vacancies: 2,
        qualification: "Master's Degree in any subject (60% marks, 55% for SC/ST)",
        ageLimit: "18-32 Years (5-year relaxation for SC/ST)",
        salary: "₹35,000 per month",
        lastDate: "2026-07-11",
        applyLink: "https://dectmeg.nic.in",
        officialWebsite: "https://dectmeg.nic.in",
        notificationPDF: "https://dectmeg.nic.in/news/attachment/70",
        featuredImage: "https://via.placeholder.com/400x200?text=Research+Associate",
        departmentLogo: "https://via.placeholder.com/80x80?text=DECT",
        isFeatured: true,
        description: "The Directorate of Employment and Craftsmen Training (DECT), Meghalaya is hiring Research Associates on contractual basis for a 6-month position (extendable). This is an excellent opportunity for researchers and academics to contribute to government initiatives.",
        eligibility: "Master's degree in any subject from a recognized university with 60% marks (55% for SC/ST). Preference given to Ph.D. holders. Minimum 3 years research or relevant work experience required.",
        selectionProcess: "Shortlisting based on eligibility criteria followed by interview. Original certificates must be produced at interview. No TA/DA provided.",
        examDate: "2026-08-05",
        resultDate: "2026-08-20",
        keyRequirements: "Research methodologies knowledge, statistical software proficiency (SPSS/STATA), data visualization skills, report writing, MS Office proficiency, fieldwork coordination ability, and analytical thinking.",
        applicationMode: "Online via Google Form - All supporting documents required in single PDF file (less than 1MB)"
    },
    {
        id: 2,
        title: "Technical Officer / Training Officer",
        department: "Directorate of Employment & Craftsmen Training (DECT), Meghalaya",
        category: "Meghalaya Government",
        advNo: "DECT/2025/002",
        vacancies: 1,
        qualification: "B.Voc/B.Sc (Ag)/B.Tech (Ag) or Diploma (2 years) or NTC/NAC in relevant field",
        ageLimit: "18-32 Years (SC/ST relaxation as per rules)",
        salary: "As per project guidelines",
        lastDate: "2026-10-21",
        applyLink: "https://dectmeg.nic.in",
        officialWebsite: "https://dectmeg.nic.in",
        notificationPDF: "https://dectmeg.nic.in/news/attachment/70",
        featuredImage: "https://via.placeholder.com/400x200?text=Technical+Officer",
        departmentLogo: "https://via.placeholder.com/80x80?text=DECT",
        isFeatured: true,
        description: "Recruitment for Technical Officer/Training Officer position on contractual basis (1 year, extendable) under Supporting Human Capital Development in Meghalaya Phase II project. Ideal for technical professionals with training background.",
        eligibility: "Bachelor degree holders (B.Voc/B.Sc Ag/B.Tech Ag): 1 year experience required. Diploma holders: 2 years experience. NTC/NAC holders: 3 years experience in relevant field. All qualifications must be from AICTE/UGC recognized institutions.",
        selectionProcess: "Screening of applications followed by interview. Original certificates required, no TA/DA provided. Local candidates from Meghalaya preferred.",
        examDate: "2026-11-10",
        resultDate: "2026-11-25",
        keyRequirements: "Knowledge of training delivery, technical skills in agriculture/vocational sector, field experience, communication skills, training coordination, and commitment to skill development.",
        applicationMode: "Online via Google Form - All supporting documents in single PDF file (less than 1MB). Application link provided in official notification."
    },
    {
        id: 3,
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
        isFeatured: false,
        description: "Assistant Manager (Finance) position in Meghalaya State Civil Service. Candidates with Bachelor's degree in Commerce or Business Administration are invited to apply.",
        eligibility: "Bachelor's degree in any stream, Age between 21-35 years",
        selectionProcess: "Written Test followed by Interview",
        examDate: "2026-08-15",
        resultDate: "2026-09-10"
    },
    {
        id: 4,
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
        isFeatured: false,
        description: "SSC Combined Graduate Level Examination for recruitment to various posts in different government departments.",
        eligibility: "Bachelor's degree or equivalent qualification",
        selectionProcess: "Tier I (CBT), Tier II (CBT), Tier III (Descriptive), Tier IV (Skill/Computer test)",
        examDate: "2026-09-01",
        resultDate: "2026-11-15"
    },
    {
        id: 5,
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
        isFeatured: false,
        description: "Reserve Bank of India invites applications for Probationary Officer positions across various departments.",
        eligibility: "Bachelor's degree from recognized university with aggregate of 50% marks",
        selectionProcess: "Preliminary Examination, Main Examination, Interview",
        examDate: "2026-09-15",
        resultDate: "2026-11-20"
    },
    {
        id: 6,
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
        isFeatured: false,
        description: "Tech Solutions Pvt Ltd is hiring experienced and fresher Software Developers for their Meghalaya office.",
        eligibility: "B.Tech in Computer Science, IT, or related field with knowledge of Java, Python, or C++",
        selectionProcess: "Technical Test followed by Interview",
        examDate: "2026-08-05",
        resultDate: "2026-08-12"
    },
    {
        id: 7,
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
        isFeatured: false,
        description: "Indian Railways is recruiting Technician Grade candidates for various technical positions across railway zones.",
        eligibility: "ITI pass or Diploma with minimum 50% marks in relevant discipline",
        selectionProcess: "CBT followed by Document Verification and Medical Examination",
        examDate: "2026-09-10",
        resultDate: "2026-10-30"
    },
    {
        id: 8,
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
        isFeatured: false,
        description: "State Bank of India is recruiting Bank Clerks across all their branches including Meghalaya region.",
        eligibility: "12th Pass from recognized board, Age between 20-28 years",
        selectionProcess: "Preliminary Exam, Main Exam, and Language Test",
        examDate: "2026-08-25",
        resultDate: "2026-10-15"
    },
    {
        id: 9,
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
        isFeatured: false,
        description: "UPSC Civil Services Examination for recruitment to IAS, IFS, and other All India Services.",
        eligibility: "Bachelor's degree in any stream from recognized university",
        selectionProcess: "Preliminary Examination, Main Examination (9 papers), Interview",
        examDate: "2026-10-02",
        resultDate: "2027-05-20"
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
        isFeatured: false,
        description: "Meghalaya State Board of Education is recruiting qualified teachers for high schools across the state.",
        eligibility: "Bachelor's degree in relevant subject with B.Ed degree",
        selectionProcess: "Merit-based selection through interview",
        examDate: "2026-08-01",
        resultDate: "2026-08-25"
    }
];

// Sample Results Data
const sampleResults = [
    {
        id: 1,
        title: "DECT Research Associate Interview Results 2026",
        link: "https://dectmeg.nic.in",
        date: "2026-08-20"
    },
    {
        id: 2,
        title: "MSTC Written Test Result 2026",
        link: "https://example.com/results",
        date: "2026-06-28"
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
        title: "DECT Technical Officer Interview Call Letter",
        link: "https://dectmeg.nic.in",
        date: "2026-11-05"
    },
    {
        id: 2,
        title: "MSTC Main Exam Admit Card",
        link: "https://example.com/admit",
        date: "2026-06-27"
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

// View job details in modal
function viewJobDetails(jobId) {
    const jobs = getJobs();
    const job = jobs.find(j => j.id === jobId);
    
    if (job) {
        const modal = document.getElementById('jobDetailsModal');
        const content = document.getElementById('jobDetailsContent');
        
        let detailsHTML = `
            <div class="job-details">
                <div class="job-details-header">
                    <h1>${job.title}</h1>
                    <p class="department">${job.department}</p>
                </div>
                
                <div class="job-details-grid">
                    <div class="detail-item">
                        <h3>Advertisement No.</h3>
                        <p>${job.advNo}</p>
                    </div>
                    <div class="detail-item">
                        <h3>Category</h3>
                        <p>${job.category}</p>
                    </div>
                    <div class="detail-item">
                        <h3>Total Vacancies</h3>
                        <p>${job.vacancies}</p>
                    </div>
                    <div class="detail-item">
                        <h3>Salary Range</h3>
                        <p>${job.salary}</p>
                    </div>
                    <div class="detail-item">
                        <h3>Age Limit</h3>
                        <p>${job.ageLimit}</p>
                    </div>
                    <div class="detail-item">
                        <h3>Last Date to Apply</h3>
                        <p>${formatDate(job.lastDate)}</p>
                    </div>
                </div>
                
                <div class="job-details-section">
                    <h2>Description</h2>
                    <p>${job.description}</p>
                </div>
                
                <div class="job-details-section">
                    <h2>Qualification Required</h2>
                    <p>${job.qualification}</p>
                </div>
                
                <div class="job-details-section">
                    <h2>Eligibility Criteria</h2>
                    <p>${job.eligibility}</p>
                </div>
                
                <div class="job-details-section">
                    <h2>Selection Process</h2>
                    <p>${job.selectionProcess}</p>
                </div>
        `;

        // Add key requirements if available
        if (job.keyRequirements) {
            detailsHTML += `
                <div class="job-details-section">
                    <h2>Key Requirements</h2>
                    <p>${job.keyRequirements}</p>
                </div>
            `;
        }

        // Add application mode if available
        if (job.applicationMode) {
            detailsHTML += `
                <div class="job-details-section">
                    <h2>Application Mode</h2>
                    <p>${job.applicationMode}</p>
                </div>
            `;
        }

        detailsHTML += `
                <div class="job-details-grid">
                    <div class="detail-item">
                        <h3>Exam Date</h3>
                        <p>${formatDate(job.examDate)}</p>
                    </div>
                    <div class="detail-item">
                        <h3>Result Date</h3>
                        <p>${formatDate(job.resultDate)}</p>
                    </div>
                </div>
                
                <div class="job-details-actions">
                    <a href="${job.applyLink}" target="_blank" class="btn-apply">Apply Now</a>
                    <a href="${job.notificationPDF}" target="_blank" class="btn-download">Download Notification</a>
                    <a href="${job.officialWebsite}" target="_blank" class="btn-official">Official Website</a>
                </div>
            </div>
        `;
        
        content.innerHTML = detailsHTML;
        modal.style.display = 'block';
    }
}

// Close job details modal
function closeJobModal() {
    const modal = document.getElementById('jobDetailsModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('jobDetailsModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
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

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllSections);
} else {
    loadAllSections();
}
