# Xilie Spotify OAuth Callback Handler

A lightweight Next.js application that serves as an OAuth callback endpoint for the Xilie Spotify VS Code extension. This application captures the OAuth response from Spotify and provides a simple interface for users to copy the authorization code back to their VS Code environment.

## Purpose

This application solves the challenge of handling OAuth callbacks in VS Code extensions by providing a simple web interface that:
1. Receives the OAuth response from Spotify
2. Displays the authorization code or error message
3. Allows users to easily copy the code back to their VS Code extension

## Features

- Simple and intuitive user interface
- Clear error messaging for failed authentications
- One-click copy functionality for the authorization code
- Responsive design that works in any browser window size

## Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager
- Spotify Developer Account with a registered application

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/DavidMANZI-093/xilie-cb.git
   cd xilie-cb
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   SPOTIFY_REDIRECT_URI=http://localhost:3000/api/auth/callback
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## How It Works

1. The VS Code extension initiates the OAuth flow and opens this application in the user's default browser
2. Spotify redirects back to this application with either:
   - An authorization `code` parameter (on success)
   - An `error` parameter (if authentication failed or was denied)
3. The application parses the URL parameters and displays:
   - The authorization code with a copy button (on success)
   - A helpful error message (on failure)
4. Users can click the copy button to copy the code to their clipboard
5. The VS Code extension can then use this code to complete the OAuth flow

## Project Structure

```
/src
  /app
    /components       # Reusable UI components
      /ui            # Shadcn UI components
    globals.css      # Global styles
    layout.tsx       # Root layout component
    page.tsx         # Main page component (handles OAuth callback)
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run the linter
- `npm run format` - Format the code using Biome

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building the web interface
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript for better developer experience
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling
- [Shadcn UI](https://ui.shadcn.com/) - Reusable UI components
- [Lucide React](https://lucide.dev/) - Beautiful and consistent icons

## Security Considerations

- No sensitive data is stored on the server
- The application runs entirely in the browser
- All OAuth tokens are processed client-side
- The authorization code is only displayed to the authenticated user
- The application uses HTTPS in production to protect data in transit

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- [Next.js Documentation](https://nextjs.org/docs)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
