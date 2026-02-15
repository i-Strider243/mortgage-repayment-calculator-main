# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/public/screenshots/desktop-screenshot.jpeg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/mortgage-repayment-calculator-using-react-sass-and-react-hook-form-7auf8t1JU2)
- [Live Site URL](https://mortgage-repayment-calculator-plum.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- SCSS custom properties
- Flexbox
- SASS
- [React](https://react.dev/) - JS library
- React Hook Form

### What I learned

I learnt how to use React Hook Form for form validation and submission.

```js
<div>
  <InputNumber
    label={"Interest Rate"}
    marker={"%"}
    align={"align-right"}
    step="0.01"
    register={register("interestRate", { required: true })}
  />
  {errors.interestRate && <span className='error'>This field is required</span>}
</div>
```

### Continued development

I would like to continue learning and using React Hook Form for the foreseeable future.

### Useful resources

- [Getting Started with React Hook Form](https://react-hook-form.com/get-started) - The official docs of the React Hook Form. I really liked this pattern and will use it going forward.
- [React Hook Form - Get Started](https://www.youtube.com/watch?v=RkXv4AXXC_4&list=PL03g4H_exuTppOgtY-45oWvN79rvJIKzf) - This is an amazing video which helped me finally understand the React Hook Form. I'd recommend it to anyone starting this concept.

## Author

- Website - [Simon-gabriel](https://simon-gabriel.netlify.app)
- Github - [i-Strider243](https://github.com/i-Strider243)
- Frontend Mentor - [@i-Strider243](https://www.frontendmentor.io/profile/i-Strider243)
- X - [@Strider18](https://x.com/Strider18)
- LinkedIn - [@SimonGabriel](www.linkedin.com/in/gabriel-o-simon)

## Acknowledgments
I thank God for another completed project. I also thank Frontend Mentor for the frontend learning path that enabled me to take on this project.
