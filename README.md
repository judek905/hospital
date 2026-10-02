# CarePlus Hospital Website

## Overview

CarePlus Hospital is a modern, responsive healthcare website designed to provide visitors with information about hospital services and make it easier for patients to request medical appointments.

The project uses **HTML, CSS, and JavaScript** and includes a professional hospital-style interface with healthcare services, medical staff information, patient testimonials, health articles, emergency contact information, and an online appointment form.

## Project Features

### 1. Hospital Homepage
The main homepage presents:

- CarePlus Hospital branding
- Emergency contact information
- 24/7 emergency care notice
- Navigation menu
- Book Appointment button
- Healthcare introduction/hero section
- Hospital experience and patient statistics
- Quick-access service cards
- Healthcare services
- About/Why Choose CarePlus section
- Medical team profiles
- Appointment call-to-action section
- Patient testimonials
- Health and wellness articles
- Footer with contact and navigation information
- Floating emergency call button

The homepage content is contained in `index.html`.

### 2. Healthcare Services

The website displays several healthcare services, including:

- General Consultation
- Cardiology
- Neurology
- Pediatrics
- Dental Care
- Laboratory Services

Each service includes a short description and a link for learning more.

### 3. Medical Team

The homepage includes profiles for:

- Dr. James Carter — Cardiologist
- Dr. Sarah Williams — Pediatrician
- Dr. Michael Brown — Neurologist

Visitors can use the appointment links to proceed to the booking page.

### 4. Online Appointment Booking

The `appointment.html` page provides an online appointment form.

The form collects:

- Full Name
- Phone Number
- Email Address
- Department
- Preferred Doctor
- Appointment Date
- Preferred Time
- Reason for Consultation

The form contains required fields and a **Confirm Appointment** button.

### 5. Dark Mode

The website supports dark mode through JavaScript. The theme button on the homepage calls the `toggleDarkMode()` function.

The selected dark-mode preference is stored in the browser's `localStorage`, allowing the website to remember the user's theme after refreshing or reopening the page.

### 6. Responsive Design

The CSS includes responsive layouts for:

- Desktop computers
- Tablets
- Mobile phones

At smaller screen sizes, grids change from multiple columns to fewer columns or a single-column layout, and some navigation elements are hidden to improve mobile usability.

### 7. Emergency Contact

The website includes an emergency contact number:

`+256 700 000 000`

The floating Emergency button uses a telephone link so users can initiate a call from a compatible device.

## Project Structure

```text
CarePlus-Hospital/
│
├── index.html
├── appointment.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

> **Important:** The uploaded files are named `index(1).html`, `style.css`, `appointment.html`, and `script.js`. For the folder structure shown above to work exactly as written, rename `index(1).html` to `index.html` and place `style.css` inside a `css` folder and `script.js` inside a `js` folder.

## Technologies Used

### HTML5
Used to create the structure and content of the hospital webpages.

### CSS3
Used for:

- Layout
- Colors
- Typography
- Buttons
- Cards
- Responsive design
- Dark mode styling
- Hover effects
- Spacing and visual presentation

### JavaScript
Used for interactive functionality, including:

- Dark mode
- Saving the selected theme with `localStorage`
- Smooth scrolling for internal links
- Page loading behavior
- Emergency button confirmation

## External Resources

The homepage imports the **Inter** font from Google Fonts and references Font Awesome for icons.

These resources require an internet connection when loading the corresponding external assets.

## How to Run the Website

### Method 1: Open Directly

1. Create the project folders.
2. Put the HTML files in the main project folder.
3. Put `style.css` in the `css` folder.
4. Put `script.js` in the `js` folder.
5. Open `index.html` in a web browser.
6. Navigate through the available pages.

### Method 2: Using VS Code

1. Open the project folder in Visual Studio Code.
2. Make sure the folder structure matches the structure above.
3. Open `index.html`.
4. Use a browser or the Live Server extension to preview the website.
5. Open `appointment.html` to test the appointment form.

## File Descriptions

| File | Purpose |
|---|---|
| `index.html` | Main CarePlus Hospital homepage |
| `appointment.html` | Online medical appointment page |
| `css/style.css` | Main website styling and responsive design |
| `js/script.js` | Dark mode and other interactive JavaScript features |
| `README.md` | Project documentation |

## Design

The website uses a healthcare-oriented visual design with:

- Teal and dark-blue color scheme
- Rounded cards and buttons
- Large hero section
- Clean typography
- Responsive grids
- Sticky navigation
- Emergency call button
- Light and dark themes

## Important Notes

This project is currently a **front-end website prototype**. The appointment form is a user interface and does not include a backend database or server-side appointment-processing system.

For a production hospital system, additional functionality would be needed, such as:

- Secure backend processing
- Database storage
- Real appointment availability
- Patient authentication
- Secure patient records
- Email/SMS appointment confirmations
- Authentication and authorization
- Data privacy and security controls
- Server-side form validation

## Credits

**Project:** CarePlus Hospital Website  
**Technology:** HTML5, CSS3, JavaScript  
**Year:** 2026

## License

This project can be used as a learning or academic website project. Before deploying it as a real healthcare service, ensure that all medical information, contact details, patient-data handling, and security features are properly reviewed and implemented.
