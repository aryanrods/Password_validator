# Password Validator

A React-based application that validates the strength of a password using the `validator` library. The app provides real-time feedback on password strength and categorizes it as **Strong**, **Okay**, or **Weak**.

## Features
- Validates password strength based on:
  - Minimum length
  - Lowercase and uppercase letters
  - Numbers
  - Symbols
- Real-time feedback to the user
- Styled with Tailwind CSS for a clean and responsive UI

## Prerequisites
- Node.js (v16 or later recommended)
- npm or yarn

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/password-validator.git
cd password-validator
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the Application
```bash
npm start
# or
yarn start
```

This will start the development server, and the app will be accessible at `http://localhost:3000`.

## Usage
1. Enter a password in the input field.
2. The app will display whether the password is **Strong**, **Okay**, or **Weak**.

## Password Strength Criteria
- **Strong**:
  - Minimum 8 characters
  - At least 1 lowercase letter
  - At least 1 uppercase letter
  - At least 1 number
  - At least 1 symbol
- **Okay**:
  - Minimum 8 characters
  - At least 1 lowercase letter
  - At least 1 uppercase letter
- **Weak**:
  - Does not meet the above criteria

## Built With
- [React](https://reactjs.org/) - Frontend Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling Framework
- [Validator](https://www.npmjs.com/package/validator) - Password Validation Library

## Screenshots
<img width="724" alt="Screenshot 2025-01-29 at 12 06 46 AM" src="https://github.com/user-attachments/assets/0e9de1a8-8bbc-44d8-8e4e-b230a5a35f6f" />


## Folder Structure
```
password-validator/
├── public/           # Static assets
├── src/              # Application source code
│   ├── App.css       # Tailwind CSS classes
│   ├── App.js        # Main React component
│   ├── index.js      # Entry point
├── package.json      # Dependency definitions
├── README.md         # Documentation
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please open an issue or create a pull request to suggest improvements.

## Acknowledgements
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Validator](https://www.npmjs.com/package/validator)

---

### Author
aryanrods(https://github.com/aryanrods)

