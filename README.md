#  Business Chatbot Template 

![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

Welcome to the **Business Chatbot Template** project! While currently configured for **WonderWorld** (a magical theme park example), this is a flexible full-stack application designed to be easily adapted for any business. The chatbot helps guests with information about products, services, hours, and more.

> 💡 **Note**: WonderWorld is just a demonstration context. You can easily feed this chatbot your own business data!

## 🌟 What This Project Does

This application serves as a comprehensive assistance interface. It combines a modern, responsive web client with a fast, intelligent backend service to answer user queries in natural language based on provided context.

The system is designed to:

- Be efficiently retargeted to any business domain by updating the knowledge base.
- Provide real-time information based on your data.
- Answer questions using context-aware AI (powered by OpenAI).

## 🔄 Adapting for Your Business

WonderWorld is just a placeholder. To use this for your own business:

1. Open `packages/server/prompts/WonderWorld.md`.
2. Replace the content with your own business information (FAQs, pricing, services, etc.).
3. The chatbot will immediately start answering questions based on your new data!

## 🚀 Key Features

- **🤖 AI-Powered Chat**: Intelligent conversation aware of WonderWorld's specific attractions and rules.
- **⚡ High Performance**: Backend powered by **Bun** and **Express** for low-latency responses.
- **🎨 Modern UI**: Beautiful, responsive frontend built with **React**, **Vite**, and **TailwindCSS**.
- **🏗️ Monorepo Structure**: efficient code organization with separate packages for `client` and `server`.
- **🛡️ Type Safety**: Full TypeScript implementation across the stack with **Zod** validation.

## 🛠️ Tech Stack

- **Runtime**: [Bun](https://bun.sh/)
- **Frontend**: React, Vite, TailwindCSS, Lucide React
- **Backend**: Express, OpenAI SDK, Zod
- **Language**: TypeScript

## 🏁 Getting Started

Follow these steps to get the project running locally.

### Prerequisites

- [Bun](https://bun.sh/) (latest version)
- An OpenAI API Key

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Shahar-Mamok/my-app.git
   cd my-app
   ```

2. **Install dependencies**:
   Run the following command at the root to install dependencies for all workspaces:
   ```bash
   bun install
   ```

### Configuration

1. **Server Configuration**:
   Navigate to the server package and set up your environment variables.
   ```bash
   cd packages/server
   ```
   Create a `.env` file (if it doesn't already exist) and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=sk-your-api-key-here
   PORT=3000
   ```
   _(Note: A `.env` file may already exist. Ensure it has the correct keys.)_

### Running the Application

To run both the **Client** and **Server** concurrently from the root directory:

```bash
bun run dev
```

This will start:

- **Server** at `http://localhost:3000`
- **Client** at `http://localhost:5173` (or the next available port)

Open your browser and navigate to the client URL to interact with the Chatbot.

## 📂 Project Structure

```
my-app/
├── packages/
│   ├── client/          # React frontend application
│   │   ├── src/         # UI components and logic
│   │   └── ...
│   └── server/          # Express backend application
│       ├── controllers/ # Request handlers
│       ├── services/    # Business logic & AI integration
│       ├── prompts/     # Knowledge base (WonderWorld.md)
│       └── ...
├── package.json         # Root configuration & scripts
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## 🆘 Support

If you encounter any issues or have questions, please check the existing issues on the repository or open a new one.

## 📜 License

This project is licensed under the MIT License.
