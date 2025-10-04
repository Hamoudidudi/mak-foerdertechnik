// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <body className="min-h-screen bg-white" style={{ paddingTop: "var(--header-h)" }}>
        {children}
        </body>

        </html>
    );
}
