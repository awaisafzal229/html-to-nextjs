import "@/app/globals.css"
import Footer from "./(components)/footer/footer"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"/>
      </head>
      <body>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
