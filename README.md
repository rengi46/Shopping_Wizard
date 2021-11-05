# Shopping Wizard Project

## iPhone 13 - Apple Online Store Inspired

This project was developed based on peer coding using HTML, CSS and JS only.

## Prerequisites

### Phase 1: Product
    * This is the first content that you will see in HTML
    * The app will have image miniatures that by hovering over them you will see the image in a bigger size in the main product image region.
    * Here you must create two options that depending on the user choice the price and the images will change. These options can be a color or product size such as XS, S, M, L, XL t-shirt sizes.
### Phase 2: Step 1 - Profile
    * Username
        * Set the specific input type for text
            * Text without spaces
        * Required
        * Minlength: 5
        * Max. length: 20
    * Email
        * Set the specific input type for email
        * Required
        * Max. length: 50
    * Password
        * Set the specific input type for password
        * Required
        * The text must contain at least:
            * One number
            * One uppercase letter
            * One lowercase letter
            * One special character
        * Min. length: 8
        * Max. length: 20
    * Confirm password
        * Must be the same that the previous password
 ### Phase 3: Step 2 - Address
    * First name
        * Set the specific input type for text
        * Required
        * Max. length: 20
    * Last name
        * Set the specific input type for text
        * Required
        * Max. length: 20
    * Birthday
        * Set the specific input type for dates
        * Required
    * Address 1
        * Set the specific input type for text
        * Required
        * Max. length: 50
    * Address 2
        * Set the specific input type for text
        * Max. length: 50
    * Postal code
        * Set the specific input type for numbers
        * Required
        * Max: 5 digits
    * Country
        * Set the specific HTML element for selects
        * Required
        * This field sets the default phone country codes (the next option) that matches the user selected option
        * List of countries:
            * Andorra
            * España
            * Francia
            * Alemania
            * Grecia
    * Phone country code
        * Set the specific HTML element for selects
        * Required
        * Although in the previous option puts default a value in this select, you can change the value whenever you want
        * List of countries codes:
            * 376 - AND
            * 34 - ESP
            * 33 - FRA
            * 49 - DEU
            * 30 - GRC
    * Phone
        * Set the specific input type for telephone numbers
        * Required
        * The input can contain only numeric values
        * Max: 9 digits
    * This is my regular address
        * Input type checkbox
### Phase 4: Step 3 - Shipping
    * Shipping types (required)
        * Radio button
        * Required
        * Options:
            * Free shipment (72H) ( no extra cost )
            * Extra shipping (48h) ( +5 € )
            * Premium (24h) ( + 10€ )
    * Shipping date info
        * This information will appear when you choose the shipping option
        * The shipping date will show the shipping time depending on the previous option between a range of two dates
            * Date 1 (minimum date):
                * This label will show today's date + 24h,48h or 72h.
                * 21/04/2020 09:00 + 24h = 22/04/2020 09:00
            * Date 2 (maximum date):
                * “Date 1“ + 24 margin hours
                * 22/04/2020 09:00 + 24h = 23/04/2020 09:00

    * Gift wrap
        * Input type checkbox
        * Optional
        * If you select this option it will automatically appear:
            * Input title
            * Input message (textarea [max 200])
            * Input file (accept="image/png, image/jpeg")
### Phase 5: Step 4 - Finish
    * Terms and conditions (checkbox)
        * Required
        * The finish button will remain disabled until you select the checkbox
    * Product details
    * Shipping date details
    * Final price
    * The time it took the user to finish the registration since the first part (step 1)

## 3.1 Form requirements
Below are the general requirements that the form should have:
Each step page will contain a “next” and a “clear form” button.
The “next” button will link to the next step.
The information of the form will be saved in memory, the main purpose of this pill is to learn to work with HTML, CSS and JS together with the part of validation done in Javascript.
The “reset” button will reset all the input values in the current step introduced by the user to the default ones
Step 4 will contain a “finish” button instead “next” that will link to the “thank you” page
In this page there will be a link to start the form again.
All the JS validation messages will be displayed in the screen below the respective input in a paragraph with the custom message.
This element must be loaded in the HTML using Javascript.
You will need to apply custom styles to the inputs that have not passed the validation to apply some error styling, such as the letter or container being shown in red
For every minute that the user remains in the purchase process (step 1, step2, step 3 and step 4), a message must be shown on the screen that must be hidden 5 seconds after it appears.
The purchase process will have a time limit of 5 minutes (start in step 1), if it is not completed in this period of time (the process is completed by reaching the thank you page), a message should appear on the screen indicating that the maximum time allowed for the purchase process has been exceeded and will automatically redirect you to the product screen in 5 seconds (the first screen)
When you reach the Thank You page you will show all the values that are specified in the documentation (shipping, purchase time, ...) and then you will have to reset all the information that you have stored in this process (time, price, …)

##  4. Requirements
You will have to implement the entire application using a single HTML file
All the processes must be carried out without reloading the page
You cannot use cookies, localStorage or any similar technologies
You cannot use third-party libraries
## 5.Extras 💯
Once you have implemented the main features of the application you should implement the following extra requirements (that are not specified in any particular order) as a challenge for yourself and your team. However, you can also consider them during the development of the pill if you would like to implement any of them from the beginning, such as the design requirements or the browser compatibility.
It is easier to develop a feature from the beginning than to modify it later.
5.1 Browser compatibility
You should check that everything is compatible with other current browsers, and, as an extra step.
5.2 Input validation
All the input validation should be done after users have entered a value, this means that you should only validate the value in the input fields after a value has been entered and not before users interact with the inputs.
The validation should be done when the input field loses focus, that is, users type a value, they change focus to another element, then the field validation runs.
After a validation message is entered and users focus the input element to adjust the value, the validation message and any error styles should be removed until the user has entered a new value and the focus is lost from the input field as before.
5.3 The design of the application should be different and not have a wireframe look similar to the wireframes we provide
5.4 Remove event listeners
All the event listeners that were attached to the elements in the other containers such as modals should be removed to avoid memory leaks.
5.5 Responsive design
All the screens and steps should be responsive using flexbox so that they can be used in any device size.
5.6 Accessibility
You should use semantic HTML elements for all the app such as buttons and HTML5 sectioning elements (main, section, nav, etc)

## 6. Deliverables
To evaluate the project you will need the following deliverables:
### Project repository with:

A presentation in Google Slides explaining:
Explain what lessons you’ve learned during this project
What problems have you encountered when developing this project?
Explain how you changed roles to develop the project for each phase (screen)

### Slides Presentation

- [Google Slides link] (https://docs.google.com/presentation/d/e/2PACX-1vSnnd99yVPdAuJA69DbA7M0ajAqqe2Qvd-_WxRW9pqeWMEfyzIbIpU9KJOVfKGWfvYC8L_WNWDE5lMA/pub?start=true&loop=true&delayms=3000)


### Built With

- [Visual Code Studio](https://code.visualstudio.com/)


# Authors

- **Marcel Durgante**
- **Garikoitz Herrero**
- **Roger Puigdemasa**

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Assembler School of Software Engineering / Barcelona / October's Promotion 2021
