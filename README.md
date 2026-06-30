# Saudi Tales

A website-based system that uses image recognition (AI) to help users explore and learn about Saudi heritage and historical landmarks.

## About the Project

Cultural heritage plays a vital role in preserving the identity and history of societies, yet many visitors struggle to access accurate and comprehensive information about historical and heritage landmarks, especially with the high cost of hiring tour guides and limited freedom to explore at their own pace.

Saudi Tales is an interactive web platform that uses artificial intelligence to identify landmarks from user-uploaded images and instantly provide accurate historical details and photos. The platform also allows users to share their own stories and experiences and offers intelligent recommendations for related sites.

This project was developed as a graduation project (B.Sc. in Computer Science) at the College of Computer, Qassim University, by Arwa Alzain, Rawan Almutairi, and Fatimah Alkhuraiji, supervised by Dr. Tahani Alwaneen.

## Key Features

- **Image-Based Recognition** – Upload a photo of any historical or heritage landmark, and the AI model identifies it.
- **Manual / Keyword & Region Search** – Explore landmarks by keyword or by filtering by region.
- **Dynamic Information Display** – View detailed historical information, descriptions, significant events, and archival photos for each landmark.
- **User Contributions** – Share personal stories and experiences about landmarks.
- **Favorites** – Save landmarks to a personal favorites list.
- **Smart Recommendations** – Get suggestions for related or nearby landmarks.
- **Admin Dashboard** – Manage landmarks and user accounts.

## Tech Stack

| Layer | Technology |
|---|---|
| Front-End | HTML, CSS, JavaScript, Bootstrap |
| Back-End | Python, Django (MVT architecture) |
| Database | MySQL |
| AI / Image Recognition | TensorFlow with a pretrained MobileNetV2 model (feature extraction + similarity matching) |
| Development Environment | Visual Studio Code |
| Version Control | Git & GitHub |

## How It Works

1. The user uploads an image of a landmark (or searches by keyword/region) on the Explore page.
2. For image search, the back-end (`predict_landmark()`) preprocesses the image and passes it through the MobileNetV2 model to extract its features.
3. The extracted features are compared against the landmarks database to find the closest match.
4. The matching landmark's details, photos, and related stories are retrieved from MySQL and displayed to the user.
5. If no close match is found, the system suggests alternative landmarks instead.

## Getting Started

> Note: these are general setup steps for a Django + MySQL + TensorFlow project. Adjust file/app names to match your actual project structure.

### Prerequisites

- Python 3
- MySQL Server
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arwa-alzain/SaudiTales/tree/main
   cd saudi-tales
   ```

2. **Create and activate a virtual environment**
   ```bash
   python -m venv venv
   # Windows
   venv\Scripts\activate
   # macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure the database**
   - Create a MySQL database (e.g. `saudi_tales_db`).
   - Update the `DATABASES` settings in `settings.py` with your MySQL credentials.

5. **Apply migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create a superuser (for the admin dashboard)**
   ```bash
   python manage.py createsuperuser
   ```

7. **Run the development server**
   ```bash
   python manage.py runserver
   ```

8. Open your browser and go to `http://127.0.0.1:8000/`

## Project Structure (High-Level)

- **Authentication** – Login, registration, logout (Django built-in authentication)
- **Image Recognition** – Landmark prediction using MobileNetV2 (`predict_landmark()`)
- **Landmark Management** – Add/edit/view landmark info (`exploreResult()`, `infoPlace()`)
- **Favorites** – Add/remove favorites (`toggle_favorite()`)
- **Admin Dashboard** – Manage landmarks and accounts (`dashboard()`, `landmarks()`, `accountManage()`)

## Future Work

- Expanding the landmarks database to cover more sites across Saudi Arabia.
- Improving the AI model's accuracy with more training data.
- Adding multilingual support.

## Acknowledgements

Supervised by Dr. Tahani Alwaneen, College of Computer, Qassim University.
