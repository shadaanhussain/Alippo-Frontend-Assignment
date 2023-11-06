# Alippo-Frontend


## Assignment Details
In this project, I developed a web application using React and JavaScript, and I utilized Bootstrap for CSS styling to create a visually appealing and responsive user interface. The primary goal of this project was to design a dynamic dashboard capable of fetching and displaying data from an external API source. I placed a strong emphasis on ensuring a smooth and intuitive user experience, including the graceful handling of null and empty data cases.

The project's codebase is meticulously organized, with an emphasis on readability and adherence to best coding practices. To aid anyone interested in the project, I provided a comprehensive README that includes details on the project's folder structure and essential pointers for understanding the code. The GitHub repository is accessible to the public, enabling easy review and assessment by potential collaborators or employers.

This project not only demonstrates my proficiency in React, API integration, state management, and UI development but also underscores my commitment to maintaining developer-friendly practices. The use of Bootstrap for CSS styling ensures that the dashboard is aesthetically pleasing, user-friendly, and fully responsive across various devices, making it a valuable asset in any web development portfolio.


### Built With

- [React.js](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)


# Getting Started
## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

- **Code Editor**: You'll need a code editor to work on this project. We recommend using [Visual Studio Code](https://code.visualstudio.com/) for the best development experience.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shadaanhussain/Alippo-Frontend-Assignment.git

   ```
2. Go to the project folder
   ```sh
   cd Alippo-Frontend-Assignment

   ```
3. Install packages with npm
   ```sh
   npm i
   ```
4. Start  your applicatoin using
   ```sh
   npm run dev
   ```

# Components
## Home Component
The `Home` component plays a pivotal role in rendering the table's body section. Its core functionality involves iterating through a data list and generating table rows for each item within it. 
### Features

- `Table`: Shows the data in tabular form.

- `EditButton`: It opens the modal box to edit the data of the particular row.

- `DeleteButton`: It opens the modal box to delete that particular row.
<div align="center">
    <img width="1007" alt="Screenshot 2023-11-06 at 7 12 37 PM" src="https://user-images.githubusercontent.com/75877797/280749455-042c71ae-23c5-4127-bab3-8a60d35df8dc.png">
</div>

## Delete Component
The `Delete` component opens the modal box to perform delete operation.
The component accepts the following properties:
### Features
- `Confirm`: This button will execute the delete operation.
- `Cancel`: This button will cancel the delete operation and redirect to the `Home` Page.

<div align="center">
<img width="451" alt="Screenshot 2023-11-06 at 7 15 13 PM" src="https://user-images.githubusercontent.com/75877797/280749483-6b33b506-c9fd-4bb5-b9b9-b43855616ad2.png">
</div>

## Edit Component
The `Edit` component opens the modal box to perform edit operation. 

### Features
- `Input`: This will take the input.
- `Cancel`: This will cancel the Edit functionality.
- `Save`: This button will finaly the update the value and redirect to `Home` Page with updated value.

<div align="center">
<img width="451" alt="Screenshot 2023-11-06 at 7 15 13 PM" src="https://user-images.githubusercontent.com/75877797/280749480-3c9164ee-2fd7-4886-92a1-340176abd708.png">
</div>

