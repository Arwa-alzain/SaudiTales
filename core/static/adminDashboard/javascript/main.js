// logout pop window 
const logoutModal = document.getElementById("modal-logout")
const closelogModal = document.getElementById("close-log-modal")

document.querySelectorAll(".logout-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        logoutModal.style.display = "flex";
    });
});

closelogModal.addEventListener("click", () => {
    logoutModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === logoutModal) {
        logoutModal.style.display = "none";
    }
});

// navbar
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const navbar = document.getElementById("top-navbar");
const content = document.querySelector(".dashboard-content");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
    navbar.classList.toggle("shifted");
    content.classList.toggle("shifted");
});

// charts
const barColors = ["red", "green", "blue", "orange", "brown"];

document.addEventListener("DOMContentLoaded", () => {

    // Average Engagement
    new Chart(document.getElementById("engagementChart"), {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Average Engagement",
                data: [40, 55, 60, 70, 65, 80],
                borderColor: "#0B5D3B",
                backgroundColor: "rgba(11, 93, 59, 0.3)",
                borderWidth: 2,
                tension: 0.4
            }]
        }
    });

    // No.of viewed landmarks
    new Chart(document.getElementById("viewsChart"), {
        type: "bar",
        data: {
            labels: ["Riyadh Tower", "AlUla", "Diriyah", "Jeddah Corniche"],
            datasets: [{
                label: "Most Viewed Landmarks",
                data: [500, 350, 420, 300],
                backgroundColor: barColors
            }]
        }
    });

    // No.of visited
    new Chart(document.getElementById("visitsChart"), {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Number of Visits",
                data: [200, 180, 250, 300, 280, 350],
                backgroundColor: barColors
            }]
        }
    });

    // No.of most searched landmarks
    new Chart(document.getElementById("searchChart"), {
        type: "bar",
        data: {
            labels: ["AlUla", "Diriyah", "Edge of the World", "Masmak"],
            datasets: [{
                label: "Most Searched Landmarks",
                data: [150, 120, 180, 90],
                backgroundColor: barColors
            }]
        }
    });

    // most featured stories
    new Chart(document.getElementById("featuredChart"), {
        type: "pie",
        data: {
            labels: ["AlUla", "Diriyah", "Jeddah Corniche", "Riyadh Tower"],
            datasets: [{
                label: "Most Featured in Stories",
                data: [80, 60, 90, 70],
                backgroundColor: barColors
            }]
        }
    });

});

// fake landmark data to see the table on frontend
const landmarks = [
    {
        id: 1,
        destination: "العلا",
        name: "مدائن صالح",
        description: "موقع أثري يعود لحضارة الأنباط ويعد من أبرز مواقع التراث العالمي.",
        image: "https://via.placeholder.com/80"
    },
    {
        id: 2,
        destination: "الرياض",
        name: "قصر المصمك",
        description: "معلم تاريخي شهد توحيد المملكة ويعد رمزاً للتراث النجدي.",
        image: "https://via.placeholder.com/80"
    },
    {
        id: 3,
        destination: "جدة",
        name: "البلد التاريخية",
        description: "منطقة تراثية تضم بيوتاً قديمة مبنية من الحجر المرجاني.",
        image: "https://via.placeholder.com/80"
    },
    {
        id: 4,
        destination: "نجران",
        name: "حي أبا السعود",
        description: "حي تراثي يتميز بالعمارة الطينية التقليدية.",
        image: "https://via.placeholder.com/80"
    },
    {
        id: 5,
        destination: "تبوك",
        name: "عين السكر",
        description: "موقع أثري يضم نقوشاً ورسومات صخرية قديمة.",
        image: "https://via.placeholder.com/80"
    },
    {
        id: 6,
        destination: "حائل",
        name: "جبة",
        description: "منطقة تحتوي على نقوش صخرية تعود لآلاف السنين.",
        image: "https://via.placeholder.com/80"
    },
    {
        id: 7,
        destination: "الطائف",
        name: "سوق عكاظ",
        description: "سوق تاريخي كان مركزاً للشعر والأدب في الجاهلية.",
        image: "https://via.placeholder.com/80"
    },
    {
        id: 8,
        destination: "الأحساء",
        name: "قصر إبراهيم",
        description: "قلعة تاريخية تجمع بين الطراز الإسلامي والعثماني.",
        image: "https://via.placeholder.com/80"
    },
    {
        id: 9,
        destination: "جازان",
        name: "القرية التراثية",
        description: "مجموعة مبانٍ تراثية تعكس تاريخ المنطقة وثقافتها.",
        image: "https://via.placeholder.com/80"
    },
    {
        id: 10,
        destination: "القصيم",
        name: "سوق المسوكف",
        description: "سوق تراثي يعرض الصناعات اليدوية القديمة.",
        image: "https://via.placeholder.com/80"
    }
];

//fake user data to see the table on frontend 
const users = [
    {
        id: 1,
        username: "ahmadd94",
        name: "mohammad",
        email: "ahmm@gmail.com",
        accounttype: "user",
        status: "active"
    },
    {
        id: 2,
        username: "khali55d",
        name: "kalid",
        email: "kalid@gmail.com",
        accounttype: "user",
        status: "blocked"
    },
    {
        id: 3,
        username: "saraaaaa43",
        name: "soosoo",
        email: "soo9443@gmail.com",
        accounttype: "admin",
        status: "active"
    }
];

// add the landmarks to the table:
const bodyTable = document.getElementById("landmark-table")
function renderTable() {
    bodyTable.innerHTML = ""

    landmarks.forEach((item, index) => {
        const row = document.createElement("tr")
        row.innerHTML = `
    <td>${item.id}</td>
    <td>${item.destination}</td>
    <td>${item.name}</td>
    <td>${item.description}</td>
    <td><img src="${item.image}" alt="landmark image" width=50px height=50px ></td>

    <td><button class="btn btn-danger deleteBtn" data-bs-toggle="modal" data-bs-target="#deletModal" data-index="${index}"><i class="bi bi-trash-fill"></i></button>
        <button class="btn btn-warning editBtn"  data-bs-toggle="modal" data-bs-target="#EditForm" data-index="${index}"><i class="bi bi-pencil-square"></i></button>
        </td>
    `
        bodyTable.appendChild(row)
    })
}
renderTable()

// delete landmark
let deleteIndex = null;

const deleteModal = document.getElementById("deletModal")

deleteModal.addEventListener("show.bs.modal", function (event) {

    const button = event.relatedTarget

    deleteIndex = button.getAttribute("data-index")

})
// confirm the deleting
document.getElementById("confirmDelete").addEventListener("click", function(){

    if(deleteIndex !== null){

        landmarks.splice(deleteIndex , 1)

        renderTable()

        const modal = bootstrap.Modal.getInstance(deleteModal)
        modal.hide()

    }

})


// add the users to the table:
const tabbody = document.getElementById("user-table")
function renderTable2() {
    tabbody.innerHTML = ""

    users.forEach((item, index) => {
        const row = document.createElement("tr")
        row.innerHTML = `
    <td>${item.id}</td>
    <td>${item.username}</td>
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${item.accounttype}</td>
    <td>${item.status}</td>
    <td><button class="btn btn-danger deleteBtn"><i class="bi bi-trash-fill"></i></button>
                        <button class="btn btn-warning disableBtn">Disable</button>
                        <button class="btn btn-success">Change</button>
        </td>
    `
        tabbody.appendChild(row)
    })
}
renderTable2()
