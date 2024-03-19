import {Metadata} from "next";

export const metadata:Metadata={
    title:'New NextJs',
    description:'New NextJs'
}
export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <main>{children}</main>
        </body>
        </html>
    )
}