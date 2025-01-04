import NavBar from "../../components/ui/NavBar";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (

        <main className="font-work-sans">

            <NavBar></NavBar>
            {children}



        </main>
      
    );
  }