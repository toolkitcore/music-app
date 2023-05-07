import { SongProvider } from "../context/SongProvider";
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SongProvider>
          <Sidebar />
          
          <main>
            { children }
          </main>
        </SongProvider>
      </body>
    </html>
  )
}
