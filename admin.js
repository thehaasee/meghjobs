// Image preview functionality
function previewImage(input, previewElementId) {
    const previewContainer = document.getElementById(previewElementId);
    previewContainer.innerHTML = '';
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'image-preview';
            previewContainer.appendChild(img);
            
            // Convert to base64 and store in the corresponding URL field
            const fieldId = input.id.replace('File', '');
            document.getElementById(fieldId).value = e.target.result;
        };
        
        reader.readAsDataURL(input.files[0]);
    }
}

// Check authentication on page load
window.addEventListener('load', function() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    } else {
        document.getElementById('adminUsername').textContent = 'Welcome, ' + localStorage.getItem('username');
        loadDashboard();
        loadManageJobs();
        loadResults();
        loadAdmitCards();
        loadScholarships();
        loadCategories();
    }
});

// Show/Hide sections
function showSection(sectionId, event) {
    event.preventDefault();
    
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all links
    document.querySelectorAll('.admin-sidebar a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
}

// Dashboard
function loadDashboard() {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const results = JSON.parse(localStorage.getItem('results')) || [];
    const admitCards = JSON.parse(localStorage.getItem('admitCards')) || [];

    document.getElementById('totalJobs').textContent = jobs.length;
    document.getElementById('featuredJobsCount').textContent = jobs.filter(j => j.isFeatured).length;
    document.getElementById('totalResults').textContent = results.length;
    document.getElementById('totalAdmitCards').textContent = admitCards.length;
}

// Add Job
document.getElementById('addJobForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const nextId = parseInt(localStorage.getItem('nextJobId')) || 1;

    const newJob = {
        id: nextId,
        title: document.getElementById('jobTitle').value,
        department: document.getElementById('department').value,
        category: document.getElementById('category').value,
        advNo: document.getElementById('advNo').value,
        vacancies: parseInt(document.getElementById('vacancies').value),
        qualification: document.getElementById('qualification').value,
        ageLimit: document.getElementById('ageLimit').value,
        salary: document.getElementById('salary').value,
        lastDate: document.getElementById('lastDate').value,
        applyLink: document.getElementById('applyLink').value,
        officialWebsite: document.getElementById('officialWebsite').value,
        notificationPDF: document.getElementById('notificationPDF').value,
        featuredImage: document.getElementById('featuredImage').value || document.getElementById('featuredImageFile').value,
        departmentLogo: document.getElementById('departmentLogo').value || document.getElementById('departmentLogoFile').value,
        isFeatured: document.getElementById('isFeatured').value === 'true'
    };

    jobs.push(newJob);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    localStorage.setItem('nextJobId', (nextId + 1).toString());

    const messageEl = document.getElementById('addJobMessage');
    messageEl.textContent = 'Job added successfully!';
    messageEl.classList.add('success');
    messageEl.classList.remove('error');
    
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 3000);

    this.reset();
    document.getElementById('featuredImagePreview').innerHTML = '';
    document.getElementById('departmentLogoPreview').innerHTML = '';
    loadDashboard();
});

