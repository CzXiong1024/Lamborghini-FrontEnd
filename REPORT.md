# Lamborghini E-Commerce

## Report

### 0. Alternative Access for the code this project
- GitHub: 
  - front-end: [Front-end for this project on GitHub](https://github.com/CzXiong1024/Lamborghini-FrontEnd)
  - back-end: [Back-end for this project on GitHub](https://github.com/CzXiong1024/Lamborghini-Backend)
  - NOTICE: Please view `README.md` file for the steps of running & testing this project locally
  - PS: The back-end runs well on Glitch.
- Glitch:
  - front-end: [Front-end for this project on Glitch](https://glitch.com/~lamborghini-infsci2560-final-project)
  - back-end: [Back-end for this project on Glitch](https://glitch.com/~infsci2560-final-lambo-server)


### 1. Introduction
- Team: 
  - Chengzhuo Xiong (CHX53) 
  - Yutong Tang (YUT89) 
  - Shiyuan Luo (SHL298) 
  - Sizhe Fu (SIF33) 
- The e-commerce website is built with the MERN stack, which includes MongoDB, ExpressJS, React, and NodeJS. It is designed to be a general online shopping website that includes several different categories of products, such as accessories, desktops, laptops, phones, tablets, watches, vehicles, clothes, toys, and decorations. 
- Guests can browse the products and select the ones they want to purchase. They can also register as users to add products to their shopping cart and complete the checkout process. 
- Administrators have access to manage all the products and users on the website
- Overall, the e-commerce website provides a user-friendly experience for shoppers to easily find and purchase products, while also providing administrators with the necessary tools to manage the website's content and users.

### 2. Objective 
- Objectives and goals
  - The project aims to create an online marketplace where users can browse and purchase products. There are three main types of users in the system: guests, registered users, and administrators.
  - Guests are visitors who have not yet registered an account on the platform. They can browse the website and view recently added products. If they decide to make a purchase, they must register as a user.
  - Registered users can log in to the system using their credentials. Once logged in, they have access to additional features such as viewing their profile information, viewing their transaction history, filtering products by name or category, adding products to their shopping cart, and viewing/editing their shopping cart. Registered users can also place an order for the products in their shopping cart.
  - Administrators have access to all the features of the system. They can log in to the system and view their profile information. They can add, edit, or delete products from the system. Administrators can also view all transactions made on the platform and view information about all users registered on the platform. Additionally, administrators have the ability to edit or delete user accounts.
  - Overall, the goal of the project is to create a fully functional online marketplace where guests can become registered users, purchase products, and administrators can manage the platform and its users.

- Things learned:
  - Developing a fully functional online marketplace with multiple user types and access levels.
  - Implementing user authentication and authorization features.
  - Implementing features such as product filtering, shopping cart management, and order processing.
  - Developing a robust database schema to efficiently store and retrieve data.
  - Building an intuitive and responsive user interface.
  - Testing, debugging, and deploying a web application.

- Beyond requirements:
  - In addition to the features listed in the assignment requirements, we implemented several additional features to improve the functionality and usability of the application. 
  - One of the features we used was the date-fns library to format date and time values. This allowed us to display dates and times in a user-friendly format and made it easier for users to understand and interact with the data. 
  - Another feature we implemented was JSON web token (JWT) authentication. This allowed us to securely authenticate users and protect sensitive data within the application. 
  - Additionally, we implemented various other enhancements such as improved error handling, optimized database queries, and improved user interface elements to create a more polished and user-friendly experience. 
  - Overall, these additional features helped to improve the functionality, usability, and security of the application, and allowed us to provide a more comprehensive and enjoyable user experience.







### 3. Team member’s contributions 
- Chengzhuo Xiong(Project Manager & Back-end Developer):
  1. Developed the APIs for authentication and users 
  2. Established the web tokens for user verification
  3. Debug the code for the whole project
  4. Participated for making the slides (Technologies & Challenges)

- Yutong Tang(Project Designer & Back-end Developer)
  1. Established the data models for products/transactions/users
  2. Developed the APIs for products and transactions
  3. Debug for the connection between front-end & back-end
  4. Participated for making the slides (Introduction & Features)

- Shiyuan luo(Project Designer & Front-end Developer)
  1. Created the website's structure, styling, and interactivity
  2. Integrated front-end components with the website's back-end systems
  3. Worked for responsive design
  4. Wrote the project report

- Sizhe Fu(Project Designer & Front-end Developer)
  1. Created the website's structure, styling, and interactivity
  2. Integrated front-end components with the website's back-end systems
  3. Worked for responsive design
  4. Wrote the project report

### 4. Technical Architecture 
- Models: Use Mongoose to define the schema for the data and provide an interface for working with MongoDB.
- Views: Use React components to define the visual elements of our application and handle user interaction. Use React Router DOM to define the structure of the application and handle navigation. Use Tabler Icons React and Mantine UI to add visual elements to the application.
- Controllers: Use Express to define routes and middleware functions to handle requests and interact with the Model and View layers. Use Axios to make HTTP requests from the client to the server. Use CORS to enable communication between the client and server. Use Date-fns to format dates and times for display to the user. Use Web Vitals to monitor and optimize the performance of the application.

### 5. Challenges 
- Implementing secure password storage and user authentication can be complex and time-consuming. 
- Balancing different functionality for general users and administrators can require careful planning and organization to ensure that each group of users has access to the appropriate features and information.
- Unifying styles across different pages can be challenging, especially when working with a large and complex application. 
- Providing a user-friendly experience can require significant attention to detail and user testing to identify and address usability issues.
- Integrating with the back-end can be complex, especially if when working with multiple technologies and libraries. We have needed to troubleshoot issues related to API calls, data formatting, and data validation.

### 6. Future Work 
- User reviews and ratings: Allow users to leave reviews and ratings for products, which can help other users make informed purchase decisions.
- Wishlist: Allow users to save products they are interested in for future reference.
- Social media integration: Allow users to share products on social media platforms such as Facebook, Twitter, and Instagram.
- Order tracking: Provide users with the ability to track the status of their orders.
- Payment: Allow users to pay after they submit the order.
- Technologies to learn: Payment Gateways, Server-Side Rendering (SSR), Content Delivery Network (CDN)


### 7. Conclusion 
- In this course, we have learnt a board range of web technologies and standard, including HTML,
CSS, JavaScript, AJAX, Bootstrap, Front-end Frameworks, Back-end Frameworks, RESTful API, and 
MongoDB. These elements are important concepts and components of full-stack development. Therefore this course fits well with our career development aspirations. 

- From our perspective, it would have been nice if the class could have covered in depth a complete full-stack development process (e.g. MERN or MEAN, etc.) involving everything from project design to deployment to remote servers.

### 8. Resources 
- [read1: Build a Web App with React](https://blog.glitch.com/post/react-starter-kit)
- [read2: Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
- [read3: Creating a cart with React.js](https://commercejs.com/docs/community/creating-a-cart-with-react-js/)
- [read4: How to Use MERN Stack: A Complete Guide](https://www.mongodb.com/languages/mern-stack-tutorial)
- [read5: crypto-js](https://www.npmjs.com/package/crypto-js)
- [read6: JWT.IO](https://jwt.io/)
- [read7: Libraries for Token Signing/Verification](https://jwt.io/libraries)
- [read8: 134 responsive components built with Mantine](https://ui.mantine.dev/#main)
- [read9: Getting Started | Axios Docs](https://axios-http.com/docs/intro)
- [read10: date-fns documentation](https://devdocs.io/date_fns/)
- [watch1: Learn React In 30 Minutes](https://www.youtube.com/watch?v=hQAHSlTtcmY)
- [watch2: React JS - React Tutorial for Beginners](https://www.youtube.com/watch?v=Ke90Tje7VS0)
- [watch3: How To Create An Advanced Shopping Cart With React and TypeScript](https://www.youtube.com/watch?v=lATafp15HWA&list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK&index=43)
- [watch4: React Shopping Cart Ecommerce Beginner Website - Build & Deploy A React Beginner Project](https://www.youtube.com/watch?v=tEMrD9t85v4)
- [watch5: React JS Full Course 2022 | Build an App and Master React in 1 Hour](https://www.youtube.com/watch?v=b9eMGE7QtTk)
- [watch6: Cryptography using JavaScript (CryptoJS)](https://www.youtube.com/watch?v=hBbtvlFxUDg)
- [watch7: What Is JWT and Why Should You Use JWT](https://www.youtube.com/watch?v=7Q17ubqLfaM)
- [watch8: 7 Cryptography Concepts EVERY Developer Should Know](https://www.youtube.com/watch?v=NuyzuNBFWxQ)
- [watch9: Introduction to Mantine UI Library | Mantine](https://www.youtube.com/watch?v=PQ9htM_LBVs)
- [watch10: Full Mantine Course](https://www.youtube.com/watch?v=57vs7TLth74)




