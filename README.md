# Escape Sequence Photo Gallery

Welcome to the GitHub repository for the **Escape Sequence Photo Gallery**. This project involves creating an interactive photo gallery using DOM manipulation techniques to render thumbnails and display full-size images on click.

## Contents

- [Introduction](#introduction)
- [My Tasks](#my-tasks)
- [Provided Code](#provided-code)
- [Task Breakdown](#task-breakdown)
- [LevelUp](#levelup)
- [Technologies Used](#technologies-used)

## Introduction

In this project, I used my DOM manipulation skills to create an interactive photo gallery. A small amount of CSS was provided, but I coded all of the JavaScript logic. The goal was to render a series of thumbnail images to the page, allowing users to click on a thumbnail to view the full-size image.

## My Tasks

I completed two main tasks in this project:

1. **`addThumbnail`**: This function creates a new image element with the `thumbnail` class for the image source passed in as an argument. Once the element is created, it is appended to `div#thumbnail-container`. Additionally, an `onclick` event is attached to the element, which displays the image full-size by updating the `src` of `img#fullsize-image`.

2. **`addAllThumbnails`**: This function loops through the `imageSources` array, calling `addThumbnail` on each iteration and passing in the current image source.

## Provided Code

- **`script.js`**: Contains an array called `imageSources`, which is an array of paths pointing to the images in the assets folder.
- **`style.css`**: Contains a rule for the `thumbnail` class. I added this class to the thumbnail elements to style them.

## Task Breakdown

### 1. `addThumbnail`

#### 1.1 Create the Image Element

I started by creating a new `<img>` element and storing it in a variable.

#### 1.2 Customize the Image Element

I updated the element's `src` property with the value passed to the `imageSource` parameter. I also activated the styles for the thumbnails in `style.css` by adding the `thumbnail` class to the element.

#### 1.3 Append the Image Element

I selected the `div` with the ID `thumbnail-container` and used the `appendChild` method to append the new thumbnail to it. This allowed all of the thumbnails to be added to the page.

**Pro-tip:** At this point, I tested my logic by calling `addThumbnail` from the console and passing in an image source as a string. This confirmed that the thumbnail was rendered to the page correctly.

#### 1.4 Display Fullsize Image When Thumbnail is Clicked

To display the full-size image when its thumbnail is clicked, I attached an `onclick` function to the image element. The `onclick` function selects the image with the ID `fullsize-image` and updates its `src` property with the value passed to the `imageSource` parameter.

**Note:** I used Google Fu to learn how to add an `onclick` event to an element created entirely in JavaScript when I couldn't access its HTML directly.

### 2. `addAllThumbnails`

#### 2.1 Loop Through the Image Sources

I wrote a `for` loop that iterates through the entirety of the `imageSources` array.

#### 2.2 Add Each Thumbnail to the Page

I invoked the `addThumbnail` function on each iteration of the loop, passing in the current image source.

#### 2.3 Call the Function

I called `addAllThumbnails` at the bottom of the script to render all thumbnails to the page. This resulted in five thumbnails being displayed on the page.

## LevelUp

To level up the project, I wrote JavaScript logic to automatically display the first image from `imageSources` full-size when the page loads.

## Technologies Used

- **HTML5 & CSS3:** For structuring and styling the web pages.
- **JavaScript:** For DOM manipulation and adding interactivity.

