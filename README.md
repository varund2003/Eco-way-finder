# Eco Way Finder

Eco Way Finder is a sustainable navigation system that helps users find eco-friendly routes for their travel. This README file provides instructions on setting up and running the Eco Way Finder application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) installed.
- A modern web browser.

## Installation

1. Clone the Eco Way Finder repository to your local machine:

   ```bash
   https://github.com/varund2003/Eco-way-finder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd eco-way-finder
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Configuration

The configuration file is located at `config/config.js`. You may customize the settings according to your requirements.

The server script uses a simple configuration file to set the port and the path to the HTML file it serves. Follow these steps to configure the server for your environment:

1. Open the `config.json` file in the project directory.

2. Update the configuration values as needed:

   ```json
   {
     "port": 3000,
     "htmlFilePath": "C:/Users/dvaru/Downloads/eco way finder/Eco way finder.html"
   }
   ```

   - **port:** Specify the port on which the server will run. The default is 3000.
   - **htmlFilePath:** Provide the full path to your HTML file. Ensure the path uses forward slashes and includes the drive letter (e.g., `C:/`).

3. Save the `config.json` file.

4. Run the server again:

   ```bash
   node index.js
   ```

5. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the HTML file.

**Note:** If the HTML file is moved or the path is incorrect, the server will return a 500 error. Make sure to verify the path in the `config.json` file.

Feel free to customize the instructions based on your specific project's needs. If there are additional configuration options or considerations, include them in this section.

## Usage

1. Start the Eco Way Finder application:

   ```bash
   npm start
   ```

2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

3. Explore the Eco Way Finder interface, enter your starting and ending locations, and discover eco-friendly routes.

## Contributing

We welcome contributions! If you'd like to contribute to Eco Way Finder, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## License

This project is licensed under the [MIT License](LICENSE).


