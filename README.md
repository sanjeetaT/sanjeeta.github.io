For the final Project I make my portfolio website. When I run I go to the index.html file and right click, then open with live server then it will start.
#### I use the source 
https://getbootstrap.com/

#### In my index.html file:
 It includes the navigation bar, hero section, about section, previous work, project carousel, contact form, and footer.  It links my CSS and JavaScript files and organizes all visible elements on the page. 
# Navigation bar
A fixed-top, responsive navbar created with Bootstrap.
Includes links to different sections: About, Previous Work, Projects, Contact.
Also includes a link to my GitHub profile.
Collapses into a hamburger menu on smaller screens for better mobile usability.
# hero section
The hero section is the first visual element on the page.
It introduces me with my name, role, and a brief tagline.
Includes a call-to-action button linking to the About section.
Designed for a centered, attention-grabbing layout.
# About Sectio
Introduces my background, education, and technical skills.
Uses a two-column layout:
Left column: profile photo but that is not my photo I just got from social media.
Right column: text describing my experience and skills.
Highlights my proficiency in HTML, CSS, front-end development, and SQL.
# previous work
Summarizes coursework, projects, and skills gained.
Presented as a simple bullet list for clarity.
Provides insight into my academic and practical experience in software development.
# Project Section
Showcases three major projects using a Bootstrap carousel:
Each carousel item includes a project title, description, and GitHub link.
Allows visitors to navigate through my projects interactively.
Highlights both web and application development experience.
# Contact Section
Contains a contact form with fields for name, email, and message.
Includes form validation with required fields.
Allows visitors to reach out directly from the website.
A placeholder <p> element is used to display form submission status.
# Footer 
Simple footer displaying copyright information.
Styled with Bootstrap classes for a clean look.
# Back-to-Button
A button fixed on the page to quickly scroll to the top.
Functionality is handled by a custom JavaScript file.

#### imgs folder
###### Style.css
 This is the main design file. It controls the colorsfonts, spacing, backgrounds, and overall visual appearance of the website. All custom styling—including the hero banner, section layoutsbuttons, and images.

 ###### responsive.css
This file makes the website mobile-friendly. Using media queries, it adjusts the layout for smaller screens such as phones and tablets. It ensures the content looks good and remains readable on all device sizes.

## js Folder
####
This file adds interactivity to the site. It handles the contact form submission, controls the back-to-top button, and adds smooth scrolling or other behaviors. 
######
In this File I works with
#### Smooth Scroll For Navbar:
 When we click the navbar the page scrolls smoothly. Also it improve user experience and makes navigation feel modern.
 #### Back to Button:
 Listens for the windows scroll. Hide the button when user scrool back to the top.
 ###### Contact Form validation and success message:
 Validates that the user fills out name
 prevents from submission if fields are empty.
 Clear the form automatically after submission
##### Highlight Active Navbar Link
Listen for the window scrool event and check the position
#### Dark Mode Toggle
Allows users to switch between light and dark themes.
##### Fade-In-Animation
Section or elements fade in smothly when they appear on the screen.