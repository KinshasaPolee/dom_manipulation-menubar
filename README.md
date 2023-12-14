# DOM Manipulation (Part One)

# Introduction
This lab is the first of a two-part assignment in which you will manipulate the DOM using various tools and techniques. This portion of the activity focuses on adding static elements created with JavaScript. In Part Two of this lab activity, we will make these elements dynamic and interactive.

# Objectives
Manipulate the DOM using JavaScript.

# Part 1: Getting Started
Explore the existing structure of the provided CodeSandbox to familiarize yourself with important aspects such as current DOM structure, element IDs, and available CSS classes. Take five minutes to familiarize yourself with CSS Custom Properties (variables) - they are an amazing addition to CSS. If you are familiar with using variables with SASS/LESS pre-processors, CSS Custom Properties are similar but far more powerful because they are dynamic (their values can be changed during runtime) - and they are built into the CSS language! Start the project by building a main content element using the following steps:
1. Select and cache the main element in a variable named mainEl.
2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property. Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
3. Set the content of mainEl to h1 tag DOM Manipulation h1 tag. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
4. Add a class of flex-ctr to mainEl. Hint: Use the Element.classList API.

# Part 2: Creating a Menu Bar
Next, create a blank menu bar that we can use to later add some interactivity to the page:
1. Select and cache the nav id="top-menu" element in a variable named topMenuEl.
2. Set the height of the topMenuEl element to be 100%.
3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
4. Add a class of flex-around to topMenuEl.

# Part 3: Adding Menu Buttons
Very often, you will be working with data provided by external sources in a variety of ways. For this project, copy the following data structure to the top of your index.js file; you will use it to create your menu buttons. If this data was provided by an external source, it would allow that source to control how our menu is built. We would simply implement the logic, and allow the data to decide what displays. This is not typically done with menus, but it can be done with any DOM element.
To continue:
1. Iterate over the entire menuLinks array and for each "link" object:
2. Create an a element.
3. On the new element, add an href attribute with its value set to the href property of the "link" object.
4. Set the new element's content to the value of the text property of the "link" object.
5. Append the new element to the topMenuEl element.

# Part 4: Adding Interactivity
With the basic structure of the page now generated purely with JavaScript, we have demonstrated the ability to manipulate the DOM in several fundamental ways.
In order to continue with this project, we must first explore how to add user interaction to DOM elements, which will be covered in a future lesson. For now, save your work so that you can return to it for Part Two of this lab activity.