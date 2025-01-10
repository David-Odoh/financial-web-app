````markdown
# Fincial App Web Template

## Prerequisites

Before you run the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 16.x)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) (depending on your preference)

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-project-name.git
```
````

### 2. Install Dependencies

Navigate to the project folder and install the dependencies:

```bash
cd your-project-name
npm install
# OR if you're using Yarn:
# yarn install
```

### 3. Add Environment Variables

To enable image uploading functionality, you need to add your **Pinata API keys** to your `.env.local` file.

Create a `.env.local` file in the root of the project (if it doesn’t already exist) and add the following variables:

```env
NEXT_PUBLIC_PINATA_API_KEY=232323
NEXT_PUBLIC_PINATA_SECRET_API_KEY=2e234234
```

Replace the values of `NEXT_PUBLIC_PINATA_API_KEY` and `NEXT_PUBLIC_PINATA_SECRET_API_KEY` with your actual Pinata API keys.

### 4. Run the Project

Once the environment variables are set, you can run the project locally.

For development mode:

```bash
npm run dev
# OR if you're using Yarn:
# yarn dev
```

This will start the development server at `http://localhost:3000`.

### 5. Image Upload Feature

The image upload functionality uses Pinata’s API. Ensure that your API keys are correctly added in `.env.local`. If you don’t have a Pinata account, sign up at [Pinata](https://www.pinata.cloud/) and generate the necessary keys.

### 6. Access the Application

You can now access the application in your browser by navigating to:

```
http://localhost:3000
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```
