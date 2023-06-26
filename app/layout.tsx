import Layout from "@/layouts/Layout"
import "./globals.css"

export const metadata = {
  title: "atp profile",
  description: "Profile Attapat kayasa",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <div className="content">
            {children}
          </div>
        </Layout>
      </body>
    </html>
  )
}
