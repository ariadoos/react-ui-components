# React UI components

## Installation

```
npm run ci
```

## Local environment

```
  npm run dev
```

## Button

This was the button component design challenge from the GreatFrontEnd.

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

3. Design approaches
   - Used semantic color system using Tailwind color palette.
   - Made component with Single Responsibility Principle.

4. Learning outcomes
   - CVA made the handling of different variants for a button component easier.
   - I wasn’t sure whether to place the Icon component inside the Button component or keep it separate. I eventually chose to keep the Icon outside. Both options have pros and cons, but I prefer keeping the Button component simple and letting the parent component decide how to display the icon.

5. Future improvements
   - Group the tailwind classes for easier readability / reusability .
   - Migrate this component to storybook.~
