# React UI components

This repository contains the react components made from scratch, which are the part of the GreatFrontEnd challenges.

Pages folder contains the different component variants, while components include the each component which was develop from the scratch.

Future plan is to migrate all of these component to storybook.

## Installation

```
npm run ci
```

## Local environment

```
  npm run dev
```

## Design Component

## Badge

Route '/badges'

1. Tech stack
   - React
   - Typescript
   - Tailwind CSS v4
   - Class variant authority (CVA)

2. Button Variants
   - Style variants - 5 options (neutral, error, warning, success, brand)
   - Sizing - 3 options (sm, md, lg)

3. Design approaches and resources
   - Used semantic color system using Tailwind color palette.

4. Learning outcomes
   - Realized that I missed the custom classname feature, so added classname props to add / override the component classes if necessary.
   - Designing this component was pretty straightforward after doing the button component.

## Button

Route '/buttons'

Implementation Details

1. Tech stack
   - React
   - Typescript
   - Tailwind CSS v4
   - Class variant authority (CVA)

2. Button Variants
   - Style variants - 6 options (Primary, Secondary, Tertiary, Link (Color), Link (Gray), Destructive)
   - Sizing - 4 options (md, lg, xl, 2xl)
   - Icon and interaction support

3. Design approaches and resources
   - Used semantic color system using Tailwind color palette.
   - Made component with Single Responsibility Principle.

   ***
   - This article was good for me to get things up [My Journey Building a Design System with Storybook and Tailwind CSS v4](https://www.designsystemscollective.com/my-journey-building-a-design-system-with-storybook-and-tailwind-css-v4-d463de06ae41)

4. Learning outcomes
   - [CVA](https://cva.style/docs/getting-started/variants) made the handling of different variants for a button component easier.
   - I wasn’t sure whether to place the Icon component inside the Button component or keep it separate. I eventually chose to keep the Icon outside. Both options have pros and cons, but I prefer keeping the Button component simple and letting the parent component decide how to display the icon.

5. Future improvements
   - Group the tailwind classes for easier readability / reusability .
   - Migrate this component to storybook.

## Navbar

Implementation Details

1. Tech stack and approach
   - React, Typescript, Tailwind CSSv4
   - Follow the mobile-first approach towards designing navbar.

2. Useful resources and lessons learnt

   I took the challenge to make the slide out menu accessible with the desire focus management. It was new thing to me, but this article https://knowbility.org/blog/2020/accessible-slide-menus provide me the required knowledge that needs to be included.

   ### Accessibility & Focus Management Summary

   ### 1. ARIA Attributes for Hamburger Menu Button
   - **`aria-label`** communicates whether the user is opening or closing the menu.
   - **`aria-expanded`** indicates the current state of the mobile menu.
   - **`aria-controls="slide-out-menu"`** links the button to the navigation drawer it toggles.

   ### 2. Slide out visibility
   - Visibility was set to hidden when the slide-out menu is closed and visible while the menu is opened as the `display:none` was not working while opening slide-out menu.

   ### 3. Focus Handling While Opening and Closing the Menu
   - On open, focus automatically moves to the **first link** inside the mobile navigation.
   - After closing, focus returns to the **hamburger menu button**.

   ### 4. Escape Key Support
   - Pressing **Escape** triggers menu closure.
   - Follows accessibility patterns used in modals, drawers, and overlays.

   ### 5. Click-Outside Detection
   - Clicking anywhere outside the menu container closes the menu.

   ### 6. Focus Trap Inside the Mobile Menu
   - `Tab` and `Shift+Tab` are intercepted while the menu is open:
   - Prevents focus from leaving the menu.
   - Loops focus between the first and last interactive elements.
   - Ensures that keyboard users remain within the open menu until it is closed.

3. Notes/questions for community

   Feel free to provide any feedback that could help me improve this component’s accessibility and focus management.

## Text Input

Implementation Details

1. Tech stack and approach
   - React, Typescript, Tailwind CSSv4, CVA (Class Variant Authority)
   - Follow the mobile-first approach towards designing navbar.

2. Useful resources and lessons learnt

   Accessibility used are as follows.

   `aria-invalid` – Marks the input as invalid when there’s an error. Screen readers will announce it as invalid.

   `aria-describedby` – Links the input to a hint or error message using the paragraph’s id. Screen readers read this text when the input is focused.

   `htmlFor on <label>` – Connects the label to the input. Clicking the label focuses the input, and screen readers announce the label.

3. Notes/questions for community

   Feel free to provide any feedback that could help me improve this component.

## Textarea

Implementation Details

1. Tech stack and approach
   - React, Typescript, Tailwind CSSv4, CVA (Class Variant Authority)
   - Follow the mobile-first approach towards designing navbar.
   - Similar to the TextInput component

2. Useful resources and lessons learnt

   Accessibility used are as follows.

   `aria-invalid` – Marks the input as invalid when there’s an error. Screen readers will announce it as invalid.

   `aria-describedby` – Links the input to a hint or error message using the paragraph’s id. Screen readers read this text when the input is focused.

   `htmlFor on <label>` – Connects the label to the input. Clicking the label focuses the input, and screen readers announce the label.

3. Notes/questions for community

   Feel free to provide any feedback that could help me improve this component.
