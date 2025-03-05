# **Build-X - Drag & Drop Website Builder**  

![Build-X](https://via.placeholder.com/1200x400)  

**Build-X** is a user-friendly, drag-and-drop website builder that enables anyone to create stunning, professional websites without coding skills. It features a live editor, real-time collaboration, and page management, making web development seamless and efficient.  

---

## **Features**  

-  **Drag & Drop Editor** – Build pages visually with an intuitive editor.  
-  **Custom HTML & CSS** – Edit source code for advanced customization.  
-  **Page Management** – Create, edit, preview, and delete pages easily.  
-  **Auto-Save** – Prevents data loss with periodic saving.  
-  **Preview Mode** – Instantly preview pages before publishing.  
-  **Django Backend** – Secure and scalable backend powered by Django.  

---

## **Tech Stack**  

### **Frontend**  
- **GrapesJS** – Drag-and-drop editor  
- **Bootstrap** – Responsive UI framework  
- **Toastr** – Notifications  
- **jQuery** – Client-side scripting  

### **Backend**  
- **Django** – Python web framework  
- **Django ORM** – Database handling  
- **SQLite/PostgreSQL** – Database storage  

---

## **Installation & Setup**  

Follow these steps to set up the Build-X project on your local machine.  

---

### **1. Clone the Repository**  
Open a terminal or command prompt and run:  
```sh
git clone https://github.com/HasanShoro/build-x
cd build-x
```

---

### **2. Create & activate a virtual environment**
```sh
python -m venv venv  
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

---

### **3. Install dependencies**
```sh
pip install -r requirements.txt
```

---

### **4. Run database migrations**
```sh
python manage.py migrate
```

---

### **6. Start the development server**
```sh
python manage.py runserver
```
Visit http://127.0.0.1:8000/ in your browser.
---
