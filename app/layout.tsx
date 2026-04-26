export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav><strong>Navbar</strong></nav>
        {children}
        <footer><strong>Footer</strong></footer>
      </body>
    </html>
  )
}