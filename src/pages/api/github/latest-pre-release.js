import { useEffect, useState } from "react";

export default function RoutineHubDownload() {
    const [message, setMessage] = useState("Loading...");
    const [redirectUrl, setRedirectUrl] = useState(null);

    useEffect(() => {
        const run = async () => {
            setMessage("WIP api, please wait");
            return;
            const search = new URLSearchParams(document.location.search);
            
            const required = ["owner", "repo", "file"];
            const missing = required.filter(item => !Array.from(search.keys()).includes(item));
            if (missing.length > 0) {
                setMessage(`Missing params: ${JSON.stringify(missing)}`);
                return;
            }

            const apiUrl = `https://api.github.com/repos/${search.get("owner")}/${search.get("repo")}/releases`;

            try {
                const res = await fetch(apiUrl);
                if (!res.ok) throw new Error("Request failed");

                const data = await res.json();

                const url = data.assets.find(asset => asset.name === search.get("file"));

                if (!url) {
                    setMessage("No release URL found in response.");
                    return;
                }

                setRedirectUrl(data.URL);
                setMessage("You should get redirected in a second…");

                window.location.href = data.URL;
            } catch (e) {
                setMessage("Error: " + e.message);
            }
        };

        run();
    }, []);

    return (
        <div>
            <p>{message}</p>

            {redirectUrl && (
                <a href={redirectUrl}>
                    Click here if you are not redirected
                </a>
            )}
        </div>
    );
}