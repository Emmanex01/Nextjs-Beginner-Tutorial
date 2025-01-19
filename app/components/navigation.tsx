"use client";
import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {

    // Store the current route in the pathname variable
    const pathname = usePathname()
    return (
        <nav>
            
            <Link 
                href="/"
                className={pathname === '/' ? "text-red-300" : "text-black"}
            >
                Home
            </Link>

            <Link 
            href="/Product/about"
            
            className={pathname === '/Product/about' ? "text-red-300" : "text-black"}
            >
                About
            </Link>

            <Link 
            href="/Product/about"
            // startsWith property can also be use to access the route path
            className={pathname.startsWith("/Product/about") ? "text-red-300" : "text-black"}
            >
                About22
            </Link>

            {/* SignedOut Element is used to conditionally display the SignInBtn when the user is signed out */}
            <SignedOut>
                <SignInButton mode="modal"/>
            </SignedOut>

            {/* SignedIn Element is used to conditionally display the UserBtn when the user is signed in */}
            <SignedIn>
                {/* UserButton is used to manage user account */}
                <UserButton/>
            </SignedIn>
            
            
            
        </nav>
    )
}