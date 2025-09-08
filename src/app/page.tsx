import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CircleCheck, Copy, XCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SpotifyCallback() {
  const [authCode, setAuthCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    // Extract parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const error = urlParams.get("error");
    const error_description = urlParams.get("error_description");

    if (code) {
      setAuthCode(code);
    } else if (error) {
      switch (error) {
        case "access_denied":
          setError("Authentication was cancelled. You need to authorize Xilie to access your Spotify account.");
          break;
        case "invalid_client":
          setError("Invalid client configuration. Please contact the extension developer.");
          break;
        case "invalid_request":
          setError("Invalid authentication request. Please try again from VS Code.");
          break;
        case "server_error":
          setError("Spotify server error occured Please try again later.");
          break;
        default:
          setError(error_description || `Authentication failed: ${error}`);
      }
    }
  }, []);

  const copyToClipboard = async () => {
    if (authCode) {
      try {
        await navigator.clipboard.writeText(authCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = authCode;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  }

  return (
    <div className="min-h-screen bg-eerie-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-raisin-black border-onyx shadow-2xl">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center-mb-4">
            <Image src="xilie-icon.png" alt="Xilie Logo" width={64} height={64} className="rounded-lg" />
          </div>
          <CardTitle className="text-silver text-xl font-medium">Xilie Spotify Authentication</CardTitle>
          <CardDescription className="text-battleship-gray text-sm">VS Code Extension OAuth Callback</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {authCode ? (
            <>
            <Alert className="bg-british-racing-green border-forest-green text-dark-pastel-green">
              <CircleCheck className="h-4 w-4" />
              <AlertDescription className="text-sm">
              Authentication successful! Copy the code below and paste it in VS Code to complete the setup.
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
                <label className="text-silver text-sm font-medium block">Authorization Code:</label>
                <div className="relative">
                  <div className="bg-eerie-black border border-onyx rounded-md p-3 font-mono text-xs text-timberwolf break-all select-all">
                    {authCode}
                  </div>
                  <Button
                    onClick={copyToClipboard}
                    size="sm"
                    className="absolute top-2 right-2 h-7 w-7 p-0 bg-blue-violet hover:bg-electric-indigo text-white"
                  >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  </Button>
                </div>

                <div className="text-battleship-gray text-xs space-y-1">
                  <p>1. Copy the authorization code above</p>
                  <p>2. Return to VS Code</p>
                  <p>3. Paste the code when prompted</p>
                  <p>4. Enjoy your music controls!</p>
                </div>
              </div>
            </>
          ) : error ? (
            <>
              <Alert className="bg-caput-mortuum border-tomato text-tomato">
                <XCircle className="h-4 w-4" />
                <AlertDescription className="text-sm">{error}</AlertDescription>
              </Alert>

              <div className="text-battleship-gray text-xs space-y-1">
                <p>
                  <strong>Troubleshooting:</strong>
                </p>
                <p>• Make sure you clicked "Agree" on Spotify's authorization page</p>
                <p>• Ensure you have a Spotify Premium account</p>
                <p>• Try the authentication process again from VS Code</p>
                <p>• Contact manzidavid093@gmail.com if you need beta access</p>
              </div>
            </>
          ) : (
            <div className="text-center text-battleship-gray text-sm">Processing authentication...</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}