// Manage Jobs
function loadManageJobs() {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const tbody = document.getElementById('jobsTableBody');
    
    if (!tbody) return;
    
    if (jobs.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px;">No jobs found</td></tr>';
        return;
    }

    tbody.innerHTML = jobs.map(job => `
        <tr>
            <td>${job.title}</td>
            <td>${job.department}</td>
            <td>${job.category}</td>
            <td>${job.vacancies}</td>
            <td>${formatDate(job.lastDate)}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-small" style="background: #0A2342; color: white;" onclick="editJob(${job.id})">Edit</button>
                    <button class="btn btn-small btn-danger" onclick="deleteJob(${job.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Search jobs in admin
function searchJobsAdmin() {
    const searchTerm = document.getElementById('searchJobs').value.toLowerCase().trim();
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const filtered = jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm) || 
        job.department.toLowerCase().includes(searchTerm)
    );
    
    const tbody = document.getElementById('jobsTableBody');
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px;">No jobs found</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(job => `
        <tr>
            <td>${job.title}</td>
            <td>${job.department}</td>
            <td>${job.category}</td>
            <td>${job.vacancies}</td>
            <td>${formatDate(job.lastDate)}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-small" style="background: #0A2342; color: white;" onclick="editJob(${job.id})">Edit</button>
                    <button class="btn btn-small btn-danger" onclick="deleteJob(${job.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Edit job (for now, delete and re-add)
function editJob(jobId) {
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const job = jobs.find(j => j.id === jobId);
    
    if (job) {
        if (confirm('Edit functionality: Delete and add new job with updated details?')) {
            deleteJob(jobId);
            alert('Job deleted. Add the updated job from the "Add Job" section.');
        }
    }
}

// Delete job
function deleteJob(jobId) {
    if (!confirm('Are you sure you want to delete this job?')) return;
    
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    jobs = jobs.filter(j => j.id !== jobId);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    
    loadManageJobs();
    loadDashboard();
    
    const messageEl = document.getElementById('manageJobsMessage');
    if (messageEl) {
        messageEl.textContent = 'Job deleted successfully!';
        messageEl.classList.add('success');
        messageEl.classList.remove('error');
        setTimeout(() => {
            messageEl.style.display = 'none';
        }, 3000);
    }
}

// Results Management
function loadResults() {
    const results = JSON.parse(localStorage.getItem('results')) || [];
    const tbody = document.getElementById('resultsTableBody');
    
    if (!tbody) return;
    
    if (results.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px;">No results found</td></tr>';
        return;
    }

    tbody.innerHTML = results.map(result => `
        <tr>
            <td>${result.title}</td>
            <td><a href="${result.link}" target="_blank">View</a></td>
            <td>${formatDate(result.date)}</td>
            <td>
                <button class="btn btn-small btn-danger" onclick="deleteResult(${result.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function addResult() {
    const title = document.getElementById('resultTitle').value.trim();
    const link = document.getElementById('resultLink').value.trim();
    
    if (!title || !link) {
        alert('Please fill all fields');
        return;
    }

    const results = JSON.parse(localStorage.getItem('results')) || [];
    const newId = results.length > 0 ? Math.max(...results.map(r => r.id)) + 1 : 1;
    
    const newResult = {
        id: newId,
        title: title,
        link: link,
        date: new Date().toISOString().split('T')[0]
    };
    
    results.push(newResult);
    localStorage.setItem('results', JSON.stringify(results));
    
    const messageEl = document.getElementById('resultsMessage');
    messageEl.textContent = 'Result added successfully!';
    messageEl.classList.add('success');
    messageEl.classList.remove('error');
    
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 3000);
    
    document.getElementById('resultTitle').value = '';
    document.getElementById('resultLink').value = '';
    
    loadResults();
    loadDashboard();
}

function deleteResult(resultId) {
    if (!confirm('Delete this result?')) return;
    
    let results = JSON.parse(localStorage.getItem('results')) || [];
    results = results.filter(r => r.id !== resultId);
    localStorage.setItem('results', JSON.stringify(results));
    
    loadResults();
    loadDashboard();
}

// Admit Cards Management
function loadAdmitCards() {
    const admitCards = JSON.parse(localStorage.getItem('admitCards')) || [];
    const tbody = document.getElementById('admitCardsTableBody');
    
    if (!tbody) return;
    
    if (admitCards.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px;">No admit cards found</td></tr>';
        return;
    }

    tbody.innerHTML = admitCards.map(card => `
        <tr>
            <td>${card.title}</td>
            <td><a href="${card.link}" target="_blank">View</a></td>
            <td>${formatDate(card.date)}</td>
            <td>
                <button class="btn btn-small btn-danger" onclick="deleteAdmitCard(${card.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function addAdmitCard() {
    const title = document.getElementById('admitCardTitle').value.trim();
    const link = document.getElementById('admitCardLink').value.trim();
    
    if (!title || !link) {
        alert('Please fill all fields');
        return;
    }

    const admitCards = JSON.parse(localStorage.getItem('admitCards')) || [];
    const newId = admitCards.length > 0 ? Math.max(...admitCards.map(a => a.id)) + 1 : 1;
    
    const newCard = {
        id: newId,
        title: title,
        link: link,
        date: new Date().toISOString().split('T')[0]
    };
    
    admitCards.push(newCard);
    localStorage.setItem('admitCards', JSON.stringify(admitCards));
    
    const messageEl = document.getElementById('admitCardsMessage');
    messageEl.textContent = 'Admit card added successfully!';
    messageEl.classList.add('success');
    messageEl.classList.remove('error');
    
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 3000);
    
    document.getElementById('admitCardTitle').value = '';
    document.getElementById('admitCardLink').value = '';
    
    loadAdmitCards();
    loadDashboard();
}

function deleteAdmitCard(cardId) {
    if (!confirm('Delete this admit card?')) return;
    
    let admitCards = JSON.parse(localStorage.getItem('admitCards')) || [];
    admitCards = admitCards.filter(a => a.id !== cardId);
    localStorage.setItem('admitCards', JSON.stringify(admitCards));
    
    loadAdmitCards();
    loadDashboard();
}

// Scholarships Management
function loadScholarships() {
    const scholarships = JSON.parse(localStorage.getItem('scholarships')) || [];
    const tbody = document.getElementById('scholarshipsTableBody');
    
    if (!tbody) return;
    
    if (scholarships.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px;">No scholarships found</td></tr>';
        return;
    }

    tbody.innerHTML = scholarships.map(scholarship => `
        <tr>
            <td>${scholarship.title}</td>
            <td><a href="${scholarship.link}" target="_blank">View</a></td>
            <td>${formatDate(scholarship.date)}</td>
            <td>
                <button class="btn btn-small btn-danger" onclick="deleteScholarship(${scholarship.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function addScholarship() {
    const title = document.getElementById('scholarshipTitle').value.trim();
    const link = document.getElementById('scholarshipLink').value.trim();
    
    if (!title || !link) {
        alert('Please fill all fields');
        return;
    }

    const scholarships = JSON.parse(localStorage.getItem('scholarships')) || [];
    const newId = scholarships.length > 0 ? Math.max(...scholarships.map(s => s.id)) + 1 : 1;
    
    const newScholarship = {
        id: newId,
        title: title,
        link: link,
        date: new Date().toISOString().split('T')[0]
    };
    
    scholarships.push(newScholarship);
    localStorage.setItem('scholarships', JSON.stringify(scholarships));
    
    const messageEl = document.getElementById('scholarshipsMessage');
    messageEl.textContent = 'Scholarship added successfully!';
    messageEl.classList.add('success');
    messageEl.classList.remove('error');
    
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 3000);
    
    document.getElementById('scholarshipTitle').value = '';
    document.getElementById('scholarshipLink').value = '';
    
    loadScholarships();
}

function deleteScholarship(scholarshipId) {
    if (!confirm('Delete this scholarship?')) return;
    
    let scholarships = JSON.parse(localStorage.getItem('scholarships')) || [];
    scholarships = scholarships.filter(s => s.id !== scholarshipId);
    localStorage.setItem('scholarships', JSON.stringify(scholarships));
    
    loadScholarships();
}

// Categories Management
function loadCategories() {
    const categories = getDefaultCategories();
    const tbody = document.getElementById('categoriesTableBody');
    
    if (!tbody) return;
    
    if (categories.length === 0) {
        tbody.innerHTML = '<tr><td colspan="2" style="text-align: center; padding: 20px;">No categories found</td></tr>';
        return;
    }

    tbody.innerHTML = categories.map(category => `
        <tr>
            <td>${category}</td>
            <td>
                <button class="btn btn-small btn-danger" onclick="deleteCategory('${category}')">Delete</button>
            </td>
        </tr>
    `).join('');
}

function getDefaultCategories() {
    return [
        'Meghalaya Government',
        'Central Government',
        'Private',
        'Banking',
        'SSC',
        'Railways'
    ];
}

function addCategory() {
    const categoryName = document.getElementById('categoryName').value.trim();
    
    if (!categoryName) {
        alert('Please enter category name');
        return;
    }
    
    const categories = getDefaultCategories();
    if (categories.includes(categoryName)) {
        alert('Category already exists');
        return;
    }

    const messageEl = document.getElementById('categoriesMessage');
    messageEl.textContent = 'Category added successfully!';
    messageEl.classList.add('success');
    messageEl.classList.remove('error');
    
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 3000);
    
    document.getElementById('categoryName').value = '';
}

function deleteCategory(categoryName) {
    if (!confirm('Delete this category?')) return;
    
    alert('Default categories cannot be deleted. This is a protected category.');
}

// Logout
function handleLogout() {
    logout();
    window.location.href = 'index.html';
}