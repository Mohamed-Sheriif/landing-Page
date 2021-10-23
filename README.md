# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## the navigation bar.
 This will dynamically create a navigation menu based on the sections of the page. I used `for` loop for itration on all `sections` and get the section data from `nav` attribute using `dataset` api

## Add functionality to distinguish the section in view.
 While navigating through the page, the section that is active in the viewport/closest to the top should be distinguished from the other sections.

## Navigation is built dynamically as an unordered list.
 Start with empty `ul` and dynamically build navigation using `Append`, `appendChild`, and `innerHTML` .
 Append `<a>` to `li` and append `li` to `ul`  

## Section Active State .
 It is cleared which section is being viewed while scrolling . Detect the element location relative to the viewport using .`getBoundingClientRect()` built-in function .

## Scroll to Anchor.

 When clicking an item from the navigation menu, the link should scroll to the appropriate section.


## Important to know
 I made the `id` of every sections as the `className` of the `li` item it belongs to in the `navBar_menue` Becouse i want to get to the section using it's `id` 

