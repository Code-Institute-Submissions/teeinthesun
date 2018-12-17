# [Tee in the Sun](https://charlotteskinner90.github.io/teeinthesun/) - a Golfing holiday home rental website

The purpose of this website is to advertise a holiday townhouse for rental on a golf resort in Spain. The site details the accomodation available, the resort facilities and offers an easy way to book their holiday. Tee in the Sun is easy for the user to navigate around with the navigation bar and has several aesthetic features which improve user experience. I have created this website to demonstrate the skills I have obtained from Stream One of the Full Stack Web Developer course. 
 
## UX

This site is aimed at adults, families or groups who are looking for a holiday rental apartment on a golfing resort in Spain. The original [site](http://www.golfballsinthesun.com/) this is based off of was looking a bit dated, so I wanted to rebuild the front-end of the site so that it was more appealing and had a better UX experience for the user. 

### User Stories

- The user would like to view information about the resort and the property for rental: The user lands on the homepage, where they have the option via the navigation bar to look through information regarding the resort, the property and the cost of renting the property. There are images of the property and resort on their respective pages, and a video showing the resort facilities. There are links to social media accounts, and an interactive map.
- The user would like to book the holiday apartment - The user has the option to go straight to the booking page. They may be a regular visitor or have visted the resort before. On the booking page, there is an enquiry form that the user can fill out with their details and desired date of stay. The form has a calculator to work out how much the users stay at the resort will cost for the rental of the property.
 
The site has been created with a mobile-first design, so the navigation bar shrinks down to a hamburger icon on mobile/tablet and images line up vertically. I have attached a PDF of the desktop wireframe for this site here: ![Wireframe PDF](/blob/master/teeinthesun_wireframe.pdf "Wireframe") 
This wireframe was built using [Mockflow](https://www.mockflow.com/)

## Features

### Existing Features
- Fully responsive layout at various screen sizes
- Use of a [table](https://github.com/charlotteskinner90/teeinthesun/blob/master/pricing.html) to display pricing options
- [Booking form](https://github.com/charlotteskinner90/teeinthesun/blob/master/booking.html) with validation - a 'thank you' [pop-up](https://github.com/charlotteskinner90/teeinthesun/blob/master/js/form.js) appears upon successful completion of the form.
- [Pricing calculator](https://github.com/charlotteskinner90/teeinthesun/blob/master/js/form.js) on the booking form
- Links to [social media](https://github.com/charlotteskinner90/teeinthesun/blob/master/booking.html) accounts of the golf resort
- [Lightbox](https://github.com/charlotteskinner90/teeinthesun/blob/master/property.html) image pop-ups when you click on an image on the property and pricing pages.

## Technologies Used

The technologies that I have used to build this site are:
 - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)) for the structure of the website elements.
 - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) for styling of the components (e.g. colour schemes, fonts, images). I have separated the CSS content into different files for consistency and readability.
 - [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) for the flexible layout of the website.
 - [Bootstrap](https://getbootstrap.com/) for the responsive navigation bar.
 - [Google fonts](https://fonts.google.com/) (Poiret One and Arial used throughout)
 - [JQuery](https://jquery.com/) and [Javascript](https://www.javascript.com/) to enable the [lightbox](https://www.lokeshdhakar.com/projects/lightbox2/) feature on the images and to change the colour of buttons/social media links upon hovering.
 - [Javascript](https://www.javascript.com/) is also used to manage the alert box and datepicker on the booking form, and is used to power the price calculator on the booking form.
 - Git/[Github](https://github.com/charlotteskinner90/teeinthesun) for version control.


## Testing

I have carried out manual testing on the site to ensure that all the features are working as they should. 
 - Firstly to test the responsiveness of the site layout I checked to see how the site looked, and that features functioned correctly in various browsers (Google Chrome, Mozilla Firefox, Internet Explorer, Opera) and screen sizes (desktop, tablet and mobile phone). The bootstrap navigation bar shrinks to a minimised drop-down button in smaller screen sizes and the CSS grid layout enables the layout to react to changing screen sizes.
 - Each of the links in the navigation bar navigate to the page they are supposed to. 
 - The images that have the added lightbox functionality react as a pop-up when clicked and close when the 'X' button is clicked.
 - Social media links (icons) route to the necessary social media sites
 - Booking form: Each of the fields in this form are set to be 'required', meaning there are validation features that appear if these are not complete or completed with invalid input. The phone and email input fields appear with a red outline if the input is incorrect or left blank. A guidance note also appears under the input field if this is the case. Once all fields are entered correctly and the submit button is clicked, an alert window will open at the top of the screen to indicate that the form has been submitted. 

## Deployment

- This project was deployed to [Github Pages](https://charlotteskinner90.github.io/teeinthesun/): The code was committed to Github, and then Github pages was configured in the settings of this repository.

### Contributing 

1. Firstly you will need to clone the repository for 'Tee in the Sun' by running ```git clone <https://github.com/charlotteskinner90/teeinthesun.git>``` command
2. Make your changes
3. If you think the changes you have made to the code will benefit this project, please submit a pull request.

## Credits

### Content

- I followed the instructions from http://lokeshdhakar.com/projects/lightbox2/ to integrate the lightbox image functionality. I adapted a small part of the Javascript to make the lightbox image resize faster than the default value (changed 700ms to 100ms, see [script.js](https://github.com/charlotteskinner90/teeinthesun/blob/master/js/script.js#L6) line 6)

### Media
- The photos used in this site were obtained from the original [site](http://www.golfballsinthesun.com/) I was rebuilding plus some additional from the site owner. The video was obtained from Youtube.

### Acknowledgements

- I would like to thank my mentor at the Code Institute Yoni Lavi for his advice and suggestions regarding using a Google Maps API integration and adding a custom Thank You pop-up rather than the in-built browser version (for better user UX)
