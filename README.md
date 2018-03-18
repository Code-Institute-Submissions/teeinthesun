# Tee in the Sun - a Golfing holiday home rental website

## Overview
The purpose of this website is to advertise a holiday townhouse for rental on a golf resort. I have created this website to demonstrate the skills I have obtained from Stream One of the Full Stack Web Developer course

## Features

- Fully responsive layout at various screen sizes
- Tables to display pricing options
- Booking form with validation
- Links to social media
- Lightbox image pop-ups

## Technology

The technologies that I have used to build this site are:
 - HTML5 for the structure of the website elements
 - CSS3 for styling of the components
 - CSS Grid for the flexible layout of the website
 - Bootstrap for the responsive navigation bar
 - JQuery and Javascript to enable the lightbox feature on the images and to change the colour of buttons/social media links upon hovering.
 - AngularJS is used for form validation. Boxes will appear outlined red where the entry is invalid/incomplete. The submit button is disabled unless all fields are valid.
 - Bower is used to manage the installation of libraries and frameworks

## Testing

I have carried out manual testing on the site to ensure that all the features are working as they should. 
 - Firstly to test the responsiveness of the site layout I checked to see how the site looked, and that features functioned correctly in various browsers (Google Chrome, Mozilla Firefox, Internet Explorer, Opera) and screen sizes (desktop, tablet and mobile phone). The bootstrap navigation bar shrinks to a minimised drop-down button in smaller screen sizes and the CSS grid layout enables the layout to react to changing screen sizes.
 - Each of the links in the navigation bar navigate to the page they are supposed to. 
 - The images that have the added lightbox functionality react as a pop-up when clicked and close when the 'X' button is clicked.
 - Social media links (icons) route to the necessary social media sites
 - AngularJS booking form: Each of the fields in this form are set to be 'required', meaning there are validation features that appear if these are not complete or completed with invalid input. The phone and email input fields appear with a red outline if the field is interacted with but the input is incorrect or left blank. A guidance note also appears under the input field if this is the case. The submit button is set to be disabled if any of the fields contain invalid values - in this case all the fields need to be completed correctly before the button is active. 


## Contributing

1. Firstly you will need to clone the repository for 'Tee in the Sun' by running ```git clone <https://github.com/charlotteskinner90/teeinthesun.git>``` command
2. Make your changes
3. If you think the changes you have made to the code will benefit this project, please submit a pull request.

## References

I installed the bower compontents for the Image Lightbox feature from http://lokeshdhakar.com/projects/lightbox2/. I adapted a small part of the Javascript to make the lightbox image resize faster than the default value (changed 700ms to 300ms, see script.js line 16)

In accordance with citation regulations these are the details of the creator of this feature:

 Lightbox v2.10.0
 by Lokesh Dhakar

 More info:
 http://lokeshdhakar.com/projects/lightbox2/

 Copyright 2007, 2018 Lokesh Dhakar
 Released under the MIT license
 https://github.com/lokesh/lightbox2/blob/master/LICENSE